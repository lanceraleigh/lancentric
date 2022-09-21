<template>
  <div class="about-container">
    <div class="text-container">
      <div class="title">
        <img src="../../assets/lance.png" class="lance" />
        <h1>{{ $lang.aboutMe }}</h1>
      </div>
      <p class="message">
        {{ $lang.aboutMeMessage }}
      </p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ $lang: "personalSiteCurrentLanguage" }),
  },
};
</script>
<style lang="scss" scoped>
.about-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: calc(100vh - 3.5rem);
  width: 100vw;
  z-index: 2;
}
.text-container {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 2rem;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: baseline;
}
.lance {
  height: 15vh;
  filter: grayscale(50%);
}
.message {
  width: 80%;
  font-size: 1.5rem;
  font-weight: 500;
}
// @media only screen and (max-width: 1100px) {
//   .about-container {
//   }
//   .text-container {
//     padding: 0.25rem;
//     text-shadow: 0 0 10px #000;
//   }
//   .lance {
//     height: 10vh;
//     filter: grayscale(60%);
//   }
// }
@media only screen and (max-width: 500px) {
  .title {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
  }
  .lance {
    height: 7.5vh;
  }
  .message {
    font-size: 1rem;
  }
}
</style>
