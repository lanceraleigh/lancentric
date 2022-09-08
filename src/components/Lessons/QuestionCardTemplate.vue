<template>
  <div id="question-card-container">
    <div class="card-image-box">fake image</div>
    <div class="card-question">{{ card.question }}</div>
    <div class="question-context">{{ card.questionContext }}</div>
    <input type="text" v-model="answerInput" />
    <button @click="checkAnswerInput">Submit</button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "questionCardTemplate",
  data() {
    return {
      answerInput: "",
      answerIsCorrect: false,
    };
  },
  computed: {
    ...mapGetters({
      card: "cardQuestionObject",
    }),
  },
  methods: {
    checkAnswerInput() {
      if (this.answerInput.toLowerCase() === this.card.questionAnswer) {
        this.answerIsCorrect = true;
      } else {
        alert(
          `Incorrect, the correct answer was "${this.card.questionAnswer}", please try again`
        );
      }
    },
  },
};
</script>
<style>
#question-card-container {
  color: #333;
  background: #eee;
  border: 2px solid #aaa;
  padding: 4rem 2rem;
  max-width: 33vw;
  position: absolute;
  top: 30vh;
  left: 50%;
  margin-left: -50%;
  border-radius: 15px;
  box-shadow: 0 5px #333;
}
</style>
