<template>
  <div class="weekly-points">
    This week you have earned {{ experiencePoints }} XP
  </div>
</template>
<script>
export default {
  data() {
    return {
      experiencePoints: 453,
    };
  },
};
</script>
<style>
.weekly-points {
  height: 10rem;
  width: 10rem;
  border: 1px solid #444;
  border-radius: 15px;
}
</style>
