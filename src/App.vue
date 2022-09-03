<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div class="logo">Lancentric</div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #361d70;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
}

nav {
  height: 4rem;
  background: rgba($color: #e6ccff, $alpha: 9);
  margin: 0;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.logo {
  border-left: 100px solid #e6ccff;
  border-right: 100px solid #e6ccff;
}
</style>
