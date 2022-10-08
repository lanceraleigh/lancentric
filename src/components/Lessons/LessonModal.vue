<template>
  <div class="lesson-modal-container">
    <DialogBox
      v-if="confirmationOpen"
      :type="'confirmation'"
      :message="'Are you sure you want to leave your lesson?'"
      @yes="closeModal"
      @no="confirmationOpen = false"
    />
    <DialogBox
      v-if="answerSubmitted"
      :type="'answer'"
      :message="submittedResponseDialog"
      :answerRight="answerRight"
      @no="answerSubmitted = false"
      @yes="
        nextQuestion();
        answerInput = '';
        answerSubmitted = false;
      "
    />
    <DialogBox
      v-if="lostLives"
      :type="'confirmation'"
      :message="'Oh no! Looks like your lives ran out! Try again?'"
      @no="
        lostLives = false;
        closeModal();
      "
      @yes="
        numberOfLives = 3;
        lostLives = false;
        currentQuestionNumber = 1;
        currentQuestionIndex = 0;
        answerInput = '';
      "
    />
    <div class="lesson-modal">
      <div class="top-bar">
        <div class="lives">Lives<span>: </span></div>
        <!-- <div class="lesson-name">{{ cardQuestionObject.lessonName }}</div> -->
        <div class="heart-container">
          <div v-for="index in numberOfLives" :key="index" class="hearts">
            &#10084;&#65039;
          </div>
        </div>
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
          <!-- <div class="question-number">
            Question number {{ question.questionNumber }}:
          </div> -->
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
            v-model="answerInput"
          ></textarea>
          <div
            class="check-answer-button"
            @click="submitAnswer(question.questionAnswer)"
          >
            Check Answer
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DialogBox from "../reusables/DialogBox.vue";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://zhvrljcjqgbfzroslhgy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpodnJsamNqcWdiZnpyb3NsaGd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjczOTYsImV4cCI6MTk4MDUwMzM5Nn0.AoX49ksU8h7bYf3AJZftiT289Xyd4Y_uYhawuaueFHE"
);
export default {
  name: "LessonModal",
  components: {
    DialogBox,
  },
  async mounted() {
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
      numberOfLives: 3,
      lostLives: false,
      currentQuestionNumber: 1,
      currentQuestionIndex: 0,
      answerInput: "",
      confirmationOpen: false,
      currentAnswer: this.cardQuestionObject,
      answerSubmitted: false,
      submittedResponseDialog: "Oops, that doesn't look right",
      answerRight: false,
    };
  },
  methods: {
    async login() {
      await this.$auth0.loginWithRedirect();
      window.sessionStorage.setItem(
        "currentlyLoggedIn",
        JSON.stringify(this.$auth0.user.user_id)
      );
    },
    async updateLessonProgress(lessonId) {
      // Supabase
      let lessonProgressPercentage;
      let { data: lessonprogress, error } = await supabase
        .from("lessonprogress")
        .select("*");
      // eslint-disable-next-line
      console.log(lessonprogress || error);
      lessonprogress.filter((obj) => {
        return (
          obj.user_id === this.$auth0.user.user_id && obj.lesson_id === lessonId
        );
      });

      if (lessonprogress) {
        lessonProgressPercentage = lessonprogress.lesson_progress;
        lessonProgressPercentage += 20;
        const { data, error } = await supabase
          .from("lessonprogress")
          .update({ lesson_progress: JSON.stringify(lessonProgressPercentage) })
          .match({ user_id: "someValue", lesson_id: JSON.stringify(lessonId) });
        // eslint-disable-next-line
        console.log(data || error);
      } else {
        const { data, error1 } = await supabase.from("lessonprogress").insert([
          {
            user_id: this.$auth0.user.user_id,
            lesson_id: JSON.stringify(lessonId),
            lesson_progress: JSON.stringify(20),
          },
        ]);
        // eslint-disable-next-line
        console.log(data || error1);
      }

      // let { data: lessonprogress, error } = await supabase
      //   .from("lessonprogress")
      //   .select("*");
      // if (lessonprogress !== []) {
      //   const { data, error } = await supabase.from("lessonprogress").insert([
      //     {
      //       user_id: this.$auth0.user.user_id,
      //       lesson_id: JSON.stringify(lessonId),
      //       lesson_progress: JSON.stringify(lessonId),
      //     },
      //   ]);
      //   console.log(data || error, "check");
      // } else {
      //   console.log(error, "sum went wrong");
      // }

      // localstorage
      let savedLessonProgress =
        JSON.parse(
          window.localStorage.getItem(
            `${lessonId}Progress${this.$auth0.user.user_id}`
          )
        ) || 0;

      // Mutate the objects that changed
      savedLessonProgress += 20;

      // Set the new progress objects
      window.localStorage.setItem(
        `${lessonId}Progress${this.$auth0.user.user_id}`,
        JSON.stringify(savedLessonProgress)
      );
    },
    removeAccents(str) {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    },
    submitAnswer(correctAnswer) {
      let submitted = this.removeAccents(this.answerInput.toLowerCase());
      if (submitted === "") {
        this.submittedResponseDialog =
          "Oops, please make sure to input an answer before submitting";
        this.answerRight = false;
      } else if (submitted !== "" && submitted !== correctAnswer) {
        this.submittedResponseDialog = "Oops, that doesn't look right.";
        this.answerRight = false;
        if (this.numberOfLives > 1) {
          this.numberOfLives -= 1;
        } else {
          this.numberOfLives -= 1;
          this.lostLives = true;
          return;
        }
      } else if (submitted === correctAnswer) {
        this.submittedResponseDialog = "Awesome work!";
        this.answerRight = true;
      }
      this.answerSubmitted = true;
    },
    nextQuestion() {
      if (this.currentQuestionNumber < 10) {
        this.currentQuestionNumber++;
        this.currentQuestionIndex++;
      } else {
        this.updateLessonProgress(this.cardQuestionObject.lessonId);
        this.closeModal();
      }
    },
    lastQuestion() {
      this.currentQuestionNumber_--;
      this.currentQuestionIndex--;
    },
    closeModal() {
      this.$store.commit("toggleLessonModal", false);
      this.$emit("rerenderProgress");
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
.lives {
  font-size: 1rem;
}
.heart-container {
  display: flex;
}
.hearts {
  font-size: 0.75rem;
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
.check-answer-button:hover {
  cursor: pointer;
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
@media only screen and (max-width: 1100px) {
  .lesson-modal-container {
    font-size: 1rem;
  }
  .lesson-modal {
    width: 75vh;
    height: 75vh;
  }
  .top-bar {
    display: none;
  }
  .question-number {
    font-size: 0.75rem;
    top: 1.5rem;
  }
  textarea {
    height: 35vh;
    width: 60vw;
  }
  .question-type {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1rem;
  }
  .question-context {
    text-align: center;
    font-weight: bold;
    font-size: 1rem;
  }
  .check-answer-button {
    margin: 0.25rem;
  }
}
</style>
