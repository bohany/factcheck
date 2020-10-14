<template>
  <div class="container">
    <ClaimSearch @search-results="setResults" />
    <div class="resultCard" v-if="isLoading">
      <br />
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div v-else-if="error" class="resultCard">
      {{error}}
    </div>
    <ResultCard
      v-for="(result, index) in searchResults"
      :key="index"
      :claim="result.text"
      :claimant="result.claimant"
      :date="result.claimDate"
      :reviews="result.claimReview"
      :loadingStatus="loadStatus"
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
    return {};
  },
  computed: {
    searchResults() {
      return this.$store.state.searchResults;
    },
    isLoading() {
      return this.$store.state.loadingStatus;
    },
    error(){
      return this.$store.state.errMsg;
    }
  },
  methods: {},
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
.resultCard {
  transition: all 0.2s;
  border-radius: 10px;
  background-color: rgba(201, 236, 204, 0.938);
  width: 95vw;
  margin: 1vmin;
  padding: 1vmin;
}
.resultCard:hover {
  background-color: rgba(186, 238, 191, 0.973);
  box-shadow: 2px 3px 5px rgb(102, 102, 102);
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 50px;
  height: 50px;
  margin: 8px;
  border: 8px solid rgba(235, 217, 234, 0.849);
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
