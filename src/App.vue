<template>
  <div id="lance-raleigh-website">
    <NavBar :landing="landing" class="navbar-z" />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
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
  background: #fff;
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
// Route Transitions

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// .slide-in-from-right-enter-active,
// .slide-in-from-right-leave-active {
//   transition: all 0.75s ease-out;
// }
// .slide-in-from-right-enter-to {
//   position: absolute;
//   right: 0;
// }
// .slide-in-from-right-enter-from {
//   position: absolute;
//   right: -100%;
// }
// .slide-in-from-right-leave-to {
//   position: absolute;
//   left: -100%;
// }
// .slide-in-from-right-leave-from {
//   position: absolute;
//   left: 0;
// }
</style>
