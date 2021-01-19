app.component("review-list", {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template:
  /*html*/
  `
  <div class="review-container">
    <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                <br/>
                Review: "{{ review.review }}" 
                <br/>
                Would Recommend: 
                <div v-if="review.recommendation == false">No</div>
                <div v-else>Yes</div>
            </li>
        </ul>
  </div>
  `
});
