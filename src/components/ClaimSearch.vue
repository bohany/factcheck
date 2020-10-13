<template>
  <form @submit.prevent="submitSearch" class="searchBar">
    <input type="text" v-model="searchTerm" placeholder="ex: Bil Gates, 5G, etc." />
    <button type="submit"><b>CHECK FACT</b></button>
  </form>
      <!-- <p>testing: does results show in child: {{searchResults}}</p> -->
</template>

<script>

export default {
  //emits: ["search-results"],
  data() {
    return {
      searchTerm: null,
      //searchResults: null,
    };
  },
  computed: {},
  methods: {
    submitSearch(){
      this.$store.dispatch('submitSearch', {searchTerm: this.searchTerm})
    }
  },
};
</script>

<style scoped>
.searchBar {
  border-radius: 10px;
  background-color: rgba(201, 236, 204, 0.938);
  width: 95vw;
  margin: 1vmin;
  padding: 2vmin;
  transition: all .2s;
}
.searchBar:hover{
  background-color: rgba(186, 238, 191, 0.973);
  box-shadow: 1px 2px 3px rgb(119, 119, 119);
}
input{
  border-radius: 5px;
  width: 40vw;
  height:1.5rem;
  margin: .2rem;
  padding: .2rem;
}
button{
  background-color: rgba(255, 174, 0, 0.945);
  border-radius: 10px;
  width: 100px;
  height: 2rem;
}
button:hover{
  box-shadow: 1px 1px 1px rgb(119, 119, 119);
  background-color: rgb(255, 187, 0);
}
</style>