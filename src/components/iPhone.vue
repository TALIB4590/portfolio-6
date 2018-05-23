<template>
    <div class="container-iphone" v-draggable>
    <div class="volume"></div>
      <div class="iphone">
        <div class="screen" id="screen">
            <div id="full-screen">
                <div v-for="site in portfolio.sites" :key="site.name" @click="$refs.iframe.src = site.url">{{ site.name }}</div>
                <iframe ref="iframe" src="http://workenter.gr"></iframe>
            </div>
        </div>
        <div class="button"></div>
        <div class="speaker"></div>
        <div class="camera"></div>
      </div>
    </div>
</template>
<script>
import { Draggable } from 'draggable-vue-directive';

export default {
  name: 'iphone',
  directives: {
    Draggable,
  },
  data() {
    return {
      portfolio: {
        sites: [
          {
            name: 'Workenter',
            description: 'News portal - FrontEnd & Drupal Development',
            url: 'http://workenter.gr',
          },
          {
            name: 'Schoolbusnet',
            description: 'Single page website - FrontEnd Development',
            url: 'http://schoolbusnet.eu',
          },
          {
            name: 'Accurate LP',
            description: 'Single page website - FrontEnd Development',
            url: 'http://naccurate.gr',
          },
          {
            name: 'Ellinomania',
            description: 'Warez site - Co-Founder & FrontEnd Development',
            url: 'http://ellinomania.eu',
          },
          {
            name: 'Old Portfolio',
            description: 'Portfolio - Design & FrontEnd Development',
            url: 'http://old.koikas.eu',
          },
          {
            name: 'Internal Projects at current job',
            description: 'Wide variety of internal projects',
            url: '#',
          },
          {
            name: 'Movies playstore',
            description: 'Movies project DEPRECATED - FullStack Development',
            url: '#',
          },
          {
            name: 'Bootstrap Themes',
            description: 'Themes - FrontEnd Development',
            url: '#',
          },
        ],
        apps: [
          {
            name: 'nikOS - Portfolio',
            description:
              'This application-portfolio, built with Vue.js and Firebase',
          },
          {
            name: 'Projects at current job',
            description:
              'Internal projects, built with Vue.js, Firebase and Vue plugins',
          },
          {
            name: 'Meetups',
            description:
              'Meetups project, built with Vue.js, Vuetify and Firebase Auth-Dbase',
          },
          {
            name: 'myNews',
            description:
              'Greek/English news mobile application, built with Framework7/Vue.js and Apache Cordova',
          },
          {
            name: 'Weather App',
            description:
              'Weather mobile application, built with Apache Cordova and pure JS',
          },
        ],
      },
    };
  },
};
</script>
<style>
.container-iphone {
  position: relative;
  height: 667px;
  width: 335px;
  left: calc(50% - 167.5px);
  top: calc(1vh + 25px);
  background: none;
  border: 6px solid #757575;
  border-radius: 46px;
  z-index: 999;
}

.container-iphone .iphone {
  position: absolute;
  height: 667px;
  width: 335px;
  border-radius: 40px;
  background: #0a0a0a;
  box-shadow: -2px -3px 8px rgba(212, 205, 205, 0.75),
    2px -3px 8px rgba(212, 205, 205, 0.75),
    inset 5px 0px 7px 0px rgba(14, 14, 14, 0.99),
    inset 5px 1px 3px 0px rgb(191, 187, 187),
    inset -5px 0px 7px 0px rgba(14, 14, 14, 0.99),
    inset -5px 0px 3px 0px rgb(191, 187, 187);
}

.container-iphone .iphone::before {
  content: '';
  width: 3px;
  left: -8px;
  top: 60px;
  background-color: #5f6061;
  height: 25px;
  position: absolute;
  border-radius: 5px 0 0 5px;
  z-index: -1;
}

.container-iphone .iphone::after {
  content: '';
  width: 3px;
  right: -8px;
  top: 130px;
  background-color: #5f6061;
  height: 50px;
  position: absolute;
  border-radius: 0 5px 5px 0;
  z-index: -1;
}

.container-iphone .volume {
  width: 3px;
  background-color: #5f6061;
  height: 50px;
  position: absolute;
  top: 190px;
  left: -8px;
  border-radius: 5px 0 0 5px;
  z-index: -1;
}

.container-iphone .volume::before {
  content: '';
  width: 3px;
  background-color: #5f6061;
  height: 50px;
  position: absolute;
  top: -60px;
  border-radius: 5px 0 0 5px;
  z-index: -1;
}

.container-iphone .screen {
  position: absolute;
  height: 545px;
  width: 310px;
  left: 12px;
  top: 55px;
  background: #fff;
}

.container-iphone #full-screen {
  overflow: hidden;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
.container-iphone #full-screen iframe {
  border: 0;
  width: calc(100% + 17px);
  height: 100%;
}
.container-iphone .button {
  position: absolute;
  height: 45px;
  width: 45px;
  left: 148px;
  top: 610px;
  border-radius: 50%;
  box-shadow: inset -1px -1px 6px -1px darkgrey;
}

.container-iphone .speaker {
  position: absolute;
  height: 4px;
  width: 50px;
  left: 140px;
  top: 25px;
  border-radius: 20px;
  background: #484848;
}

.container-iphone .camera {
  position: absolute;
  height: 10px;
  width: 10px;
  top: 23px;
  left: 110px;
  border-radius: 50%;
  background: #373737;
  box-shadow: inset -1px -1px 2px #9c9c9c;
}
</style>
