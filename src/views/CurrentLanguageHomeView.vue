<template>
  <NavBar />
  <div
    class="lesson-groups-container"
    :class="{ 'modal-open': lessonModalOpen }"
  >
    <LessonLinkRow
      v-for="lessonGroup in currentLanguageLessons"
      :key="lessonGroup[0].groupName"
      :languageLessonsArray="lessonGroup"
    >
      <div class="lesson-link-row-title">{{ lessonGroup[0].groupName }}</div>
    </LessonLinkRow>
  </div>
  <LessonModal v-if="lessonModalOpen"></LessonModal>
</template>

<script>
import LessonLinkRow from "../components/Lessons/LessonLinkRow.vue";
import LessonModal from "../components/Lessons/LessonModal.vue";
import NavBar from "../components/Home/NavBar.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    LessonLinkRow,
    LessonModal,
    NavBar,
  },
  computed: {
    ...mapGetters(["currentLanguageLessons", "lessonModalOpen"]),
  },
};
</script>

<style>
.lesson-groups-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  width: 100vw;
}
.lesson-groups-container.modal-open {
  overflow-y: hidden;
}
.lesson-link-row-title {
  font-weight: bold;
  margin-bottom: 2rem;
}
</style>
