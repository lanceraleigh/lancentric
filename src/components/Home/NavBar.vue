<template>
  <nav class="landing-page">
    <div class="language-select">
      <select
        class="personal-site"
        style="text-align: center"
        v-model="selected"
        @change="selectSiteLanguage"
      >
        <option value="DisplayLanguage" disabled>Display Language</option>
        <option v-for="option in options" :value="option" :key="option">
          {{ capitalize(option) }}
        </option>
      </select>
      <img :src="flagSelection" class="flag" />
    </div>
    <NavLinks></NavLinks>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
import NavLinks from "../Home/NavLinks.vue";
export default {
  name: "NavBar",
  components: {
    NavLinks,
  },
  props: {
    landing: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      selected: this.personalSiteCurrentLanguageName || "english",
      options: ["english", "spanish", "french", "portuguese"],
    };
  },
  computed: {
    ...mapGetters([
      "currentLanguageLessons",
      "currentLanguageName",
      "personalSiteCurrentLanguageName",
    ]),
    flagSelection() {
      return require(`../../assets/country-flags/png-48/${this.selected}.png`);
    },
    lancentric() {
      return (
        this.$route.name === "LancentricLandingPage" ||
        this.$route.name === "Learning" ||
        this.$route.name === "Login" ||
        this.$route.name === "UserProfile"
      );
    },
    personalSite() {
      return (
        this.$route.name === "Home" ||
        this.$route.name === "About" ||
        this.$route.name === "Projects" ||
        this.$route.name === "Contact" ||
        this.$route.name === "PageNotFound"
      );
    },
  },
  watch: {
    personalSiteCurrentLanguageName(newVal) {
      this.selected = newVal;
    },
  },
  methods: {
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    selectLanguageToLearn() {
      this.$store.commit("setCurrentLanguageLessons", this.selected);
    },
    selectSiteLanguage() {
      this.$store.commit("setPersonalSiteCurrentLanguage", this.selected);
    },
    letsGetLearning() {
      this.$router.push("/lancentric");
    },
  },
};
</script>
<style lang="scss" scoped>
nav {
  width: 100vw;
  height: 4rem;
  background: #fff;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  border-bottom: 1px solid #444;
  .lancentric-link {
    font-size: 1.25rem;
    height: 1.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: 10px;
    box-shadow: 2px 2px #000;
    background: linear-gradient(
      124deg,
      #ff240059,
      #e81d1d59,
      #e8b71d59,
      #e3e81d59,
      #1de84059,
      #1ddde859,
      #2b1de859,
      #dd00f359,
      #dd00f359
    );
    background-size: 500% 500%;

    -webkit-animation: rainbow 18s ease infinite;
    -z-animation: rainbow 18s ease infinite;
    -o-animation: rainbow 18s ease infinite;
    animation: rainbow 18s ease infinite;
  }
  .lancentric-link:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
  .link-button {
    margin-right: 1rem;
  }
  .beta {
    font-size: 0.75rem;
    padding-bottom: 0.25rem;
  }
  .language-select {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    select {
      height: 1.5rem;
      border-radius: 10px;
    }
    .flag {
      margin: 0 0.5rem;
      padding: 0 0.5rem;
      height: 2rem;
    }
  }
}

@media only screen and (max-width: 1100px) {
  nav {
    height: 3rem;
    padding: 0 1rem;
    flex-direction: row-reverse;
  }
  .language-select {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .flag {
    position: absolute;
    left: 50vw;
    transform: translateX(-55%);
    padding: 0;
    margin: 0;
  }
  .home-title {
    display: none;
  }
  .mobile-shortening {
    display: none;
  }
  .beta {
    display: none;
  }
}
// Animations

@-webkit-keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
@-moz-keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
@-o-keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
@keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
nav.landing-page {
  background: #16212d;
  color: #fff;
  padding-bottom: 0;
}
</style>
