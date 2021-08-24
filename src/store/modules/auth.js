import firebase from 'firebase/app'
import {SET_USER, SET_COMPANY} from '../actions.js'

const state = {
    user: null
}

const actions = {

    async loadAuthenticate({dispatch, commit}){
        const user = firebase.auth().currentUser
        if(user && user.uid){
            commit(SET_USER, {
                uid        : user.uid,
                email      : user.email,
                companyName: user.companyName,
                companyInn : user.companyInn
            })
        } else {
            dispatch('auth/logout')
        }
    },

    async login({dispatch, commit}, {email, password}){
        const result = await firebase.auth().signInWithEmailAndPassword(email, password)
        const uid = await dispatch('auth/getUid')
        console.log('LOGINED: ', result, uid)

        //TODO взять компанию из фаербэйза для текущего юзера

        commit(SET_USER, {
            uid  : uid,
            email: email,
            companyName: 'emptyCN',
            companyInn: 'emptyInn'
        })
    },

    async register({dispatch, commit}, {email, password, companyName, companyInn}){
        console.log('REGISTER ACTION, AUTH MODULE');
        const result = await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('auth getUid')
        console.log('Registered UID: ', uid)
        const company = await firebase.database().ref(`/companies`).push({companyName, companyInn, uid})
        console.log('REGISTER, GOT COMPANY:', result, uid, 'Company:', company)
        commit(SET_USER, {
            uid  : uid,
            email: email,
            companyName,
            companyInn
        })
        // commit(SET_COMPANY, {
        //     uid  : uid,
        //     email: email,
        //     companyName,
        //     companyInn
        // })
        
    },

    async logout({commit}){
        await firebase.auth().signOut()
        await commit(SET_USER, null)
    },

    getUid(){
        const user = firebase.auth().currentUser
        return user ? user.uid : null
    }
    

}//actions

const getters = {
    isAuthenticated(state) {
        return !!state.user //&& state.company
    },
    user(state){
        return state.user
    }
}

const mutations = {
    [SET_USER](state, userData){
        state.user = userData
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}