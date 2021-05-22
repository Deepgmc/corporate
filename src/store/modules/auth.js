import firebase from 'firebase/app'
import {SET_USER} from '../actions.js'

export default {
    actions: {

        async loadAuthenticate({dispatch, commit}){
            const user = firebase.auth().currentUser
            if(user && user.uid){
                commit(SET_USER, {
                    uid  : user.uid,
                    email: user.email
                })
            } else {
                dispatch('logout')
            }
        },

        async login({dispatch, commit}, {email, password}){
            const result = await firebase.auth().signInWithEmailAndPassword(email, password)
            const uid = await dispatch('getUid')
            console.log('LOGINED: ', result, uid)
            //взять компанию из фаербэйза
            commit(SET_USER, {
                uid  : uid,
                email: email,
                companyName: 'emptyCN',
                companyInn: 'emptyInn'
            })
        },

        async register({dispatch, commit}, {email, password, companyName, companyInn}){
            const result = await firebase.auth().createUserWithEmailAndPassword(email, password)
            const uid = await dispatch('getUid')
            const company = await firebase.database().ref('companies').push({companyName, companyInn, uid})
            console.log('REGISTER:', result, uid, 'Company:', company)
            commit(SET_USER, {
                uid  : uid,
                email: email,
                companyName,
                companyInn
            })
            commit(SET_COMPANY, {
                uid  : uid,
                email: email,
                companyName,
                companyInn
            })
            
            // const newCompany = await firebase.database().ref(`/company`).push({companyName, companyInn})
            // console.log('after push company');
            // const company = {...newCompany, id}
            // console.log('New company', company);
            // await firebase.database().ref(`/users/${uid}/info`).set({
            //     companyID: cid
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
        

    },//actions
    state: {
        user: null
    },
    mutations: {
        
        [SET_USER](state, userData){
            state.user = userData
          }
    },
    getters: {
        isAuthenticated(state) {
          return !!state.user //&& state.company
        }
    }
}