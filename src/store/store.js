import Vue from 'vue'
import Vuex from 'vuex'
import topbar from './topBar.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        topbar
    }
})

export default store