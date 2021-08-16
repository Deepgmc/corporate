import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import {SET_USER, SET_ERROR, SET_COMPANY} from './actions.js'

Vue.use(Vuex)

const state = () => ({
  company: null,
  user   : null,
  error  : null,
})



/** MUTATIONS */
const mutations = {

  [SET_COMPANY](state, company){
      state.company = company
  },

  [SET_ERROR](state, error) {
      state.error = error
  },

}

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state,
    mutations,
    actions: {

    },
    modules: {
        auth
    }
})
