<template>
  <div class="landing-page">
    <StarBackground></StarBackground>
    <h2 class="language-choice-title">
      {{ $lang.landingPageQuestion }}
    </h2>
    <div class="landing">
      <div
        v-for="img in flagArray"
        :key="img.source"
        class="img-container"
        @click="selectLanguage(img.name)"
      >
        <img :src="img.source" class="language-image" />
        <div class="title">
          <span v-if="img.name !== 'english'" class="additional-words"
            >English to </span
          ><span v-if="img.name === 'english'" class="additional-words"
            >Misc. to </span
          >{{ capitalize(img.name)
          }}<span v-if="img.name === 'english'" class="additional-words">
            (experimental)</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StarBackground from "../components/reusables/StarBackground.vue";
import { mapGetters } from "vuex";
export default {
  name: "LandingPage",
  components: {
    StarBackground,
  },
  data() {
    return {
      flagArray: [
        {
          source: require("../assets/country-flags/png-256/america.png"),
          name: "english",
        },
        {
          source: require("../assets/country-flags/png-256/spain.png"),
          name: "spanish",
        },
        {
          source: require("../assets/country-flags/png-256/brazil.png"),
          name: "portuguese",
        },
        {
          source: require("../assets/country-flags/png-256/france.png"),
          name: "french",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({ $lang: "personalSiteCurrentLanguage" }),
  },
  methods: {
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    async selectLanguage(language) {
      await this.$router.push("/lancentric/letslearn");
      this.$store.commit("setCurrentLanguageLessons", language);
    },
  },
};
</script>
<style scoped>
.landing-page {
  margin: 0;
  padding: 0;
  height: 100vh;
  color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.landing {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 5;
}

.img-container {
  width: 260px;
  height: 230px;
  border-radius: 15px;
  margin: 3rem;
  background-color: #444;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
  position: absolute;
  border-radius: 20% 20% 0 0;
  top: -30px;
}
.title {
  position: absolute;
  bottom: 0.5rem;
  color: aliceblue;
}
.img-container:hover {
  cursor: pointer;
  transform: scale(1.01);
  box-shadow: 1px 3px 5px #243548;
}
@media only screen and (max-width: 800px) {
  .img-container {
    width: 100px;
    height: 120px;
    border-radius: 10px;
    margin: 2rem;
  }
  .language-choice-title {
    margin: 1.5rem;
    text-align: center;
  }
  img {
    margin-top: 30px;
    width: 80px;
    height: 80px;
  }
  .additional-words {
    display: none;
  }
}
@media only screen and (max-width: 400px) {
  .img-container {
    width: 70px;
    height: 85px;
    border-radius: 10px;
    margin: 2rem;
  }
  img {
    width: 60px;
    height: 60px;
  }
  .title {
    font-size: 0.75rem;
  }
}
</style>
