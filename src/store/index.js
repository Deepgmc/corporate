import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import {SET_USER, SET_ERROR} from './actions.js'

Vue.use(Vuex)

const state = () => ({
  company: null,
  //user   : null,
  error  : null,
})


/** GETTERS */
// const getters = {
//   isAuthenticated(state) {
//     return !!state.user //&& state.company
//   }
// }

/** MUTATIONS */
const mutations = {

  [SET_ERROR](state, error) {
    state.error = error
  },

  [SET_COMPANY](state, company){
    state.company = company
  }

}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',//чтоб не касячить
  state,
  mutations,
  actions: {

  },
  //getters,
  modules: {
    auth
  }
})
