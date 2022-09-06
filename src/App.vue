<template>
  <nav>
    <div class="nav-links">
      <button @click="showDropdown = !showDropdown" class="dropdown-menu-title">
        Language <i class="arrow down"></i>
      </button>
      <div class="language-options" v-if="showDropdown">
        <router-link to="/">Spanish</router-link>
        <router-link to="/about">Portuguese</router-link>
      </div>
    </div>
    <div>Lancentric</div>
    <div>Your Profile</div>
  </nav>
  <router-view />
</template>
<script>
export default {
  data() {
    return {
      showDropdown: false,
    };
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
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
}

nav {
  height: 1.5rem;
  background: #fff;
  margin: 0;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  a {
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>
