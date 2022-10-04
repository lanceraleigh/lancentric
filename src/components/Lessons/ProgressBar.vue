<template>
  <div class="lesson-progress-bar">
    <div class="lesson-progress" :style="{ width: `${progress}%` }"></div>
  </div>
</template>
<script>
export default {
  props: {
    lessonId: {
      type: String,
    },
  },
  data() {
    return {
      progress:
        JSON.parse(
          window.localStorage.getItem(
            `${this.lessonId}Progress${this.$auth0.user.user_id}`
          )
        ) || 0,
    };
  },
};
</script>
<style>
.lesson-progress-bar {
  height: 0.5rem;
  background: #ddd;
  width: 90%;
  margin: 5%;
  border-radius: 5px;
}
.lesson-progress {
  height: 0.5rem;
  background: rgb(2, 193, 50);
  border-radius: 5px;
}
</style>
