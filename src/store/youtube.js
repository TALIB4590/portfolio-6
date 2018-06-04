const state = {
  apiKey: "AIzaSyCYzNB1sZsjnpbcLmj6YVTbdml5H-7nj-o",
  searchTerm: "oikonomopoulos",
  youtubeUrl: "https://www.googleapis.com/youtube/v3/search?part=snippet&q=",
  maxResults: 11,
  videoList: null,
  selected: null
};
const getters = {

};
const mutations = {
  setVideoList(state, payload) {
    state.videoList = payload.items
  },
  setSelected(state, payload) {
    state.selected = payload
  },
};
const actions = {
  fetchVideos({
    commit,
    state
  }, payload) {
    if (payload === undefined || payload === "") payload = state.searchTerm;
    fetch(`${state.youtubeUrl + payload}&type=video&maxResults=${state.maxResults}&key=${state.apiKey}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        commit('setVideoList', data)
        commit('setSelected', data.items[0])
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
