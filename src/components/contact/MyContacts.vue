<template>
  <div class="my-contacts">
    <div class="contact-items">
      <div class="contact-item">Email: LanceEldenRaleigh@gmail.com</div>
      <div class="social-links">
        <div class="social-link">LI</div>
        <div class="social-link">GH</div>
        <div class="social-link">CP</div>
        <div class="social-link">YT</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyContacts",
};
</script>
<style lang="scss">
.contact-items {
  display: flex;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: #ddd;
}
.social-links {
  display: flex;
}
.social-link {
  background: #444;
  text-align: center;
  height: 1.5rem;
  width: 1.5rem;
  margin: 0 1rem;
  border-radius: 5px;
}
</style>
