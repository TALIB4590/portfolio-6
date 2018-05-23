const state = {
  api: 'http://api.apixu.com/v1/forecast.json',
  key: '?key=b00eff6998ae4d8bb9f120742170603',
  weather: null,
  city: 'athens'
};
const getters = {

};
const mutations = {
  setWeather(state, payload) {
    state.weather = payload
  }
};
const actions = {
  getWeather({commit, state}, payload) {
    return new Promise((resolve, reject) => {
      fetch(`${state.api + state.key}&q=${!payload?state.city:payload}&days=6`)
        .then((res) => res.json())
        .then((data) => {
          'error' in data?state.weather = null:commit('setWeather', data);localStorage.setItem('city', payload?payload:state.city);
          resolve(data)
        }).catch(error => {
          reject(error)
        });
    })
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
