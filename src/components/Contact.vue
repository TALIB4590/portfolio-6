<template>
    <transition name="fade">
        <div class="window-wrapper contact flex">
            <div class="contact-left">
                <img src="@/assets/me.png" width="150"/>
                <div>Nikos Koikas</div>
                <button>Bio</button>
                <button>Contact me</button>
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

export default {
  name: "contact",
  components: {},
  data() {
    return {
        display: contact
    };
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
  padding: 10px
}
</style>
