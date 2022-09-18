<template>
  <div
    v-for="index in 2000"
    :key="index"
    class="star"
    :style="{
      height: Math.random() * 3 + 'px',
      width: Math.random() * 3 + 'px',
      top: Math.random() * 150 + 'rem',
      left: Math.random() * 500 + 'rem',
    }"
  ></div>
</template>
<script>
export default {
  name: "StarBackground",
};
</script>
<style lang="scss" scoped>
.star {
  background: #ddd;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  animation: travel 120s infinite;
}
@keyframes travel {
  0% {
    transform: translate(0);
  }
  50% {
    transform: translate(-20rem, -10rem);
  }
  100% {
    transform: translate(0);
  }
}
</style>
