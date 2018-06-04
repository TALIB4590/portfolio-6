<template>
    <transition name="fade">
    <div class="window-wrapper video" :class="{darken: mode === 'dark'}">
      <div class="content search">
        <div class="flex flex-vCenter">
            <input type="text" class="video-search" v-model.trim="term" placeholder="Search video..."/>
            <img class="video-logo" :src="youtubeSrc[mode].logo">
        </div>
        <div class="video-content flex" v-if="selected">
            <div class="video-wrapper">
                <iframe class="video-player" :src="`https://www.youtube.com/embed/${selected.id.videoId}`"/>
                <div class="video-title">{{ selected.snippet.title }}</div>
                <div class="video-infos">
                  <div>
                    <strong>{{ selected.snippet.channelTitle }}</strong>
                  </div>
                  <div>Published on {{ selected.snippet.publishedAt | onlyDate }}</div>
                </div>
                <div class="video-description">{{ selected.snippet.description }}</div>
            </div>
            <div class="video-list">
                <div 
                class="video-item pointer flex" 
                v-for="video in videoList" 
                :key="video.etag" 
                @click="selectedVideo(video)">
                    <template v-if="selected.etag !== video.etag">
                        <img
                        class="image"
                        :src="video.snippet.thumbnails.default.url" />
                        <span class="title">{{ video.snippet.title }}</span>
                    </template>
                </div>
            </div>
        </div>
      </div>
      <div class="video-wrapper-style pointer flex flex-vCenter" @click="selectedMode">
        <span style="margin-right: 5px;color: #fe0b00;">Switch to {{ youtubeSrc[mode].label }}</span>
        <img :src="require(`@/assets/youtube-${youtubeSrc[mode].icon}.svg`)" :alt="youtubeSrc[mode].label">
      </div>
    </div>
  </transition>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import _ from 'lodash';

export default {
  name: 'Youtube',
  data() {
    return {
      term: '',
      youtubeSrc: {
        default: {
          label: 'Dark mode ',
          icon: 'default',
          logo:
            'https://mycleaningbiz.com/wp-content/uploads/2017/11/youtubelogo.png',
        },
        dark: {
          label: 'Default mode ',
          icon: 'dark',
          logo:
            'https://cdn.cultofmac.com/wp-content/uploads/2018/01/YouTube-dark-780x390.jpg',
        },
      },
      mode: 'default',
    };
  },
  computed: {
    ...mapState('youtube', ['videoList', 'selected']),
  },
  methods: {
    ...mapActions('youtube', ['fetchVideos']),
    ...mapMutations('youtube', ['setSelected']),
    selectedVideo(item) {
      const vm = this;
      vm.setSelected(item);
    },
    selectedMode() {
      const vm = this;
      vm.mode = vm.mode === 'default' ? 'dark' : 'default';
    },
  },
  filters: {
    onlyDate(value) {
      if (!value) return '';
      const d = new Date(value);
      return d.toLocaleString(['en-GB'], {
        hour12: false,
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      });
    },
  },
  watch: {
    term: _.debounce(function() {
      const vm = this;
      vm.fetchVideos(vm.term);
    }, 500),
  },
  created() {
    this.fetchVideos();
  },
};
</script>
<style>
.video {
  background-color: #eeeeee;
  color: #555555;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 0 25px 25px;
}
.video.darken {
  background-color: #000000;
  color: white;
}
.video-logo {
  width: 40%;
  max-height: 140px;
}
.search input.video-search {
  border-bottom: 1px solid #555555;
  width: 60%;
  height: 50px;
  color: #555555;
}
.video.darken .search input.video-search {
  color: white;
}
.video-player {
  border: 0;
  width: 100%;
  height: 300px;
  position: static;
}
.video-wrapper {
  width: 65%;
  padding: 0 5% 0 0;
}
.video-title {
  font-size: 17px;
  font-weight: 600;
  margin: 10px 0 20px;
}
.video-infos {
  font-size: 13px;
}
.video-list {
  width: 35%;
  max-height: 400px;
  overflow-y: auto;
}
.video-description {
  background-color: #dddddd;
  padding: 10px;
  border-radius: 5px;
}
.video.darken .video-description {
  color: #555555;
}
.video-item {
  margin: 0 0 10px;
}
.video-item .image {
  flex-basis: 100px;
  max-height: 80px;
}
.video-item .title {
  padding: 0 5px;
  font-size: 14px;
  line-height: 17px;
}
</style>
