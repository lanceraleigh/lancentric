<template>
  <div class="contact-me-prompt-popup">
    <div class="close" @click="$emit('close')">&#10006;</div>
    <div class="message">
      Notice anything missing or broken? I can fix that &#129312;
    </div>
    <div class="link">
      <router-link to="/contact">Send a message &#8594;</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactMePrompt",
};
</script>
<style lang="scss">
.contact-me-prompt-popup {
  background: #bbb;
  height: 10rem;
  width: 20rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  z-index: 5;
  padding: 2rem;
  .close {
    position: absolute;
    top: 0;
    right: 0.25rem;
  }
  .close:hover {
    cursor: pointer;
  }
  .link {
    color: #222;
    margin: 1rem;
    text-decoration: none;
    font-style: none;
  }
}
</style>
