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

                </div>
                <!-- <component :is=""></component> -->
            </div>
        </div>
    </transition>
</template>
<script>
// import dock from '@/components/Youtube.vue';
export default {
  name: 'contact',
  components: {
  },
  data() {
    return {
    };
  },
};
</script>
<style>
.contact {
  width: 58%;
  left: 21%;
  background-color: #ececec;
  color: #555555;
  padding: 50px 25px;
}
.contact-left {
  width: 33.3333%;
}
.contact-right {
  width: 66.6666%;
  background-color: #e3e3e3;
}
.contact-box {
    padding: 30px;
    border: 1px solid #aaaaaa;
}
</style>
