import Vue from 'vue'
import Vuex from 'vuex'
import utils from './utils.js'
import votes from './votes.js'
import weather from './weather.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    utils,
    votes,
    weather
  }
})

export default store
