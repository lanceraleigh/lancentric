<template>
  <NavBar />
  <router-view />
</template>
<script>
import NavBar from "./components/NavBar/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@import "./assets/globalStyles.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  background: #fff;
  color: #2c3e50;
  margin: 0;
  padding: 1rem;
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
}
</style>
