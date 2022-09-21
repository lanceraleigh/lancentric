<template>
  <div class="contact">
    <StarBackground></StarBackground>
    <ContactForm></ContactForm>
    <MyContacts></MyContacts>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ContactForm from "../components/contact/ContactForm.vue";
import StarBackground from "../components/reusables/StarBackground.vue";
import MyContacts from "../components/contact/MyContacts.vue";
export default {
  name: "ContactView",
  components: {
    ContactForm,
    MyContacts,
    StarBackground,
  },
  computed: {
    ...mapGetters({ $lang: "personalSiteCurrentLanguage" }),
  },
  methods: {
    capitalize(stringValue) {
      return stringValue.charAt(0).toUpperCase() + stringValue.slice(1);
    },
    async selectLanguage(language) {
      await this.$router.push("/home");
      this.$store.commit("setCurrentLanguageLessons", language);
    },
  },
};
</script>
<style lang="scss" scoped>
.contact {
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.img-container {
  width: 260px;
  height: 230px;
  border-radius: 15px;
  margin: 3rem;
  background-color: #444;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
  position: absolute;
  border-radius: 20% 20% 0 0;
  top: -30px;
}
.title {
  position: absolute;
  bottom: 0.5rem;
  color: aliceblue;
}
.img-container:hover {
  cursor: pointer;
  transform: scale(1.01);
  box-shadow: 1px 3px 5px #243548;
}
</style>
