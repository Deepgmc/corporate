import firebase from 'firebase/app'

export default {
    actions: {

        async loadAuthenticate({dispatch, commit}){
            const user = firebase.auth().currentUser
            console.log('Loaded user: ', user)
            if(user && user.uid){
                commit('SET_USER', {
                    uid  : user.uid,
                    email: user.email
                })
            }
            return user ? user.uid : null
        },

        async login(email, password){
            await firebase.auth().signInWithEmailAndPassword(email, password)
        },

        async register({dispatch, commit}, {email, password, companyName, companyInn}){
            await firebase.auth().createUserWithEmailAndPassword(email, password)
            const uid = await dispatch('getUid')
            console.log('Logined UID:', uid)
            commit('SET_USER', {
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

        getUid(){
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        }
        

    }
}