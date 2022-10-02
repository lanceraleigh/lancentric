<template>
  <div class="dialog-container">
    <div v-if="type === 'confirmation'" class="dialog">
      <div>{{ message }}</div>
      <div class="options-container">
        <div class="button no" @click="$emit('no')">No</div>
        <div class="button yes" @click="$emit('yes')">Yes</div>
      </div>
    </div>
    <div
      v-if="type === 'answer'"
      class="dialog"
      :class="{ 'right-answer': answerRight, 'wrong-answer': !answerRight }"
    >
      <div>{{ message }}</div>
      <div class="options-container">
        <div
          v-if="
            message ===
            `Oops, please make sure to input an answer before submitting`
          "
          class="button no"
          @click="$emit('no')"
        >
          Back
        </div>
        <div v-else class="button yes" @click="$emit('yes')">Next</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
    answerRight: {
      type: Boolean,
    },
  },
};
</script>
<style lang="scss" scoped>
.dialog-container {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog {
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
.dialog.right-answer {
  background: green;
}
.dialog.wrong-answer {
  background: red;
}
.options-container {
  width: 30%;
  display: flex;
  justify-content: space-around;
}
.button {
  margin: 0.5rem;
  background: var(--blue-button);
  color: #fff;
  border-radius: 10px;
  padding: 0 0.5rem;
}
.button:hover {
  cursor: pointer;
  transform: scale(0.95);
}
.no {
  background: gray;
}
@media only screen and (max-width: 1100px) {
  .dialog {
    height: 30%;
    width: 50%;
  }
}
</style>
