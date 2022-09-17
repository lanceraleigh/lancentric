<template>
  <div class="contact-form">
    <form
      v-if="!submitted"
      :action="FORM_ENDPOINT"
      @submit="handleSubmit"
      method="POST"
      target="_blank"
    >
      <input
        class="contact-form-item"
        type="text"
        placeholder="Your name"
        name="name"
        required
      />
      <input
        class="contact-form-item"
        type="email"
        placeholder="Email"
        name="email"
        required
      />
      <textarea
        class="contact-form-item"
        placeholder="What would you like me to know?"
        name="message"
        cols="30"
        rows="15"
        required
      />
      <button class="contact-form-item button-submit" type="submit">
        Send me a message
      </button>
    </form>

    <div v-if="submitted">
      <h2>Thank you!</h2>
      <div>We'll be in touch soon.</div>
      <div class="return-to-submission button" @click="submitted = false">
        Go back to submission?
      </div>
      <div class="return-home button">Go home?</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data: () => ({
    submitted: false,
    FORM_ENDPOINT:
      "https://public.herotofu.com/v1/08b906d0-35c0-11ed-9de0-b73c4b901972",
  }),

  methods: {
    handleSubmit() {
      setTimeout(() => {
        this.submitted = true;
      }, 100);
    },
  },
};
</script>
<style lang="scss" scoped>
.contact-form {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  form {
    background: #ddd;
    padding: 1rem;
    width: 25rem;
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    border-radius: 10px;
    border: 1px solid #222;
  }
  .contact-form-item {
    resize: none;
    border-radius: 5px;
    font-family: sans-serif;
    font-size: 1.25rem;
    margin: 0.25rem;
    border: 1px solid #222;
  }
  .button-submit {
    color: #ddd;
  }
}
</style>
