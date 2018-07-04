<template>
    <transition name="fade">
        <div class="window-wrapper contact flex">
            <div class="contact-left flex flex-vCenter">
                <div>
                    <img src="@/assets/me.png" width="150"/>
                    <h3 class="name">Nikos Koikas</h3>
                </div>
                <div>
                    <button class="btn green pointer" @click="changeComponent('about')">About me</button>
                    <button class="btn pointer" @click="changeComponent('contact')">Contact me</button>
                </div>
            </div>
            <div class="contact-right">
                <div class="contact-box">
                    <component :is="display"></component>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import contact from '@/components/Contactme.vue';
import about from '@/components/About.vue';

export default {
  name: 'contact',
  components: {},
  data() {
    return {
      display: contact,
    };
  },
  methods: {
    changeComponent(component) {
      const vm = this;
      if (component === 'about') {
        return (vm.display = about);
      }
      return (vm.display = contact);
    },
  },
  created () {
    const vm = this
    vm.$route.params.about ? vm.changeComponent('about') : vm.changeComponent('display')
  }
};
</script>
<style>
.contact {
  width: 58%;
  left: 21%;
  background-color: #ececec;
  color: #555555;
  padding: 0;
}
.contact-left {
  width: 33.3333%;
  padding: 25px;
  border-radius: 5px 0 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.contact-right {
  width: 66.6666%;
  background-color: #e3e3e3;
  padding: 25px;
  border-radius: 0 5px 5px 0;
}
.contact-box {
  border: 1px solid #aaaaaa;
  background-color: #ffffff;
  padding: 10px 20px;
}
.contact-left .name {
  text-align: center;
}
</style>
