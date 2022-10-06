<template>
  <div class="my-contacts">
    <div class="contact-items">
      <div class="contact-item">
        <div>Email:</div>
        <div>LanceEldenRaleigh@gmail.com</div>
      </div>
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
<style lang="scss" scoped>
.contact-items {
  display: flex;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: #ddd;
}
.contact-item {
  display: flex;
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
@media only screen and (max-width: 500px) {
  .contact-items {
    left: 0.5rem;
    bottom: 0.5rem;
  }
  .contact-item {
    flex-direction: column;
  }
  .social-link {
    margin: 0 0.5rem;
    height: 1rem;
    width: 1rem;
    font-size: 0.75rem;
  }
}
@media only screen and (max-width: 350px) {
  .contact-item {
    font-size: 0.75rem;
  }
  .social-link {
    margin: 0 0.25rem;
    height: 1rem;
    width: 1rem;
    font-size: 0.5rem;
  }
}
</style>
