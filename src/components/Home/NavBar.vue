<template lang="">
  <nav class="landing-page">
    <div class="language-select nav-item">
      <select
        v-if="!landing && !personalSite"
        class="form-control"
        v-model="selected"
        @change="selectLanguageToLearn"
      >
        <option v-for="option in options" :value="option" :key="option">
          {{ capitalize(option) }}
        </option>
      </select>
      <select
        v-if="personalSite"
        class="personal-site"
        v-model="selected"
        @change="
          selectSiteLanguage();
          selectLanguageToLearn();
        "
      >
        <option v-for="option in options" :value="option" :key="option">
          {{ capitalize(option) }}
        </option>
      </select>
      <img v-if="!!selected" :src="flagSelection" class="flag" />
    </div>
    <HomeTitle class="nav-item" :landing="landing" />
    <div v-if="optionsAndProfile" class="profile nav-item">Profile</div>
    <div v-if="!optionsAndProfile" @click="letsGetLearning">
      <span class="lancentric-link">Lancentric Learning</span
      ><span style="font-size: 0.75rem; padding-bottom: 0.25rem"> *Beta</span>
    </div>
  </nav>
</template>
<script>
import HomeTitle from "../Home/HomeTitle.vue";
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  components: {
    HomeTitle,
  },
  props: {
    landing: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      selected: this.currentLanguageName,
      options: ["english", "spanish", "french", "portuguese"],
    };
  },
  computed: {
    ...mapGetters(["currentLanguageLessons", "currentLanguageName"]),
    flagSelection() {
      return require(`../../assets/country-flags/png-48/${this.selected}.png`);
    },
    optionsAndProfile() {
      return this.$route.name === "Lancentric";
    },
    portfolio() {
      return this.$route.name === "Home";
    },
    personalSite() {
      return (
        this.$route.name === "Home" ||
        this.$route.name === "About" ||
        this.$route.name === "Projects" ||
        this.$route.name === "Contact"
      );
    },
  },
  watch: {
    currentLanguageName(newVal) {
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
      this.$router.push("LandingPage");
    },
  },
};
</script>
<style lang="scss">
nav {
  width: 100vw;
  padding-top: 1rem;
  background: #fff;
  margin: 0;
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  border-bottom: 1px solid #444;
  .nav-item {
    width: 10rem;
    justify-content: center;
    align-items: center;
  }
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

  .language-select {
    display: flex;
    align-items: center;
    select {
      height: 1.5rem;
    }
    .flag {
      margin: 0 1rem;
      height: 2rem;
      border-radius: 10px;
    }
  }
}

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
