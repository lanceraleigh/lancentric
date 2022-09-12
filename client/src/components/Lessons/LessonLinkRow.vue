<template lang="">
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
        <!-- <div class="progress-circle top-left"></div>
        <div class="progress-circle top-right"></div>
        <div class="progress-circle bottom-right"></div>
        <div class="progress-circle bottom-left"></div> -->
        <ProgressBar :progress="lesson.progress" class="progress-bar" />
      </div>
    </div>
  </div>
</template>
<script lang="js">
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
      this.setCardQuestionObject({group: lessonObject.groupIndex, index: lessonObject.lessonIndex});
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
  padding: 5rem;
  border-bottom: 1px solid #444;
}
.row-item-container {
  display: flex;
}
.row-item {
  background: var(--pro-color);
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
  background: var(--pro-color-hover);
  box-shadow: 0 3px #aaa;
}
.progress-circle {
  height: 0.75rem;
  width: 0.75rem;
  background: #fff;
  border-radius: 50%;
  position: absolute;
}
.top-left {
  left: 0;
  top: 0;
}
.top-right {
  right: 0;
  top: 0;
}
.bottom-right {
  right: 0;
  bottom: 0;
}
.bottom-left {
  left: 0;
  bottom: 0;
}
</style>
