<template>
  <div class="custom-404">
    <StarBackground></StarBackground>
    <h1>404: Page Not Found</h1>
    <img src="../assets/sadearth.png" />
  </div>
</template>
<script>
import StarBackground from "../components/reusables/StarBackground.vue";
export default {
  name: "Custom404Page",
  components: {
    StarBackground,
  },
};
</script>
<style lang="scss" scoped>
.custom-404 {
  height: 100vh;
  width: 100vw;
  color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2.5rem;
  }
  img {
    width: 20rem;
  }
}
</style>
