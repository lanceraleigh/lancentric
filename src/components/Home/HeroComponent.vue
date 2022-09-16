<template lang="">
  <div class="hero-container">
    <div class="text-container">
      <h1>Lance Raleigh</h1>
      <h3>Software Developer and Polyglot</h3>
      <p>
        Software for everyone through internationalization and accessibilty.
      </p>
      <!-- I also give mediocre one liners, free of
        charge &#128588;&#127997; &#128521; -->
    </div>
    <div class="img-container">
      <!-- <div class="circle"></div> -->
      <!-- <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        class="svg-class"
      >
        <path
          fill="#24044A"
          d="M39.8,-71.6C49.1,-63.5,52.6,-47.9,51.3,-34.8C49.9,-21.6,43.8,-10.8,42.3,-0.9C40.8,9,43.9,18.1,43.3,28C42.7,37.8,38.5,48.6,30.7,53.9C22.8,59.2,11.4,59.1,0.3,58.5C-10.8,58,-21.6,57,-32.5,53.6C-43.5,50.1,-54.6,44,-61.7,34.6C-68.8,25.3,-71.9,12.6,-70.8,0.7C-69.7,-11.3,-64.2,-22.6,-58.7,-34.6C-53.1,-46.6,-47.3,-59.3,-37.5,-67.2C-27.7,-75,-13.9,-78.1,0.7,-79.3C15.2,-80.4,30.4,-79.7,39.8,-71.6Z"
          transform="translate(100 100)"
        />
      </svg> -->
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
