<template>
  <div class="nav-links">
    <div v-if="viewPortWidth < 1100" class="hamburger">
      <label v-if="viewPortWidth < 1100" for="check">
        <input
          v-if="viewPortWidth < 1100"
          type="checkbox"
          v-model="showMenu"
          id="check"
        />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <div
      v-show="viewPortWidth >= 1100 || showMenu"
      class="link-container"
      :class="{ 'learning-app': lancentric }"
    >
      <div
        v-if="!lancentric"
        class="nav-item personal-site-link home-link"
        @click="showMenu = false"
      >
        <router-link to="/" exact>{{ $lang.home }}</router-link>
      </div>
      <div
        v-if="!lancentric"
        class="nav-item personal-site-link projects"
        @click="showMenu = false"
      >
        <router-link to="/projects">{{ $lang.projects }}</router-link>
      </div>
      <div
        v-if="!lancentric"
        class="nav-item personal-site-link about-me"
        @click="showMenu = false"
      >
        <router-link to="/about">{{ $lang.about }}</router-link>
      </div>
      <div
        v-if="!lancentric"
        class="nav-item personal-site-link contact"
        @click="showMenu = false"
      >
        <router-link to="/contact">{{ $lang.contact }}</router-link>
      </div>
      <div
        v-if="!!lancentric && $route.path !== '/login'"
        class="profile nav-item"
        @click="showMenu = false"
      >
        <router-link to="/lancentric/profile">{{ $lang.profile }}</router-link>
      </div>
      <!-- Colored Link -->
      <div
        v-if="!lancentric"
        class="colored-link-button nav-item"
        @click="
          letsGetLearning();
          showMenu = false;
        "
      >
        <span class="lancentric-link"
          >Lancentric<span class="mobile-shortening"> Learning</span></span
        >
        <!-- <span class="beta"> *Beta</span> -->
      </div>
      <div
        v-if="!!lancentric"
        class="nav-item colored-link-button"
        @click="
          $router.push('/');
          showMenu = false;
        "
      >
        <span class="lancentric-link"
          ><span class="mobile-shortening">Back to </span>Portfolio</span
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "NavLinks",
  mounted() {
    this.viewPortWidth = window.innerWidth;
  },
  data() {
    return {
      viewPortWidth: 1200,
      showMenu: false,
    };
  },
  computed: {
    ...mapGetters({ $lang: "personalSiteCurrentLanguage" }),
    lancentric() {
      return (
        this.$route.path === "/login" ||
        this.$route.path === "/lancentric" ||
        this.$route.path === "/lancentric/letslearn" ||
        this.$route.path === "/lancentric/profile"
      );
    },
    personalSite() {
      return (
        this.$route.name === "Home" ||
        this.$route.name === "About" ||
        this.$route.name === "Projects" ||
        this.$route.name === "Contact" ||
        this.$route.name === "PageNotFound"
      );
    },
  },
  watch: {
    personalSiteCurrentLanguageName(newVal) {
      this.selected = newVal;
    },
  },
  methods: {
    beingBuilt() {
      alert("This feature is currently being built, please check back later");
    },
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    selectLanguageToLearn() {
      this.$store.commit("setCurrentLanguageLessons", this.selected);
    },
    selectSiteLanguage() {
      this.$store.commit("setPersonalSiteCurrentLanguage", this.selected);
    },
    letsGetLearning() {
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="scss" scoped>
.nav-links {
  display: flex;
  justify-content: space-between;
}
.link-container {
  display: flex;
  justify-content: space-between;
}
a {
  text-decoration: none;
  color: #ddd;
  font-weight: bold;
  margin: 0 0.5rem;
}
label {
  display: none;
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
.lancentric-link {
  font-size: 1.25rem;
  height: 1.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  box-shadow: 2px 2px #000;
  background: linear-gradient(
    124deg,
    #ff240059,
    #e81d1d59,
    #e8b71d59,
    #e3e81d59,
    #1de84059,
    #1ddde859,
    #2b1de859,
    #dd00f359,
    #dd00f359
  );
  background-size: 500% 500%;
  -webkit-animation: rainbow 18s ease infinite;
  -z-animation: rainbow 18s ease infinite;
  -o-animation: rainbow 18s ease infinite;
  animation: rainbow 18s ease infinite;
}
.lancentric-link:hover {
  cursor: pointer;
  transform: scale(1.2);
}
.beta {
  font-size: 0.75rem;
  padding-bottom: 0.25rem;
}
// media query
@media only screen and (max-width: 1100px) {
  .link-container {
    position: absolute;
    width: 100vw;
    height: 30vh;
    left: 0;
    background: #444;
    top: 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  a {
    color: #ddd;
    font-weight: bold;
    margin: 0 0.5rem;
  }
  label {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 2rem;
    cursor: pointer;
  }

  label span {
    background: #fff;
    border-radius: 10px;
    height: 0.2rem;
    margin: 0.2rem 0;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }

  span:nth-of-type(1) {
    width: 50%;
  }

  span:nth-of-type(2) {
    width: 100%;
  }

  span:nth-of-type(3) {
    width: 75%;
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]:checked ~ span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotatez(45deg) translate(0.23rem, 0px);
  }

  input[type="checkbox"]:checked ~ span:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg);
  }

  input[type="checkbox"]:checked ~ span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translate(0.85rem, -0.25rem) rotatez(45deg);
  }

  .nav-item {
    padding: 0.5rem;
    font-size: 1rem;
    border-bottom: 1px solid #aaa;
  }
  .nav-item:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  .colored-link-button {
    margin-right: 0;
    border: none;
  }
  .hide-burger-menu {
    display: none;
  }

  .link-container.learning-app {
    width: 100vw;
    height: 15vh;
  }
}
// Media query
@media only screen and (max-width: 400px) {
  .link-container {
    height: 75vh;
  }
  .link-container.learning-app {
    height: 20vh;
  }
}
</style>
