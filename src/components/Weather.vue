<template>
    <div class="weather-wrapper">
      <div class="search">
        <input type="text" v-model.trim="city" placeholder="Search city..."/>
        <i class="icon icon-magnifier" @click="getCityWeather()"></i>
      </div>
      <div class="content">
        <div class="error-city" v-if="!weather">
          <bounce-loader/>
          <span class="no-match">No matching city</span>
        </div>
        <div v-else class="current">
          <div class="curr img">
            <img :src="weather.current.condition.icon" :alt="weather.current.condition.code"/>
          </div>
          <div class="curr description">
            <div id="city">{{ weather.location.name + ', ' + weather.location.country }}</div>
            <div id="condition">{{ weather.current.condition.text }}</div>
            <div id="temp-hi-low">
              <span>Low: <strong>{{ weather.forecast.forecastday['0'].day.mintemp_c }}</strong></span> - 
              <span>High: <strong>{{ weather.forecast.forecastday['0'].day.maxtemp_c }}</strong></span>
            </div>
            <div id="sunrise-set">
              <span>Sunrise: <strong>{{ weather.forecast.forecastday['0'].astro.sunrise }}</strong></span> - 
              <span>Sunset: <strong>{{ weather.forecast.forecastday['0'].astro.sunset }}</strong></span>
            </div>
            <div id="local-time">
              Local time: <strong>{{ weather.location.localtime_epoch | hourMinutes }}</strong>
            </div>
          </div>
          <div class="curr temp">
            {{ weather.current.temp_c }}°
            <div id="feels-like">Feels like: {{ weather.current.feelslike_c }}°</div>
          </div>
        </div>
        <div class="forecast">

        </div>
      </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import bounceLoader from 'vue-spinner/src/BounceLoader.vue';

export default {
  name: 'Weather',
  components: {
    bounceLoader,
  },
  data() {
    return {
      city: '',
      days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
    };
  },
  computed: {
    ...mapState('weather', ['weather']),
  },
  methods: {
    ...mapActions({
      getWeather: 'weather/getWeather',
    }),
    getCityWeather() {
      const vm = this;
      const city = vm.city.replace(/\s/g, '_').toLowerCase();
      return vm.getWeather(city);
    },
  },
  filters: {
    hourMinutes(value) {
      if (!value) return '';
      let d = new Date(value * 1000);
      return `${d.getHours() > 10 ? d.getHours() : '0' + d.getHours()}:${
        d.getMinutes() > 10 ? d.getMinutes() : '0' + d.getMinutes()
      }`;
    },
  },
  created() {
    const vm = this;
    vm.getWeather();
  },
};
</script>
<style>
.weather-wrapper {
  font-family: 'Dosis', sans-serif;
  position: absolute;
  top: calc(1vh + 25px);
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  font-size: 15px;
  line-height: 24px;
  background-color: rgba(42, 54, 76, 1);
  border-radius: 5px;
  padding: 5px;
  color: #dddddd;
}
.error-city {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
}
.current {
  display: flex;
  padding: 10px;
}
.current .curr {
  flex-grow: 1;
  align-self: center;
}
.current .img {
  text-align: center;
}
.current .description {
  flex-grow: 2;
}
.no-match,
.current #city {
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  color: #dddddd;
}
.current .temp {
  text-align: right;
  font-size: 42px;
  line-height: 42px;
}
.current #feels-like {
  font-size: 15px;
}
.search {
  display: flex;
  border-bottom: 1px solid #3a4557;
}
.search input {
  padding: 0;
  margin: 0;
  border: 0;
  flex: 1 1 auto;
  height: 30px;
  background: transparent;
  color: #eeeeee;
  padding: 5px 8px;
  font-size: 24px;
}
.search input:focus {
  outline: 0;
}
.search .icon {
  width: 50px;
  align-self: center;
  text-align: center;
  font-size: 24px;
  cursor: pointer;
}
</style>
