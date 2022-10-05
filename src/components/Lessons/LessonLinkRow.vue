<template>
  <div class="lesson-row">
    <slot></slot>
    <div class="row-item-container">
      <div
        v-for="lesson in filteredLanguageLessonsArray"
        :key="lesson.lessonTitle"
        class="row-item"
        @click="openLessonModal(lesson)"
      >
        <div class="lesson-name">{{ lesson.lessonName }}</div>
        <ProgressBar
          :lessonId="lesson.lessonId"
          :key="progressKey"
          class="progress-bar"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import ProgressBar from "./ProgressBar.vue";
export default {
  components: {
    ProgressBar,
  },
  props: {
    languageLessonsArray: {
      type: Array,
      required: true,
    },
    rerenderProgressKey: {
      type: Number,
      required: true,
    },
  },
  computed: {
    filteredLanguageLessonsArray() {
      return this.languageLessonsArray.filter((languageLesson) => {
        return !!languageLesson.lessonName;
      });
    },
  },
  methods: {
    ...mapMutations(["setCardQuestionObject", "toggleLessonModal"]),
    openLessonModal(lessonObject) {
      this.toggleLessonModal(true);
      this.setCardQuestionObject({
        group: lessonObject.groupIndex,
        index: lessonObject.lessonIndex,
      });
    },
  },
};
</script>
<style>
.lesson-row {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  padding: 3rem;
  border-bottom: 1px solid #444;
  z-index: 2;
}
.row-item-container {
  display: flex;
}
.row-item {
  background: var(--medium-color);
  width: 7rem;
  height: 7rem;
  box-shadow: 1px 4px #aaa;
  border-radius: 10px;
  border: 2px solid #ccc;
  margin: 0 3rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lesson-name {
  font-weight: bold;
  margin: 5%;
}
.progress-bar {
  position: absolute;
  bottom: -2rem;
}
.row-item:hover {
  cursor: pointer;
  background: var(--medium-color-hover);
  box-shadow: 0 3px #aaa;
}
.progress-circle {
  height: 0.75rem;
  width: 0.75rem;
  background: #fff;
  border-radius: 50%;
  position: absolute;
}
@media only screen and (max-width: 1100px) {
  .lesson-row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    padding: 1rem;
    border-bottom: 1px solid #444;
  }
  .row-item-container {
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .row-item {
    width: 5rem;
    height: 5rem;
    box-shadow: 1px 4px #aaa;
    border-radius: 10px;
    border: 2px solid #ccc;
    margin: 2rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .lesson-name {
    font-weight: bold;
    margin: 5%;
  }
  .progress-bar {
    position: absolute;
    bottom: -2rem;
  }
  .row-item:hover {
    cursor: pointer;
    background: var(--medium-color-hover);
    box-shadow: 0 3px #aaa;
  }
  .progress-circle {
    height: 0.75rem;
    width: 0.75rem;
    background: #fff;
    border-radius: 50%;
    position: absolute;
  }
}
</style>
