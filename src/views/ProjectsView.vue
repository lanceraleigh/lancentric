<template>
  <div class="projects">
    <StarBackground></StarBackground>
    <div class="quote" style="line-height: 2rem">
      <h1 class="title" style="font-size: 4rem; margin-bottom: 3rem">
        Projects
      </h1>
      <div class="phrase">
        Just build a todo app and you'll know all you need to get hired
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
      <div class="project-card link-card-container">
        <div class="link-card">
          <div class="link-message">Check out some of my other projects:</div>
          <div class="link-container">
            <div class="link">
              <a target="_blank" href="https://github.com/lanceraleigh"
                >My GitHub</a
              >
            </div>
            <div class="link">
              <a target="_blank" href="https://codepen.io/lance-shunn-ii"
                >My CodePen</a
              >
            </div>
          </div>
        </div>
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
<style lang="scss" scoped>
.projects {
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  padding: 0;
  width: 100vw;
  height: 300vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 4rem;
  overflow: hidden;
}
.quote {
  padding: 2rem;
  color: #ddd;
  height: 85vh;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
.project-card {
  width: 40vw;
  background: #ddd;
  border-radius: 15px;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 0 0 5px #000;
}
.project-card:hover {
  transform: scale(1.01);
}
.project-card.link-card-container {
  box-shadow: none;
  background: none;
  .link-card {
    width: 40vw;
    height: 20vw;
    font-size: 1rem;
    border-radius: 15px 15px 0 0;
    color: #fff;
    font-weight: 900;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    padding-left: 1rem;
    .link-container {
      width: 100%;
      height: 100%;
      margin-top: 7.5vw;
      display: flex;
      justify-content: space-around;
      a {
        // text-decoration: none;
        color: greenyellow;
      }
    }
  }
}
.link-card-container:hover {
  transform: scale(1);
}
.project-item {
  color: #222;
  font-weight: 900;
  padding: 0.5rem;
}
img {
  width: 40vw;
  height: 20vw;
  border-bottom: 5px solid #000;
  border-radius: 15px 15px 0 0;
}

@media only screen and (max-width: 550) {
  .project-card.link-card-container {
    background: none;
    .link-card {
      width: 40vw;
      height: 20vw;
      font-size: 0.5rem;
      border-radius: 15px 15px 0 0;
      color: #fff;
      font-weight: 900;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      text-align: left;
      padding-left: 1rem;
      .link-container {
        width: 100%;
        height: 100%;
        margin-top: 7.5vw;
        display: flex;
        justify-content: space-around;
        a {
          // text-decoration: none;
          color: greenyellow;
        }
      }
    }
  }
}
</style>
