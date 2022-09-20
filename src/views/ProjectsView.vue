<template>
  <div class="projects">
    <StarBackground></StarBackground>
    <div class="quote" style="line-height: 2rem">
      <h1 class="title" style="font-size: 5rem; margin-bottom: 3rem">
        Projects
      </h1>
      <div class="phrase">
        Just build a todo app and you'll know all you need to get hired
        <!-- <br /><span style="font-style: italic; font-weight: 600"
          >&#10024; hired &#10024;</span
        > -->
      </div>
      <div class="author">- Every Youtube Tutorial Ever</div>
    </div>
    <div class="projects-container">
      <!-- Netty -->
      <div class="project-card">
        <a href="https://codepen.io/lance-shunn-ii/pen/bGLdjQO">
          <img src="../assets/projects/netty.png" alt="Netty"
        /></a>
        <div class="project-item">Netty (see full vue app on github)</div>
      </div>
      <!-- Todo List -->
      <div class="project-card">
        <a href="https://codepen.io/lance-shunn-ii/pen/oNEXPrJ">
          <img
            src="../assets/projects/cliche.png"
            alt="That one youtube todo list"
            style="filter: brightness(80%)"
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
      <!-- See More -->
      <div class="project-card">
        <div class="link-card">
          <div>CodePen:</div>
          <a href="https://codepen.io/lance-shunn-ii">@lance-shunn-ii</a>
          <div>GitHub:</div>
          <a href="https://github.com/lanceshunnii">@lanceshunnii</a>
        </div>
        <div class="project-item">There's more where those came from</div>
      </div>
      <!-- Baby Steps -->
      <!-- <div class="project-card">
        <a href="https://codepen.io/lance-shunn-ii/pen/wvBEazW">
          <img src="../assets/projects/first.png" alt="My first baby steps" />
        </a>
        <div class="project-item">
          My very first project. Isn't it precious?
        </div>
      </div> -->
    </div>
    <!-- <NavLinks></NavLinks> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import StarBackground from "../components/reusables/StarBackground.vue";
// import NavLinks from "../components/Home/NavLinks.vue";
export default {
  name: "ProjectsView",
  components: {
    StarBackground,
    // NavLinks,
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
  z-index: 2;
}
.project-card {
  width: 20rem;
  background: #ddd;
  border-radius: 15px;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 0 0 5px rgba(56, 2, 100, 0.746);
}
.project-card:hover {
  transform: scale(1.01);
}
.link-card {
  width: 20rem;
  height: 12.5rem;
  border-radius: 15px 15px 0 0;
  background: #222;
  color: #ddd;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: left;
  text-align: left;
  padding-left: 1rem;
  a {
    text-decoration: none;
    color: greenyellow;
  }
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
