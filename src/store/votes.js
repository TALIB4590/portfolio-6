import {
  fire
} from '@/firebase.js'

const state = {
  firstTime: true,
  like: 0,
  dislike: 0
};
const getters = {};
const mutations = {
  setVotes(state, payload) {
    state.like = payload.like
    state.dislike = payload.dislike
  }
};
const actions = {
  firebaseVotes({
    commit
  }) {
    fire.db.ref('votes').on('value', snapshot => {
      commit('setVotes', snapshot.val())
    });
  },
  updateFirebaseVotes({
    commit,
    state
  }, payload) {
    if (state.firstTime) {
      fire.db.ref(`votes/${payload}`).set(++state[`${payload}`]).then(state.firstTime = false)
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
