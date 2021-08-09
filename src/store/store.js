import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({

    state:{
        user: 'JP'
    },
    actions:{
       setCurrentUsername(context,user){
            console.log(user)
            context.commit('setUser',user)
        }
    },
    mutations:{
        setUser(state,newUser){
            state.user = newUser
        }
    },
    getters:{
        currentUser(state){
            return state.user
        }
    }

})