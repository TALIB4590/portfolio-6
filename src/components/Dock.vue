<template>
    <div>
    <div class="dock"></div>
    <div class="dock upper-layer">
        <ul class="apps">
            <li class="app">
            <label class="tooltip">{{ userBrowser.name || browserName }}</label>
            <img :src="userAgentImg" width="50" height="50">
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
    ...mapState('utils',[
        'browserName',
        'browserSrc'
    ]),
    ...mapGetters({
      userBrowser: 'utils/userAgent',
    }),
    userAgentImg() {
      const vm = this;
      return require(`@/assets/browsers/${vm.userBrowser.img || vm.browserSrc}`);
    },
  },
};
</script>
<style>
</style>
