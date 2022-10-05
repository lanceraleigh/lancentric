<template>
  <StarBackground></StarBackground>
  <div
    class="lesson-groups-container"
    :class="{ 'modal-open': lessonModalOpen }"
  >
    <LessonLinkRow
      v-for="lessonGroup in currentLanguageLessons"
      :rerenderProgressKey="newKey"
      :key="lessonGroup[0].groupName"
      :languageLessonsArray="lessonGroup"
    >
      <div class="lesson-link-row-title">{{ lessonGroup[0].groupName }}</div>
    </LessonLinkRow>
  </div>
  <LessonModal
    v-if="lessonModalOpen"
    id="lessons-modal"
    @rerenderProgress="updateRenderKey"
  ></LessonModal>
</template>

<script>
import LessonLinkRow from "../components/Lessons/LessonLinkRow.vue";
import LessonModal from "../components/Lessons/LessonModal.vue";
import StarBackground from "../components/reusables/StarBackground.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    LessonLinkRow,
    LessonModal,
    StarBackground,
  },
  data() {
    return {
      newKey: 0,
    };
  },
  computed: {
    ...mapGetters(["currentLanguageLessons", "lessonModalOpen"]),
  },
  methods: {
    updateRenderKey() {
      this.newKey += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.lesson-groups-container {
  color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.lesson-groups-container:has(+ LessonsModal) {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.lesson-link-row-title {
  font-weight: bold;
  margin-bottom: 2rem;
}
@media only screen and (max-width: 1100px) {
  .lesson-groups-container {
    height: fit-content;
    width: 100vw;
    overflow: hidden;
  }
  .lesson-link-row-title {
    margin-bottom: 1rem;
  }
}
</style>
