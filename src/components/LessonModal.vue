<template>
  <div class="lesson-modal-container">
    <div class="lesson-modal">
      <div class="top-bar">
        <div>{{ cardQuestionObject.lessonName }}</div>
        <div class="button close-button" @click="toggleModal">close</div>
      </div>
      <div
        v-for="question in cardQuestionObject.lessonQuestions"
        :key="
          cardQuestionObject.groupIndex +
          cardQuestionObject.lessonIndex +
          question.questionNumber
        "
      >
        <div v-show="question.questionNumber === currentQuestionNumber">
          <div>Question number {{ question.questionNumber }}:</div>
          <div>{{ question.questionType }}</div>
          <div>{{ question.questionContext }}</div>
          <div v-if="question.questionOptions">
            {{ question.questionOptions }}
          </div>
          <input v-model="answerInput" />
          <div class="button-container">
            <div @click="lastQuestion(question.questionNumber)" class="button">
              Back
            </div>
            <div @click="nextQuestion(question.questionNumber)" class="button">
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "LessonModal",
  computed: {
    ...mapGetters(["cardQuestionObject"]),
  },
  data() {
    return {
      currentQuestionNumber: 1,
      answerInput: "",
    };
  },
  methods: {
    nextQuestion(questionNumber) {
      this.currentQuestionNumber = questionNumber + 1;
    },
    lastQuestion(questionNumber) {
      this.currentQuestionNumber = questionNumber - 1;
    },
    toggleModal() {
      this.$store.commit("toggleLessonModal");
    },
  },
};
</script>
<style>
.lesson-modal-container {
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  font-size: 2rem;
}
.lesson-modal {
  width: 70vw;
  height: 70vh;
  background: #ddd;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.top-bar {
  display: flex;
}
.button-container {
  display: flex;
}
.button {
  margin: 1rem;
  height: 1.5rem;
  width: 3rem;
  text-align: center;
  background: blue;
  font-size: 1rem;
  color: white;
  border-radius: 10px;
  box-shadow: 2px 3px #444;
}
.button:hover {
  cursor: pointer;
}
</style>
