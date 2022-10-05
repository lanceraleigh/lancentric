<template>
  <div class="profile-view">
    <StarBackground></StarBackground>
    <div class="profile-info">
      <h2>Your Profile</h2>
      <img :src="user.picture" />
      <div class="info-item-title">
        Name: <span class="info-item-value">{{ user.nickname }}</span>
      </div>
      <div class="info-item-title">
        Email: <span class="info-item-value">{{ user.email }}</span>
      </div>
      <div class="info-item-title">
        Member since:
        <!-- <span class="info-item-value">{{
          user.created_at.toDateString() || "unknown"
        }}</span> -->
      </div>
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
      this.$auth0.logout({ returnTo: "https://lanceraleigh.com/login" });
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
  overflow: hidden;
  box-shadow: inset 1px 1px 10px #444;
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
.info-item-title {
  color: #222;
  font-weight: bold;
}
.info-item-value {
  color: #444;
}
</style>
