<template lang="">
  <nav>
    <div class="language-select nav-item">
      <select
        class="form-control"
        v-model="selected"
        @change="selectLanguageToLearn"
      >
        <option>Choose Language</option>
        <option v-for="option in options" :value="option" :key="option">
          {{ capitalize(option) }}
        </option>
      </select>
      <img :src="flagSelection" class="flag" />
    </div>
    <HomeTitle class="nav-item" />
    <div class="profile nav-item">Profile</div>
  </nav>
</template>
<script>
import HomeTitle from "../Home/HomeTitle.vue";
export default {
  name: "NavBar",
  components: {
    HomeTitle,
  },
  data() {
    return {
      selected: "spanish",
      options: ["spanish", "french", "portuguese"],
    };
  },
  computed: {
    flagSelection() {
      return require(`../../assets/country-flags/png-48/${this.selected}.png`);
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
  padding: 1rem;
  background: #fff;
  margin: 0;
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  border-bottom: 1px solid #444;
  .nav-item {
    width: 10rem;
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
</style>
