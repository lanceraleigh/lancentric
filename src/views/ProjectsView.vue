<template>
  <div class="projects">
    <StarBackground></StarBackground>
    <div class="quote">
      <h1 class="title">Projects</h1>
      <div class="phrase">
        Just build a todo app and you'll know enough all you need to get hired
        <!-- <br /><span style="font-style: italic; font-weight: 600"
          >&#10024; hired &#10024;</span
        > -->
      </div>
      <div class="author">- Every Youtube Tutorial Ever</div>
    </div>
    <div class="projects-container">
      <!-- Baby Steps -->
      <div class="project-card">
        <a href="https://codepen.io/lance-shunn-ii/pen/wvBEazW">
          <img src="../assets/projects/first.png" alt="My first baby steps" />
        </a>
        <div class="project-item">
          My very first project. Isn't it precious?
        </div>
      </div>
      <!-- Todo List -->
      <div class="project-card">
        <a href="https://codepen.io/lance-shunn-ii/pen/oNEXPrJ">
          <img
            src="../assets/projects/cliche.png"
            alt="That one youtube todo list"
          />
        </a>
        <div class="project-item">YT's Favorite Todo List</div>
      </div>
      <!-- Motivation App -->
      <div class="project-card">
        <a href="https://codepen.io/lance-shunn-ii/pen/ExQjepo">
          <img
            src="../assets/projects/motivation.png"
            alt="Get some motivation on the daily"
        /></a>
        <div class="project-item">Motivation App</div>
      </div>
      <!-- Netty -->
      <div class="project-card">
        <a href="https://codepen.io/lance-shunn-ii/pen/bGLdjQO">
          <img src="../assets/projects/netty.png" alt="Netty"
        /></a>
        <div class="project-item">Netty (see full vue app on github)</div>
      </div>
    </div>
    <FootNav></FootNav>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import StarBackground from "../components/reusables/StarBackground.vue";
import FootNav from "../components/Home/FootNav.vue";
export default {
  name: "HomeView",
  components: {
    StarBackground,
    FootNav,
  },
  computed: {
    ...mapGetters({ $lang: "personalSiteCurrentLanguage" }),
  },
  methods: {
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    async selectLanguage(language) {
      await this.$router.push("/home");
      this.$store.commit("setCurrentLanguageLessons", language);
    },
  },
};
</script>
<style scoped lang="scss">
.projects {
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  // margin-top: 3.5rem;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.quote {
  padding: 2rem;
  color: #ddd;
  width: 27rem;
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: center;
  text-align: center;
  .phrase {
    font-size: 1.25rem;
    font-weight: 900;
  }
}
.projects-container {
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.project-card {
  width: 20rem;
  background: #ddd;
  border-radius: 15px;
  margin: 2rem;
  text-align: center;
}
.project-item {
  color: #222;
  font-weight: 900;
  padding: 0.25rem;
}
img {
  width: 20rem;
  height: 12.5rem;
  border-radius: 15px 15px 0 0;
}
</style>
