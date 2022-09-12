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
        <div
          v-if="question.questionNumber === currentQuestionNumber"
          :id="question"
        >
          <div class="question-number">
            Question number {{ question.questionNumber }}:
          </div>
          <div class="question-type">{{ question.questionType }}</div>
          <div class="question-context">{{ question.questionContext }}</div>
          <div v-if="question.questionOptions" class="card-item">
            <div v-for="option in question.questionOptions" :key="option">
              <input
                class="card-item"
                type="radio"
                v-model="answerInput"
                :name="option"
                :value="option"
              />
              <label :for="option">{{ option }}</label>
            </div>
          </div>
          <textarea
            v-else
            class="card-item"
            maxlength="50"
            rows="10"
            cols="20"
            v-model="answerInput"
          ></textarea>
          <div
            class="check-answer-button"
            @click="submitAnswer(question.questionAnswer)"
          >
            Check Answer
          </div>
          <div class="button-container">
            <div
              @click="lastQuestion(question.questionNumber)"
              class="button back-button"
            >
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
  mounted() {
    document.querySelector("textarea").addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        e.preventDefault();
        this.submitAnswer(
          this.cardQuestionObject.lessonQuestions[this.currentQuestionIndex]
            .questionAnswer
        );
      }
    });
  },
  computed: {
    ...mapGetters(["cardQuestionObject"]),
  },
  data() {
    return {
      currentQuestionNumber: 1,
      currentQuestionIndex: 0,
      answerInput: "",
      confirmationOpen: false,
      currentAnswer: this.cardQuestionObject,
    };
  },
  methods: {
    submitAnswer(correctAnswer) {
      console.log(this.answerInput, correctAnswer);
      let submitted = this.answerInput.toLowerCase();
      if (submitted === "") {
        alert("Please make sure to input an answer before submitting");
      } else if (submitted !== "" && submitted !== correctAnswer) {
        alert("oops");
      } else if (submitted === correctAnswer) {
        alert("Hell yeah!");
      }
    },
    nextQuestion(questionNumber) {
      this.currentQuestionNumber = questionNumber + 1;
      this.currentQuestionIndex++;
    },
    lastQuestion(questionNumber) {
      this.currentQuestionNumber = questionNumber - 1;
      this.currentQuestionIndex--;
    },
    closeModal() {
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
.question-number {
  font-size: 1rem;
  font-weight: bold;
  position: absolute;
  top: 3rem;
}
.question-type {
  font-size: 1rem;
}
.question-context {
  font-size: 1.5rem;
}
textarea {
  resize: none;
  font-size: 1.5rem;
  font-weight: bold;
}
.card-item {
  margin: 0.5rem;
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
.check-answer-button {
  margin: 1rem;
  height: 1.5rem;
  text-align: center;
  background: var(--blue-button);
  font-size: 1rem;
  color: white;
  border-radius: 5px;
  box-shadow: 1px 2px #444;
}
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 20rem;
  bottom: 2rem;
}
.button {
  margin: 1rem;
  height: 1.5rem;
  width: 3rem;
  text-align: center;
  background: var(--blue-button);
  font-size: 1rem;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  box-shadow: 1px 2px #444;
}
.button.back-button {
  background: #aaa;
  color: #fff;
}
.button:hover {
  cursor: pointer;
}
</style>
