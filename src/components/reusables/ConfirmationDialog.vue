<template>
  <div class="confirmation-dialog-container">
    <div class="confirmation-dialog">
      {{ message }}
    </div>
    <div @click="$emit('no')">No</div>
    <div @click="$emit('yes')">Yes</div>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
    },
  },
};
</script>
<style>
.confirmation-dialog-container {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.confirmation-dialog {
  background: #fff;
  height: 20%;
  width: 20%;
}
</style>
