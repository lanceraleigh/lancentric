<template lang="">
  <div class="hero-container">
    <div class="text-container">
      <HomeTitle></HomeTitle>
      <h1
        style="
          text-decoration: underline;
          text-decoration-color: rgb(150, 2, 255);
        "
      >
        Lance Raleigh
      </h1>
      <!-- <span v-if="currentTitleLanguage === 3">です</span> -->
      <h3>{{ $lang.softwareDeveloper }}</h3>
      <p>
        {{ $lang.heroPhrase }}
      </p>
    </div>
    <div class="img-container">
      <img src="../../assets/lance.png" class="lance" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HomeTitle from "./HomeTitle.vue";
export default {
  components: {
    HomeTitle,
  },
  computed: {
    ...mapGetters({
      $lang: "personalSiteCurrentLanguage",
      currentTitleLanguage: "letsLearnPhraseIndex",
    }),
  },
};
</script>
<style lang="scss" scoped>
.hero-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: aliceblue;
  height: 75vh;
  width: 100vw;
  z-index: 2;
  overflow: hidden;
}
.text-container {
  padding: 5vw;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.text-container h1 {
  font-size: 5rem;
  padding: 0.25rem;
  text-shadow: 0 0 10px #000;
}
.text-container h3 {
  font-size: 1.75rem;
  padding-left: 2rem;
  padding-bottom: 0.5rem;
}
.text-container p {
  width: 60%;
  padding-left: 3rem;
  font-size: 1.25rem;
}
.img-container {
  position: relative;
  width: 40%;
}
.lance {
  height: 50vh;
  filter: grayscale(50%);
}
.svg-class {
  height: 75vh;
  width: 75vh;
  position: absolute;
  left: -10rem;
  bottom: -7rem;
}
@media only screen and (max-width: 1100px) {
  // looks good for now
  .hero-container {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .text-container {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .text-container h1,
  .text-container h3,
  .text-container p {
    padding: 0;
  }
}
@media only screen and (max-width: 450px) {
}
</style>
