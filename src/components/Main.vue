<template>
  <div class="main">
    <top-bar color="dark"/>
    <div class="sky bg"></div>
    <div class="date bg text">{{ greeceDate() }}</div>
    <div class="time bg text">{{ time }}</div>
    <div class="day bg text">{{ greeceDay() }}</div>
    <div class="mountain bg"></div>
    <div class="dock"></div>
  </div>
</template>

<script>
import topBarMixins from '@/mixins/topBar.js';
import topBar from '@/components/topBar.vue';

export default {
  mixins: [topBarMixins],
  name: 'Main',
  components: {
    topBar
  }
};
</script>

<style>
.bg {
  background: center center / cover no-repeat;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
}
.bg.text {
  color: #333333;
  font-family: 'Dosis', sans-serif;
  height: auto;
  width: auto;
}
.sky {
  background-image: url('../assets/sky.jpg');
  z-index: 1;
}
.time {
  font-size: 20vh;
  font-weight: 300;
  /* left: 55%;
  top: 55%; */
  left: 80%;
  top: 52.6%;
  transform: translateX(-50%);
  z-index: 2;
}
.day {
  font-size: 7vh;
  font-weight: 300;
  /* left: 22%;
  top: 62%; */
  left: 48%;
  top: 40%;
  transform: translateX(-50%);
  z-index: 2;
}
.date {
  font-size: 7vh;
  font-weight: 300;
  /* left: 80%;
  top: 67.33%; */
  left: 12%;
  top: 58%;
  white-space: nowrap;
  transform: translateX(-50%) rotate(-18deg);
  z-index: 2;
}

.mountain {
  z-index: 3;
  background-image: url('../assets/mountain.png');
}
</style>
