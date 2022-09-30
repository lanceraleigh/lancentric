<template>
  <div>
    <div class="user-info">
      <h2>User Profile</h2>
      <button @click="login">Log in</button>
      <pre v-if="isAuthenticated">
        <code>{{ user }}</code>
      </pre>
    </div>
    <button @click="logout">Sign Out</button>
  </div>
</template>
<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  setup() {
    const { logout, user, isAuthenticated } = useAuth0();

    return {
      logout: () => {
        logout({ returnTo: window.location.origin });
      },
      user,
      isAuthenticated,
    };
  },
};
</script>
<style lang="scss"></style>
