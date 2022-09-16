<template lang="">
  <nav class="landing-page">
    <div class="language-select nav-item">
      <select
        v-if="!landing"
        class="form-control"
        v-model="selected"
        @change="selectLanguageToLearn"
      >
        <option v-for="option in options" :value="option" :key="option">
          {{ capitalize(option) }}
        </option>
      </select>
      <img v-if="!!selected" :src="flagSelection" class="flag" />
    </div>
    <HomeTitle class="nav-item" :landing="landing" />
    <div v-if="optionsAndProfile" class="profile nav-item">Profile</div>
    <div v-if="portfolio">
      Lancentric Learning <span style="font-size: 0.75rem">*Experimental</span>
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
      options: ["spanish", "french", "portuguese"],
    };
  },
  computed: {
    ...mapGetters(["currentLanguageLessons", "currentLanguageName"]),
    flagSelection() {
      console.log(this.selected);
      return require(`../../assets/country-flags/png-48/${this.selected}.png`);
    },
    optionsAndProfile() {
      return this.$route.name === "Lancentric";
    },
    portfolio() {
      return this.$route.name === "Home";
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
nav.landing-page {
  background: #16212d;
  color: #fff;
  padding-bottom: 0;
}
</style>
