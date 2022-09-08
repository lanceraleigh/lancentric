<template>
  <div class="lesson-modal-container">
    <ConfirmationDialog
      v-if="confirmationOpen"
      :message="'Are you sure you want to leave your lesson?'"
      @yes="closeModal"
      @no="confirmationOpen = false"
    />
    <div class="lesson-modal">
      <div class="top-bar">
        <div class="lesson-name">{{ cardQuestionObject.lessonName }}</div>
      </div>
      <div class="close-button" @click="confirmationOpen = true">&#10006;</div>
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
            <div v-for="option in question.questionOptions" :key="option">
              <input
                type="radio"
                v-model="answerInput"
                :name="option"
                :value="option"
              />
              <label :for="option">{{ option }}</label>
            </div>
          </div>
          <input v-else v-model="answerInput" />
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
import ConfirmationDialog from "../reusables/ConfirmationDialog.vue";
export default {
  name: "LessonModal",
  components: {
    ConfirmationDialog,
  },
  computed: {
    ...mapGetters(["cardQuestionObject"]),
  },
  data() {
    return {
      currentQuestionNumber: 1,
      answerInput: "",
      confirmationOpen: false,
    };
  },
  methods: {
    nextQuestion(questionNumber) {
      this.currentQuestionNumber = questionNumber + 1;
    },
    lastQuestion(questionNumber) {
      this.currentQuestionNumber = questionNumber - 1;
    },
    closeModal() {
      confirm("Are you sure you want to leave your lesson?");
      this.$store.commit("toggleLessonModal", false);
    },
  },
};
</script>
<style scoped>
.lesson-modal-container {
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  font-size: 2rem;
}
.lesson-modal {
  width: 70vw;
  height: 70vh;
  background: #fff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #444;
  position: relative;
}
.top-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1rem;
}
.lesson-name {
  font-size: 1rem;
  white-space: nowrap;
}
.close-button {
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
}
.close-button:hover {
  transform: scale(0.95);
  cursor: pointer;
}
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  left: 50%;
}
.button {
  margin: 1rem;
  height: 1.5rem;
  width: 3rem;
  text-align: center;
  background: rgb(0, 81, 255);
  font-size: 1rem;
  color: white;
  border-radius: 10px;
  box-shadow: 2px 3px #444;
}
.button:hover {
  cursor: pointer;
}
</style>
