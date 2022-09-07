<template>
  <SpanishHomeView />
</template>

<script>
import SpanishHomeView from "./languageViews/SpanishHomeView.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    SpanishHomeView,
  },
  computed: {
    ...mapGetters(["spanishLessons"]),
  },
  methods: {
    openModal(payload) {
      this.lessonModalOpen = payload;
    },
  },
};
</script>

<style>
.home {
  display: grid;
  grid-template-rows: 1fr 5fr;
}
</style>
