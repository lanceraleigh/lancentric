<template>
  <div v-if="!mobileNavigator" class="star-container">
    <div
      v-for="index in 100"
      :key="index"
      class="star"
      :style="{
        height: Math.random() * 3 + 'px',
        width: Math.random() * 3 + 'px',
        top: Math.random() * screenHeight + 'vh',
        left: Math.random() * 100 + 'vw',
      }"
    ></div>
  </div>
</template>
<script>
export default {
  name: "StarBackground",
  props: {
    screenHeight: {
      type: Number,
      default: 100,
    },
  },
  computed: {
    mobileNavigator() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.star-container {
  overflow: hidden;
}
.star {
  background: #ddd;
  border-radius: 50%;
  position: absolute;
  overflow: hidden;
  z-index: 1;
  // animation: travel 120s infinite;
}
// @keyframes travel {
//   0% {
//     transform: translate(0);
//   }
//   50% {
//     transform: translate(-20rem, -10rem);
//   }
//   100% {
//     transform: translate(0);
//   }
// }
</style>
