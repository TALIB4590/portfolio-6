<template>
    <div class="top-bar" :class="color">
      <div class="group pointer" v-for="vote in votes" :key="vote.icon" @click="voted(vote.icon)">
          <i :class="`icon icon-${vote.icon}`" :style="{color: vote.color}"></i>
          <span class="label">{{ vote.label }}</span>
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
import { mapGetters } from 'vuex';
import topBar from '@/mixins/topBar.js';

export default {
  mixins: [topBar],
  name: 'topbar',
  props: ['color'],
  data() {
    return {
      votes: [
        { label: 'Like', icon: 'like', color: 'mediumseagreen' },
        { label: 'Dislike', icon: 'dislike', color: 'tomato' },
      ],
    };
  },
  computed: {
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
    voted(val) {
      alert(val);
    }
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
  margin: 0 4px;
}
.dark {
  background-color: #333333;
  box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.17);
  text-align: center;
  width: 100%;
}
</style>
