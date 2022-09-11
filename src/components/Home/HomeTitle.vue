<template>
  <div class="home-title" :class="{ 'landing-page': landing }">
    <transition name="slide-fade">
      <div class="lets-learn-phrase" v-if="showPhrase">
        {{ letsLearnPhrase }}
      </div>
    </transition>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "HomeTitle",
  props: {
    landing: {
      type: Boolean,
    },
  },
  data() {
    return {
      showPhrase: true,
    };
  },
  computed: {
    ...mapGetters(["letsLearnPhrase", "letsLearnPhraseIndex"]),
  },
  methods: {
    shuffleLetsLearnOptions() {
      this.showPhrase = false;
      this.$store.dispatch("SET_LETS_LEARN_PHRASE", this.letsLearnPhraseIndex);
      if (this.letsLearnPhraseIndex === 8) {
        this.$store.dispatch("SET_LETS_LEARN_PHRASE_INDEX", 0);
      } else {
        this.$store.dispatch(
          "SET_LETS_LEARN_PHRASE_INDEX",
          this.letsLearnPhraseIndex + 1
        );
      }
      setTimeout(() => {
        this.showPhrase = true;
      }, 1000);
      setTimeout(this.shuffleLetsLearnOptions, 3000);
    },
  },
  mounted() {
    setTimeout(this.shuffleLetsLearnOptions, 3000);
  },
};
</script>
<style>
.home-title {
  height: 3rem;
  box-sizing: content-box;
  position: relative;
  color: #444;
  font-family: serif;
  font-style: italic;
  letter-spacing: 0.3em;
  text-align: center;
  text-transform: uppercase;
}
.home-title.landing-page {
  color: aliceblue;
}
.lets-learn-phrase {
  font-size: 1.5em;
  font-weight: 100;
}
.slide-fade-enter-active {
  transition: all 1s ease-out;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
