import { createApp } from 'vue';
import { createStore } from 'vuex';


import App from './App.vue'
import Axios from "axios";

const store = createStore({
    state(){
        return {
            searchResults: null,
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
        }
    },
    actions: {
        submitSearch(context, payload) {
            context.commit('clearResults');
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
                context.commit('setResults', {claims: response.data.claims})
                //this.$store.dispatch('setResults', {result: response.data.claims})
                //this.searchResults = response.data.claims;
                //this.$emit("search-results", this.searchResults);
              })
              .catch((error) => {
                console.log(error);
              });
        },

    },
})

const app = createApp(App);
app.use(store)


app.mount('#app');
