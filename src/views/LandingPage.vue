<template>
  <div class="landing">
    <div
      v-for="index in 1000"
      :key="index"
      class="star"
      :style="{
        height: Math.random() * 3 + 'px',
        width: Math.random() * 3 + 'px',
        top: Math.random() * 75 + 'rem',
        left: Math.random() * 300 + 'rem',
      }"
    ></div>
    <div
      v-for="img in flagArray"
      :key="img.source"
      class="img-container"
      @click="selectLanguage(img.name)"
    >
      <img :src="img.source" class="language-image" />
      <div class="title">{{ capitalize(img.name) }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LandingPage",
  data() {
    return {
      flagArray: [
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
  methods: {
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    async selectLanguage(language) {
      await this.$router.push("/home");
      console.log(language);
      this.$store.commit("setCurrentLanguageLessons", language);
    },
  },
};
</script>
<style scoped>
.landing {
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
.star {
  background: #ddd;
  border-radius: 50%;
  position: absolute;
  animation: travel 120s infinite;
}
@keyframes travel {
  0% {
    transform: translate(0);
  }
  50% {
    transform: translate(-20rem, -10rem);
  }
  100% {
    transform: translate(0);
  }
}
</style>
