<template>
  <HomeTitle />
  <SpanishHomeView />
</template>

<script>
import HomeTitle from "../components/HomeTitle.vue";
import SpanishHomeView from "./languageViews/SpanishHomeView.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    HomeTitle,
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
