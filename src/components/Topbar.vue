<template>
    <div class="top-bar" :class="color">
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
import topBar from '@/mixins/topBar.js';

export default {
  mixins: [topBar],
  name: 'topbar',
  props: ['color'],
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
