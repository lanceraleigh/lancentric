<template>
  <div class="home-title">
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
      setTimeout(() => {
        this.$store.dispatch(
          "SET_LETS_LEARN_PHRASE",
          this.letsLearnPhraseIndex
        );
        if (this.letsLearnPhraseIndex === 2) {
          this.$store.dispatch("SET_LETS_LEARN_PHRASE_INDEX", 0);
        } else {
          this.$store.dispatch(
            "SET_LETS_LEARN_PHRASE_INDEX",
            this.letsLearnPhraseIndex + 1
          );
        }
        this.showPhrase = true;
      }, 1000);
    },
  },
  mounted() {
    setInterval(this.shuffleLetsLearnOptions, 3000);
  },
};
</script>
<style>
.home-title {
  width: 100%;
  height: 5rem;
  box-sizing: content-box;
  position: relative;
  background: #361d70;
  color: #444;
  font-family: cursive, serif;
  letter-spacing: 0.2em;
  text-align: center;
  text-transform: uppercase;
  border-radius: 0 0 150px 150px;
}
.lets-learn-phrase {
  font-size: 3em;
  font-weight: bold;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
