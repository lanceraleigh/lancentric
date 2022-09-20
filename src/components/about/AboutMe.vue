<template lang="">
  <div class="about-container">
    <div class="text-container">
      <div class="title">
        <img src="../../assets/lance.png" class="lance" />
        <h1>{{ $lang.aboutMe }}</h1>
      </div>
      <p>
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
<style lang="scss">
.about-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: aliceblue;
  height: 75vh;
  width: 100vw;
  z-index: 2;
}

.text-container {
  margin-top: 6rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-container h1 {
  font-size: 4rem;
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
  font-size: 1.5rem;
}
.img-container {
  position: relative;
  width: 40%;
}
.lance {
  height: 15vh;
  filter: grayscale(50%);
}
@media only screen and (max-width: 1100px) {
  .hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: aliceblue;
    height: 75vh;
    width: 100vw;
    z-index: 2;
  }
  .img-container {
    position: relative;
    width: 30%;
  }
  .lance {
    height: 10vh;
    filter: grayscale(60%);
  }
}
@media only screen and (max-width: 500px) {
  .hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: aliceblue;
    height: 75vh;
    width: 100vw;
    z-index: 2;
  }
  .img-container {
    position: relative;
    width: 30%;
  }
  .lance {
    height: 30vh;
    filter: grayscale(60%);
    margin-top: 6rem;
  }
  .svg-class {
    height: 45vh;
    width: 45vh;
    position: absolute;
    left: -6.5rem;
    bottom: -3.5rem;
  }
  .text-container {
    margin-top: 6rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
