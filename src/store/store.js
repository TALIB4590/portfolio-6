import Vue from 'vue'
import Vuex from 'vuex'
import utils from './utils.js'
import votes from './votes.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        utils,
        votes,
    }
})

export default store