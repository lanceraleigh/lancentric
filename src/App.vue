<template>
  <div id="lance-raleigh-website">
    <!-- <StarBackground></StarBackground> -->
    <NavBar :landing="landing" class="navbar-z" />
    <router-view />
  </div>
</template>
<script>
import NavBar from "./components/Home/NavBar.vue";
export default {
  name: "LancentricLearning",
  components: {
    NavBar,
  },
  async mounted() {
    // eslint-disable-next-line
    console.log(
      "Welcome to the best dev portfolio in the world... according to my mom at least"
    );
    // eslint-disable-next-line
    console.log(
      "If you've gotten this far, take some time to shoot me a message in the contact section! I look forward to hearing from you! 😀"
    );
    await this.$store.commit("initState");
  },
  computed: {
    landing() {
      return this.$route.name === "LandingPage";
    },
  },
};
</script>

<style lang="scss">
@import "./assets/globalStyles.css";
#lance-raleigh-website {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  color: #2c3e50;
  margin: 0;
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
}
.navbar-z {
  position: absolute;
  z-index: 4;
}
.modal-open {
  overflow: hidden;
}
</style>
