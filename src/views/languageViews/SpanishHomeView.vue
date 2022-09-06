<template>
  <div class="lesson-groups-container">
    <LessonLinkRow
      v-for="lessonGroup in spanishLessons"
      :key="lessonGroup[0].groupName"
      :languageLessonsArray="lessonGroup"
      @lessonModal="toggleModal"
    >
      <div class="lesson-link-row-title">{{ lessonGroup[0].groupName }}</div>
    </LessonLinkRow>
  </div>
  <LessonModal v-if="lessonModalOpen"></LessonModal>
</template>

<script>
import LessonLinkRow from "../../components/LessonLinkRow.vue";
import LessonModal from "../../components/LessonModal.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    LessonLinkRow,
    LessonModal,
  },
  computed: {
    ...mapGetters(["spanishLessons", "lessonModalOpen"]),
  },
  methods: {
    toggleModal() {
      this.$store.commit("toggleLessonModal");
    },
  },
};
</script>

<style>
.language-title {
  font-weight: bold;
}
.lesson-groups-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  width: 100vw;
}
.lesson-link-row-title {
  font-weight: bold;
  margin-bottom: 2rem;
}
</style>
