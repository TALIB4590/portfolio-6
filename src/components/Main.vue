<template>
  <div class="main">
    <top-bar color="dark"/>
    <div class="sky bg"></div>
    <div class="date bg text">{{ greeceDate() }}</div>
    <div class="time bg text">{{ time }}</div>
    <div class="day bg text">{{ greeceDay() }}</div>
    <div class="mountain bg">
      <dock/>
    </div>
  </div>
</template>

<script>
import topBarMixins from '@/mixins/topBar.js';
import topBar from '@/components/Topbar';
import dock from '@/components/Dock';

export default {
  mixins: [topBarMixins],
  name: 'Main',
  components: {
    topBar,
    dock
  },
  data() {
    return {
    };
  },
  
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
  left: 76%;
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
  left: 20%;
  top: 58%;
  white-space: nowrap;
  transform: translateX(-50%) rotate(-18deg);
  z-index: 2;
}
.mountain {
  z-index: 3;
  background-image: url('../assets/mountain.png');
}
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
  bottom: calc(20px + 4vh);
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
