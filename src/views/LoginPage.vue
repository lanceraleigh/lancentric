<template>
  <div class="login-page">
    <StarBackground></StarBackground>
    <Auth0PopUp></Auth0PopUp>
  </div>
</template>
<script>
import Auth0PopUp from "../components/login/Auth0PopUp.vue";
import StarBackground from "../components/reusables/StarBackground.vue";
export default {
  name: "LoginPage",
  components: {
    Auth0PopUp,
    StarBackground,
  },
};
</script>
<style lang="scss" scoped>
.login-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>
