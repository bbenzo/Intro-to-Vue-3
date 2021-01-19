app.component("review-form", {
  template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" placeholder="Max Mustermann" v-model="name">

        <label for="review">Review:</label>      
        <textarea id="review" v-model="review" placeholder="Tolle Socken!"></textarea>

        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <p>Would you recommend this product?</p>
        <label for="recommendation">Yes</label>
        <input type="radio" value="true" v-model="recommendation">
        <label for="recommendation">No</label>
        <input type="radio" value="false" v-model="recommendation">

        <input class="button" type="submit" value="Submit">
    </form>`,
  data() {
    return {
      name: "",
      review: "",
      rating: null,
      recommendation: false,
    };
  },
  methods: {
    onSubmit() {
      if (this.name == "" || this.review == "" || this.rating == null) {
        alert("You need to fill in every field of the form!");
        return;
      }

      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommendation: this.recommendation,
      };

      this.$emit("review-submitted", productReview);

      this.name = "";
      this.review = "";
      this.rating = null;
      this.recommendation = false;
    },
  },
});
