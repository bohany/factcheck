import { createApp } from 'vue';
import { createStore } from 'vuex';


import App from './App.vue'
import Axios from "axios";

const store = createStore({
    state(){
        return {
            searchResults: null,
            loadingStatus: null,
            errMsg: null,
        }
    },
    getters: {

    },
    mutations: {
        setResults(state, payload){
            state.searchResults = payload.claims;
        },
        clearResults(state){
            state.searchResults = null;
        },
        setLoadingStatus(state, payload){
            state.loadingStatus = payload.value;
        },
        setErrMsg(state, payload){
            state.errMsg = payload.value;
        }
    },
    actions: {
        submitSearch(context, payload) {
            context.commit('clearResults');
            context.commit('setErrMsg', {value: null})
            context.commit('setLoadingStatus', {value: true});
            Axios.request({
              baseURL: "https://factchecktools.googleapis.com/v1alpha1/claims:search",
              method: "get",
              params: {
                languageCode: "en",
                query: payload.searchTerm,
                pageSize: 100,
                key: "AIzaSyCqYStCPuaamvXv1qcuWeof0pEx8TguXeY",
              },
            })
              .then((response) => {
                context.commit('setResults', {claims: response.data.claims});
                context.commit('setLoadingStatus', {value: false});                
                //this.$store.dispatch('setResults', {result: response.data.claims})
                //this.searchResults = response.data.claims;
                //this.$emit("search-results", this.searchResults);
              })
              .catch((error) => {
                console.log(error);
                context.commit('setLoadingStatus', {value: false}); 
                context.commit('setErrMsg', {value: "Sorry, the Google database this app pulls from is broken right now.  Please try again later."});
              });
        },

    },
})

const app = createApp(App);
app.use(store)


app.mount('#app');
