const state = {
  iframeEnabled: false,
  browserSrc: 'browser.png',
  browserName: 'Browser',
  browsers: {
    chrome: {
      name: 'Google Chrome',
      img: 'chrome.png'
    },
    firefox: {
      name: 'Firefox',
      img: 'mozilla.png'
    },
    opr: {
      name: 'Opera',
      img: 'opera.png'
    },
    edge: {
      name: 'Microsoft Edge',
      img: 'edge.png'
    },
    safari: {
      name: 'Safari',
      img: 'safari.png'
    },
    net: {
      name: 'Internet Explorer',
      img: 'ie.png'
    },
  },
};
const getters = {
  userAgent(state) {
    const agent = navigator.userAgent.toLowerCase();
    for (let browserKey in state.browsers) {
      if (state.browsers.hasOwnProperty(browserKey)) {
        if (agent.search(browserKey.toString()) > -1) {
          return state.browsers[browserKey];
        }
      }
    }
  }
};
const mutations = {
  changeStateiframe(state) {
    state.iframeEnabled = !state.iframeEnabled;
  }
};
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
