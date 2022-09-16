<template>
  <div class="side-stats">
    <WeeklyPoints />
  </div>
</template>
<script>
import WeeklyPoints from "./WeeklyPoints.vue";
export default {
  components: {
    WeeklyPoints,
  },
};
</script>
<style>
.side-stats {
  display: flex;
  flex-direction: column;
}
</style>
