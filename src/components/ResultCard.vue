<template>
  <div class="resultCard">
    <div class="claimCard">
      <h3>The Claim:</h3>
      <p>
        <b>{{ claim }}</b>
        <br /><br />
        - {{ claimant }}, {{ date.slice(0, 10) }}
      </p>
    </div>

    <div class="checkCard">
      <h3>The Truth:</h3>
      <div v-for="review in reviewList" :key="review.url">
        <b>{{ review.publisher.name }}</b>
        rated this claim as "<b>{{ review.textualRating }}</b
        >". <br />
        Source: "<a :href="review.url" target="_blank"> {{ review.title }} </a>"
        <br />
        - published {{ review.reviewDate.slice(0, 10) }}. <br />
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["claim", "claimant", "date", "reviews"],
  data() {
    return {};
  },
  computed: {
    reviewList() {
      return this.reviews;
    },
  },
};
</script>

<style scoped>
.resultCard {
  transition: all .2s;
  border-radius: 10px;
  background-color: rgba(201, 236, 204, 0.938);
  width: 95vw;
  margin: 1vmin;
  padding: 1vmin;
}
.resultCard:hover{
  background-color: rgba(186, 238, 191, 0.973);
  box-shadow: 2px 3px 5px rgb(102, 102, 102);
}
.claimCard {
  border-radius: 10px;
  background-color: #eeeeee;
  width: 95%;
  margin: 1vmin;
  padding: 1vmin;
  background-color: rgba(233, 158, 124, 0.884);
}

.checkCard {
  border-radius: 10px;
  background-color: rgba(114, 189, 233, 0.925);
  width: 95%;
  margin: 1vmin;
  padding: 1vmin;
}
</style>