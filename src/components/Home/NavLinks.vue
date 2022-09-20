<template>
  <div class="footer-nav">
    <div class="nav-item home-link">
      <router-link to="/" exact>{{ $lang.home }}</router-link>
    </div>
    <div class="nav-item projects">
      <router-link to="/projects">{{ $lang.projects }}</router-link>
    </div>
    <div class="nav-item about-me">
      <router-link to="/about">{{ $lang.about }}</router-link>
    </div>
    <div class="nav-item contact">
      <router-link to="/contact">{{ $lang.contact }}</router-link>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "FootNav",
  computed: {
    ...mapGetters({ $lang: "personalSiteCurrentLanguage" }),
  },
};
</script>
<style lang="scss">
.footer-nav {
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #ddd;
    font-weight: bold;
    margin: 0 0.5rem;
  }
  #bottom-left-arrow {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
  #bottom-middle-arrow {
    transform: rotate(50deg);
  }
  .nav-item {
    padding: 0.5rem;
    font-size: 1.5rem;
  }
  .nav-item:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  .router-link-active,
  .router-link-exact-active {
    text-decoration: underline;
    text-decoration-color: rgb(150, 2, 255);
  }
}
@media only screen and (max-width: 550px) {
  .footer-nav {
    position: absolute;
    width: 100vw;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    a {
      color: #ddd;
      font-weight: bold;
      margin: 0 0.5rem;
    }
    #bottom-left-arrow,
    #bottom-middle-arrow,
    #bottom-right-arrow {
      display: none;
    }
    .nav-item {
      padding: 0.5rem;
      font-size: 1rem;
    }
    .nav-item:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
}
</style>
