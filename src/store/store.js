import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appReady: false,
    isActive: false,
    progressBar: 0,
    headerIsOpen: true,
    phaserIsLoaded: false,
    threeJSIsLoaded: false
  },
  getters: {
    _appReady: state => () => state.appReady,
    _isActive: state => () => state.isActive,
    _progressBar: state => () => state.progressBar,
    _headerIsOpen: state => () => state.headerIsOpen,
    _phaserIsLoaded: state => () => state.phaserIsLoaded,
    _threeJSIsLoaded: state => () => state.threeJSIsLoaded,
  },
  mutations: {
    setAppState(state, value){
      state.appReady = value
    },
    overlay_on(state) {
      state.isActive = true;
    },
    overlay_off(state) {
      state.isActive = false;
    },
    setProgressBar(state, value){
      state.progressBar = value;
    },
    setHeader (state, value) {
      state.headerIsOpen = value
    },
    setPhaserIsLoaded (state, value) {
      state.phaserIsLoaded = value
    },
    setThreeJsIsLoaded (state, value) {
      state.threeJSIsLoaded = value
    }           
  }
})
