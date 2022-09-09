<template>
  <div class="confirmation-dialog-container">
    <div class="confirmation-dialog">
      <div>{{ message }}</div>
      <div class="options-container">
        <div class="button" @click="$emit('no')">No</div>
        <div class="button" @click="$emit('yes')">Yes</div>
      </div>
    </div>
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
  height: 35%;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 15px;
}
.options-container {
  display: flex;
}
button {
  margin: 0.5rem;
  background: var(--blue-button);
  border-radius: 10px;
}
</style>
