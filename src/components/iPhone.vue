<template>
    <div class="container-iphone" v-draggable>
    <div class="volume"></div>
      <div class="iphone">
        <div class="screen" id="screen">
            <div id="full-screen">
              <h3>Projects</h3>
              <h4>Websites</h4>
              <div class="sites" :class="{pointer: site.url!=''}" v-for="site in portfolio.sites" :key="site.name" @click="$router.replace({name: 'Project', params: {url: site.url}})">
                <img v-if="site.image != '#'" class="sites-img" :src="siteURL(site.image)" :alt="site.name"/>
                <div class="sites-description">{{ site.description }}</div>
              </div>
              <h4>Apps</h4>
              <div class="sites" v-for="app in portfolio.apps" :key="app.name">
                <h5>{{ app.name }}</h5>
                <div class="sites-description">{{ app.description }}</div>
              </div>
              <router-view/>
            </div>
        </div>
        <div class="button pointer" :class="{opened: iframeEnabled}" @click="$router.replace({name: 'iPhone'})"></div>
        <div class="speaker"></div>
        <div class="camera"></div>
      </div>
    </div>
</template>
<script>
import { Draggable } from 'draggable-vue-directive';
import { mapState } from 'vuex';

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
            image: 'http://workenter.gr/sites/default/files/widget.jpg',
            url: 'workenter.gr',
          },
          {
            name: 'Schoolbusnet',
            description: 'Single page website - FrontEnd Development',
            image: 'http://schoolbusnet.eu/img/logo.png',
            url: 'schoolbusnet.eu',
          },
          {
            name: 'Accurate LP',
            description: 'Single page website - FrontEnd Development',
            image: 'http://naccurate.gr/img/logos/Logo-Nav.png',
            url: 'naccurate.gr',
          },
          {
            name: 'Ellinomania',
            description: 'Warez site - Co-Founder & FrontEnd Development',
            image:
              'http://www.ellinomania.eu/uploads/monthly_2018_04/71_FF.png.62511660fdd1b2eb2f3540e89d1f5742.png',
            url: 'ellinomania.eu',
          },
          {
            name: 'Movies playstore',
            description: 'Movies project - FullStack Development',
            image: 'movies.jpg',
            url: '',
          },
          {
            name: 'Bootstrap Themes',
            description: 'Bootstrap Themes - FrontEnd Development',
            image: 'countdown.jpg',
            url: '',
          },
          {
            name: 'Old Portfolio',
            description: 'Old Portfolio - Design & FrontEnd Development',
            image: '#',
            url: 'old.koikas.eu',
          },
          {
            name: 'Many Projects at work ',
            description: 'Wide variety of projects at current job.',
            image: '#',
            url: '',
          },
        ],
        apps: [
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
          {
            name: 'nikOS - Portfolio',
            description:
              'This application-portfolio, built with Vue.js and Firebase',
          },
          {
            name: 'Projects at work',
            description:
              'A variety of projects, built with Vue.js, Firebase and Vue plugins',
          },
        ],
      },
    };
  },
  computed: {
    ...mapState('utils',['iframeEnabled'])
  },
  methods: {
    siteURL(src) {
      return src.startsWith('http') ? src : require(`@/assets/projects/${src}`);
    },
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
  overflow: hidden;
  height: 545px;
  width: 310px;
  left: 12px;
  top: 55px;
  background: #dddddd;
  z-index: 3;
}

.container-iphone #full-screen {
  overflow-x: hidden;
  height: 100%;
  margin: 0 auto;
  width: calc(100% + 17px);
  position: relative;
}
.container-iphone #full-screen h3 {
  text-align: center;
  width: 100%;
  color: mediumseagreen;
  background-color: white;
  font-weight: 400;
  margin: 0 0 8px 0;
  padding: 10px 0;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.17);
}
.container-iphone #full-screen h4 {
  padding: 0 15px;
  margin: 0;
}
.container-iphone #full-screen .sites {
  margin: 15px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
}
.container-iphone #full-screen img {
  width: 100%;
  border-bottom: 1px solid lightblue;
}
.container-iphone #full-screen .sites-description {
  font-family: 'Dosis', sans-serif;
  font-size: 18px;
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
.container-iphone .button.opened {
  animation: press .6s ease infinite forwards;
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
@keyframes press {
  0% {
  box-shadow: inset -1px -1px 6px -1px darkgrey;
  }
  25% {
  box-shadow: inset -1px -1px 8px -1px darkgrey;
  }
  50% {
  box-shadow: inset -1px -1px 12px -1px darkgrey;
  }
  75% {
  box-shadow: inset -1px -1px 8px -1px darkgrey;
  }
  100% {
  box-shadow: inset -1px -1px 6px -1px darkgrey;
  }
}
</style>
