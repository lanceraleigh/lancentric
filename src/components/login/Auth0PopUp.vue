<template>
  <div class="auth0">
    <div class="title">Create an Account</div>
    <div>to save your language learning progress</div>
    <div class="login-button" @click="login">Signup Free</div>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      this.$auth0.loginWithRedirect();
    },
  },
};
</script>
<style lang="scss" scoped>
.auth0 {
  z-index: 10;
  width: 40vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ddd;
  border-radius: 15px;
}
</style>
