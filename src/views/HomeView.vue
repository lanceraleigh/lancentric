<template>
  <div class="home">
    <HomeBackground />
    <HomeTitle />
    <div class="card-container">
      <QuestionCardTemplate />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HomeTitle from "../components/HomeTitle.vue";
import HomeBackground from "../components/HomeBackground.vue";
import QuestionCardTemplate from "../components/QuizCards/QuestionCardTemplate.vue";

@Options({
  components: {
    HomeTitle,
    HomeBackground,
    QuestionCardTemplate,
  },
})
export default class HomeView extends Vue {}
</script>

<style>
.home {
  min-height: 100vh;
}
</style>
