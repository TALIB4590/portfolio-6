<template>
  <transition name="fade">
    <div class="window-wrapper" v-draggable>
      <form @submit.prevent="getCityWeather()" class="search">
        <input type="text" v-model.trim="city" placeholder="Search city..."/>
        <button type="submit">
          <i class="icon icon-magnifier"></i>
        </button>
      </form>
      <div class="content">
        <div class="error-city" v-if="!weather">
          <bounce-loader/>
          <span class="no-match">No matching city</span>
        </div>
        <div v-if="weather" class="current">
          <div class="curr img">
            <img :src="weather.current.condition.icon" :alt="weather.current.condition.code"/>
          </div>
          <div class="curr description">
            <div id="city">{{ weather.location.name + ', ' + weather.location.country }}</div>
            <div id="condition">{{ weather.current.condition.text }}</div>
            <div id="temp-hi-low">
              <span>Low: <strong>{{ weather.forecast.forecastday['0'].day.mintemp_c | roundedDegrees }}</strong></span> - 
              <span>High: <strong>{{ weather.forecast.forecastday['0'].day.maxtemp_c | roundedDegrees }}</strong></span>
            </div>
            <div id="sunrise-set">
              <span>Sunrise: <strong>{{ weather.forecast.forecastday['0'].astro.sunrise }}</strong></span> - 
              <span>Sunset: <strong>{{ weather.forecast.forecastday['0'].astro.sunset }}</strong></span>
            </div>
            <div id="local-time">
              Local time: <strong>{{ weather.location.localtime | hourMinutes }}</strong>
            </div>
          </div>
          <div class="curr temp">
            {{ weather.current.temp_c }}°
            <div id="feels-like">Feels like: {{ weather.current.feelslike_c }}°</div>
          </div>
        </div>
        <div v-if="weather" class="forecast">
          <ul class="forecast-days">
            <li class="forecast-day" v-for="day in forecastDays" :key="day.date">
              <strong class="w70">{{ localDay(day.date) }}</strong>
              <img :src="day.day.condition.icon" :alt="day.day.condition.text" width="32"/>
              <span>
                <span class="w22">{{ day.day.mintemp_c | roundedDegrees }}°</span>
                <strong class="w22">{{ day.day.maxtemp_c | roundedDegrees }}</strong>°
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import { Draggable } from 'draggable-vue-directive';
import timeMixin from '@/mixins/time.js';
import bounceLoader from 'vue-spinner/src/BounceLoader.vue';

export default {
  name: 'Weather',
  mixins: [timeMixin],
  directives: {
    Draggable,
  },
  components: {
    bounceLoader,
  },
  data() {
    return {
      city: '',
    };
  },
  computed: {
    ...mapState('weather', ['weather']),
    forecastDays() {
      const vm = this;
      return vm.weather.forecast.forecastday.filter((item, index) => {
        return index !== 0;
      });
    },
  },
  methods: {
    ...mapActions({
      getWeather: 'weather/getWeather',
    }),
    getCityWeather() {
      const vm = this;
      const city = vm.city.replace(/\s/g, '_').toLowerCase();
      return vm.getWeather(city).then((vm.city = ''));
    },
  },
  filters: {
    roundedDegrees(value) {
      return Math.round(value);
    },
  },
  created() {
    const vm = this;
    const savedCity = localStorage.getItem('city');
    vm.getWeather(savedCity);
  },
};
</script>
<style>
.fade-enter-active {
  transition: opacity 1s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
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
  border-top: 1px solid #3a4557;
  border-bottom: 1px solid #3a4557;
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
.search button {
  -webkit-appearance: none;
  border: none;
  color: inherit;
  background: transparent;
}
.search button:focus {
  outline: none;
}
.search .icon {
  font-size: 24px;
  cursor: pointer;
}
.forecast {
  padding: 15px 25px;
}
.forecast-day {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.forecast .w22 {
  width: 22px;
  margin-left: 5px;
}
.forecast .w70 {
  width: 70px;
}
</style>
