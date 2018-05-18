<template>
    <div class="top-bar" :class="color">    
      <div v-if="!hideVotes" class="group pointer" @click="voted('like')">
        <animated :value="Number(like)"/>
        <i class="icon icon-like like-color"></i>
        <span class="label">Like</span>
      </div>
      <div v-if="!hideVotes" class="group pointer" @click="voted('dislike')">
        <animated :value="Number(dislike)"/>
        <i class="icon icon-dislike dislike-color"></i>
        <span class="label">Dislike</span>
      </div>
      <div class="group">
        <i class="icon icon-compass"></i>
        <span class="label">{{ userBrowser.name }}</span>
      </div> 
      <div class="group">
        <img :src="connectionURL" :alt="`${connection}-connected`">
        <span class="label">{{ connectionLabel }}</span>
      </div>
      <div class="group">
        <i class="icon icon-clock"></i>
        <span class="label">{{ time }}</span>
      </div>    
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import topBarMixin from '@/mixins/topBar.js';
import animated from '@/components/Animated'

export default {
  mixins: [topBarMixin],
  name: 'topbar',
  components: {
    animated
  },
  props: {
    color: String,
    hideVotes: Boolean
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState('votes',['like','dislike']),
    ...mapGetters({
      userBrowser: 'utils/userAgent',
    }),
    connection() {
      return window.navigator.onLine;
    },
    connectionURL() {
      const vm = this;
      const img = vm.connection ? 'wifi.svg' : 'no-wifi.svg';
      return require(`@/assets/${img}`);
    },
    connectionLabel() {
      const vm = this;
      return vm.connection ? 'Online' : 'Offline - Service Worker';
    },
  },
  methods: {
    ...mapActions({
      getVotes: 'votes/firebaseVotes',
      updateVotes: 'votes/updateFirebaseVotes',
    }),
    voted(val) {
      const vm = this;
      vm.updateVotes(val).then(console.log('ok'))
    }
  },
  created(){
    const vm = this;
    vm.getVotes()
  }
};
</script>
<style>
.top-bar {
  color: #ffffff;
  font-family: 'Dosis', sans-serif;
  font-size: 14px;
  left: 50%;
  padding: 4px 0;
  position: fixed;
  top: 0;
  transform: translateX(-50%);
  z-index: 999;
}
.top-bar .group {
  display: inline-block;
  margin: 0 1vw;
}
.dark {
  background-color: #333333;
  box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.17);
  text-align: center;
  width: 100%;
}
.like-color {
  color: mediumseagreen;
}
.dislike-color {
  color: tomato;
}
</style>
