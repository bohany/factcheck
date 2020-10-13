<template>
  <div class="container">
    <ClaimSearch @search-results="setResults" />
    <ResultCard
      v-for="(result, index) in searchResults"
      :key="index"
      :claim="result.text"
      :claimant="result.claimant"
      :date="result.claimDate"
      :reviews="result.claimReview"
    />
    

    <!-- <p> testing does results show in parent via custom emit? {{searchResults}} </p> -->
  </div>
</template>

<script>
import ClaimSearch from "./components/ClaimSearch.vue";
import ResultCard from "./components/ResultCard.vue";

export default {
  name: "App",
  components: {
    ClaimSearch,
    ResultCard,
  },
  data() {
    return {

    };
  },
  computed: {
    searchResults(){
      return this.$store.state.searchResults;
    }
  },
  methods: {


    
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111c27;
  display: flex;
  size: 100vmax;
  background-color: rgba(235, 217, 234, 0.849);
}
.container {
  display: flex;
  flex-direction: column;
}
</style>
