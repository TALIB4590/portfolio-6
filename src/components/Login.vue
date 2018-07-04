<template>
  <div class="fullHeight">
    <div class="fixedImg" :style="bkgImage"></div>
    <top-bar hide-votes/>
    <div class="login-options">
        <h2>Welcome to nikOS</h2>
        <div class="avatar" @click="login">
            <figure class="guest wow"></figure>
            <label>Guest User</label>
        </div>
        <div id="progressbar" :style="{opacity: hidden}">
            <div :style="{width: timer + '%'}"></div>
        </div>
        <div class="options">
            <div class="option" v-if="!fullScreen">
                <i class="icon icon-size-fullscreen" @click="enterFullScreen"></i>
                <label>Maximize</label>
            </div> 
            <div class="option" v-else>
                <i class="icon icon-size-actual" @click="exitFullScreen"></i>
                <label>Restore down</label>
            </div> 
            <div class="option">
                <i class="icon icon-info" @click="$router.push({name: 'Contact', params:{about: 'about'}})"></i>
                <label>About</label>
            </div>
        </div>
    </div>
    <img class="hidden" v-if="hidden" v-for="img in hiddenImages" :key="img.name" :src="require(`@/assets/${img.name}`)">
  </div>
</template>
<script>
import topBar from '@/components/Topbar';
import fullScreen from '@/mixins/fullScreen.js';

export default {
  mixins: [fullScreen],
  name: 'Login',
  components: {
    topBar,
  },
  data() {
    return {
      hidden: 0,
      timer: 0,
      bkgImages: [
        'sea.jpg',
        'beach2.jpg',
        'beach.jpg',
        'tree.jpg',
        'milky-way.jpg',
      ],
      hiddenImages: [{ name: 'mountain.png' }, { name: 'sky.jpg' }],
    };
  },
  computed: {
    bkgImage() {
      const vm = this;
      return {
        backgroundImage:
          'url(' +
          require(`@/assets/${
            vm.bkgImages[Math.floor(Math.random() * vm.bkgImages.length)]
          }`),
      };
    },
  },
  methods: {
    login() {
      const vm = this;
      vm.hidden = 1;
      const interval = setInterval(() => {
        if (vm.timer === 100) {
          vm.timer = 0;
          clearInterval(interval);
          return vm.$router.push('pc');
        }
        vm.timer++;
      }, 30);
    },
  },
};
</script>
<style>
.hidden {
  display: none;
  position: absolute;
  width: 0;
  height: 0;
}
.fixedImg {
  background: url('../assets/tree.jpg') center center / cover no-repeat;
  filter: blur(20px);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  transform: scale(1.1);
  width: 100%;
  z-index: 1;
}

.login-options h2 {
  color: #ffffff;
  font-family: 'Dosis', sans-serif;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
}
figure,
.option i {
  display: block;
  font-size: 20px;
  margin: 0 auto;
}

.login-options {
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: space-between;
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  width: 50%;
  z-index: 3;
}
.options {
  text-align: center;
}
.avatar,
.option {
  align-self: center;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  margin: 0 10px;
  text-align: center;
}

.avatar label,
.option label {
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  margin: 5px 0;
}

.avatar .guest {
  background: url('../assets/login.png') center center / cover no-repeat;
  border-radius: 50%;
  border: 2px solid #ffffff;
  height: 54px;
  width: 54px;
}
.wow {
  transition: transform 0.2s ease-in;
}
.wow:hover {
  transform: scale(1.1);
}
#progressbar {
  background-color: transparent;
  border-radius: 10px;
  border: 2px solid #ffffff;
  margin: 0 auto;
  padding: 1px;
  width: 50%;
}

#progressbar > div {
  background-color: tomato;
  border-radius: 10px;
  height: 8px;
  transition: width 0.01s ease;
  width: 0;
}
</style>
