<template>
    <transition name="fade">
    <div class="window-wrapper video" v-draggable>
      <div class="content search">
        <div class="flex">
            <input type="text" class="video-search" v-model.trim="term" placeholder="Search video..."/>
            <img class="video-logo" src="https://mycleaningbiz.com/wp-content/uploads/2017/11/youtubelogo.png">
        </div>
        <div class="video-content flex" v-if="selected">
            <div class="video-wrapper">
                <iframe class="video-player" :src="`https://www.youtube.com/embed/${selected.id.videoId}`"/>
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
                        :src="video.snippet.thumbnails.default.url" 
                        :width="100" 
                        :height="75"/>
                        <span class="title">{{ video.snippet.title }}</span>
                    </template>
                </div>
            </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import { Draggable } from 'draggable-vue-directive';
import _ from 'lodash';
export default {
  name: 'Youtube',
  directives: {
    Draggable,
  },
  data() {
    return {
      term: '',
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
.video-player {
  border: 0;
  width: 100%;
  height: 300px;
}
.video-wrapper {
  width: 65%;
  padding: 0 5% 0 0;
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
.video-item {
    margin: 0 0 10px;
}
.video-item .title{
    padding: 0 5px;
    font-size: 14px;
    line-height: 17px;
}
</style>
