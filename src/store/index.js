import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'

Vue.use(Vuex)

const state = () => ({
  company: null,
  user   : null,
  error  : null,
})


/** GETTERS */
const getters = {
  isAuthenticated(state) {
    return !!state.user //&& state.company
  }
}

/** MUTATIONS */
const mutations = {

  SET_ERROR(state, error) {
    state.error = error
  },

  SET_USER(state, userData){
    state.user = userData
  }

}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',//чтоб не касячить
  state,
  mutations,
  actions: {

  },
  getters,
  modules: {
    auth
  }
})
