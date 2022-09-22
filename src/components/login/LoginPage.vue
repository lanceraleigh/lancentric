<template>
  <div>
    <Auth0PopUp></Auth0PopUp>
  </div>
</template>
<script>
import Auth0PopUp from "../login/Auth0PopUp.vue";
export default {
  name: "LoginPage",
  components: {
    Auth0PopUp,
  },
};
</script>
<style lang="scss"></style>
