<template lang="">
  <div class="hero-container">
    <div class="text-container">
      <h1>About Me</h1>
      <h3>Software Developer</h3>
      <p>
        Self-taught early career software engineer with experience in full stack
        development and a specialty in the front end. Passionate about i18n and
        accessibility being used to bring modern software to people around the
        world of all walks of life.
      </p>
    </div>
    <div class="img-container">
      <img src="../../assets/lance.png" class="lance" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.hero-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: aliceblue;
  height: 75vh;
  width: 100vw;
  z-index: 2;
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
@media only screen and (max-width: 1200px) {
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
  // .svg-class {
  //   height: 45vh;
  //   width: 45vh;
  //   position: absolute;
  //   left: -8rem;
  //   bottom: -5rem;
  // }
  .text-container {
    margin-top: 6rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
@media only screen and (max-width: 550px) {
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
