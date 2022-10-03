<template>
  <div id="lance-raleigh-website">
    <NavBar :landing="landing" class="navbar-z" />
    <div
      v-show="!contactModalIsOpen"
      class="comment-icon-container"
      @click="openContactModal"
    >
      <img src="./assets/comment/icons8-comments-96.png" class="comment-icon" />
    </div>
    <ContactModal
      @close="contactModalIsOpen = false"
      v-if="contactModalIsOpen"
      class="contact-modal"
    ></ContactModal>
    <router-view />
  </div>
</template>
<script>
import NavBar from "./components/Home/NavBar.vue";
import ContactModal from "./components/contact/ContactModal.vue";
export default {
  name: "LancentricLearning",
  components: {
    NavBar,
    ContactModal,
  },
  data() {
    return {
      contactModalIsOpen: false,
    };
  },
  async mounted() {
    // eslint-disable-next-line
    console.log(
      "Welcome to the best dev portfolio in the world... according to my mom at least"
    );
    // eslint-disable-next-line
    console.log(
      "If you've gotten this far, take some time to shoot me a message in the contact section! I look forward to hearing from you! 😀"
    );
    await this.$store.commit("initState");
  },
  computed: {
    landing() {
      return this.$route.name === "LandingPage";
    },
  },
  methods: {
    openContactModal() {
      this.contactModalIsOpen = true;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/globalStyles.css";
#lance-raleigh-website {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  color: #2c3e50;
  margin: 0;
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
}
.navbar-z {
  position: absolute;
  z-index: 20;
}
.modal-open {
  overflow: hidden;
}
.contact-modal {
  z-index: 20;
  position: absolute;
  top: 0;
  left: 0;
}
.comment-icon-container {
  background: rgba(252, 250, 220, 0.839);
  border-radius: 50%;
  padding: 0.1rem;
  z-index: 15;
  position: fixed;
  bottom: 0.25rem;
  right: 0.25rem;
}
.comment-icon {
  height: 5vh;
  width: 5vh;
  margin-bottom: -0.25rem;
  // -webkit-filter: grayscale(1) invert(1);
  // filter: grayscale(1) invert(1);
}
.comment-icon-container:hover {
  cursor: pointer;
  transform: scale(0.95);
}
</style>
