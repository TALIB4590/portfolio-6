<template>
  <transition name="overlay">
    <iframe :src="`http://${url}`"/>
  </transition>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  name: 'innerframe',
  props: ['url'],
  methods: {
    ...mapMutations('utils', { iframeStatus: 'changeStateiframe' }),
  },
  created() {
    this.iframeStatus();
  },
  destroyed() {
    this.iframeStatus();
  },
};
</script>
<style>
iframe {
  position: absolute;
  border: 0;
  top: 0;
  width: calc(100% + 17px);
  height: 100%;
}
.overlay-enter-active,
.overlay-leave-active {
  transition: all 0.4s ease-in;
}
.overlay-enter,
.overlay-leave-to {
  top: 100%;
}
</style>
