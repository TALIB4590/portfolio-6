import {
  fire
} from '@/firebase.js'

const state = {
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
    })
  },
  updateFirebaseVotes({
    commit,
    state
  }, payload) {
    if (!localStorage.getItem('first-time')) {
      fire.db.ref(`votes/${payload}`).set(++state[`${payload}`]).then(localStorage.setItem('first-time', false))
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
