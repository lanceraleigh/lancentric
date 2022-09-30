<template>
  <div class="profile-view">
    <StarBackground></StarBackground>
    <div class="profile-info">
      <h2>User Profile</h2>
      <pre>
        <code>{{ user }}</code>
      </pre>
      <button @click="logout">Sign Out</button>
    </div>
  </div>
</template>
<script>
import StarBackground from "../components/reusables/StarBackground.vue";

export default {
  name: "ProfileView",
  components: {
    StarBackground,
  },
  data() {
    return {
      user: this.$auth0.user,
    };
  },
  methods: {
    logout() {
      this.$auth0.logout({ returnTo: window.location.origin });
    },
  },
};
</script>
<style lang="scss" scoped>
.profile-view {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profile-info {
  width: 50vw;
  height: 50vh;
  background: #ddd;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
}
</style>
