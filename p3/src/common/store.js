import Vue from 'vue'
import Vuex from 'vuex'
import * as app from '@/common/app.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
       
        establishments: [],
    },

    mutations: {
        updateEstablishments(state, payload){
            state.establishments = payload;
        }
    },
    actions: {
        setEstablishments(context) {
            app.api.all('establishments').then(response => {
                context.commit('updateEstablishments', response);
            });
        }
    },
    getters:{
        getEstablishmentBySlug(state) {
            return function (slug) {
                for (let key of Object.keys(state.establishments)){
                    console.log(slug);
                    if (state.establishments[key].slug == slug) {
                        return state.establishments[key];
                    }
                }
            }
        }
    }
})