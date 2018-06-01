import Vue from 'vue'
import Vuex from 'vuex'
import utils from './utils.js'
import votes from './votes.js'
import weather from './weather.js'
import youtube from './youtube.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    utils,
    votes,
    weather,
    youtube
  }
})

export default store
