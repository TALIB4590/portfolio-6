<template>
    <div>
    <div class="dock"></div>
    <div class="dock upper-layer">
        <ul class="apps">
            <li class="app">
              <label class="tooltip">{{ userBrowser.name || browserName }}</label>
              <img :src="userAgentImg" width="50" height="50">
            </li>
            <li class="app">
              <label class="tooltip">Weather</label>
              <img src="../assets/weather.png" width="50" height="50" @click="$router.push({name: 'Weather'})">
            </li>
        </ul>
    </div>
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Dock',
  computed: {
    ...mapState('utils', ['browserName', 'browserSrc']),
    ...mapGetters({
      userBrowser: 'utils/userAgent',
    }),
    userAgentImg() {
      const vm = this;
      return require(`@/assets/browsers/${vm.userBrowser.img ||
        vm.browserSrc}`);
    },
  },
};
</script>
<style>
.dock {
  transform: perspective(200px) rotateX(45deg);
  width: 50%;
  height: 5vh;
  opacity: 0.7;
  position: absolute;
  bottom: 20px;
  left: 25%;
  border-radius: 5px;
  background: -moz-linear-gradient(top, #808080 0%, #ffffff 100%);
  background: -webkit-linear-gradient(top, #808080 0%, #ffffff 100%);
  background: linear-gradient(to bottom, #808080 0%, #ffffff 100%);
}
.dock.upper-layer {
  position: absolute;
  opacity: 1;
  bottom: calc(20px + 3.3vh);
  background: none;
  transform: none;
  width: 46%;
  left: 27%;
}
.app {
  -webkit-box-reflect: below 0px -webkit-linear-gradient(bottom, rgba(
          255,
          255,
          255,
          0.7
        )
        0%, transparent 50%, transparent 100%);
}
.upper-layer ul,
.upper-layer li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.upper-layer ul {
  display: flex;
  justify-content: space-around;
}
.upper-layer li {
  display: inline-block;
  position: relative;
  cursor: pointer;
}
.upper-layer li .tooltip {
  position: absolute;
  font-size: 12px;
  display: inline-block;
  padding: 4px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  top: 0px;
  background-color: #202020;
  border-radius: 5px;
  transition: all 0.3s ease;
  z-index: -1;
  opacity: 0;
  white-space: nowrap;
}
.upper-layer li:hover .tooltip {
  opacity: 1;
  top: -30px;
}
</style>
