<template>
  <div class="lesson-progress-bar">
    <div class="lesson-progress" :style="{ width: progress }"></div>
  </div>
</template>
<script>
export default {
  props: {
    progress: {
      type: String,
    },
  },
};
</script>
<style>
.lesson-progress-bar {
  height: 0.5rem;
  background: #fff;
  width: 90%;
  margin: 5%;
  border-radius: 5px;
}
.lesson-progress {
  height: 0.5rem;
  background: #62dcf5;
  border-radius: 5px;
}
</style>
