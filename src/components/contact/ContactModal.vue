<template>
  <div class="contact-form">
    <form
      v-if="!submitted"
      :action="FORM_ENDPOINT"
      @submit="handleSubmit"
      method="POST"
      target="_blank"
    >
      <div class="close-button" @click="$emit('close')">&#10006;</div>
      <h1 class="contact-title">
        {{ $lang.contactMe }}
      </h1>
      <input
        class="contact-form-item"
        type="text"
        :placeholder="$lang.name"
        name="name"
        required
      />
      <input
        class="contact-form-item"
        type="email"
        :placeholder="$lang.email"
        name="email"
        required
      />
      <textarea
        class="contact-form-item"
        :placeholder="$lang.contactTextBoxMessage"
        name="message"
        cols="30"
        rows="15"
        required
      />
      <button class="contact-form-item button-submit" type="submit">
        {{ $lang.submit }}
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
import { mapGetters } from "vuex";
export default {
  name: "ContactForm",
  data: () => ({
    submitted: false,
    FORM_ENDPOINT:
      "https://public.herotofu.com/v1/08b906d0-35c0-11ed-9de0-b73c4b901972",
  }),
  computed: {
    ...mapGetters({ $lang: "personalSiteCurrentLanguage" }),
  },
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
  background: rgba($color: #000000, $alpha: 0.7);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 20;
  box-shadow: inset 1px 1px 10px #222;
  padding: 1rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  border-radius: 10px;
  border: 1px solid #222;
  .contact-title {
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
  form {
    background: #222;
    padding: 1.5rem;
    border-radius: 10px;
    width: 25rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .contact-form-item {
    resize: none;
    width: 100%;
    border-radius: 5px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.25rem;
    margin: 0.25rem;
    border: 2px solid #000;
    padding: 0.1rem 0.25rem;
  }
  .close-button {
    color: #fff;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    font-size: 2rem;
    padding: 0.25rem;
  }
  .close-button:hover {
    cursor: pointer;
    transform: scale(0.95);
  }
  .button-submit {
    background: linear-gradient(
      124deg,
      #6c0f00,
      #640d0d,
      #6e570d,
      #60620d,
      #0e741f,
      #0d6064,
      #140d6c,
      #5b0063,
      #630061
    );
    background-size: 350% 350%;
    -webkit-animation: rainbow 18s ease infinite;
    -z-animation: rainbow 18s ease infinite;
    -o-animation: rainbow 18s ease infinite;
    animation: rainbow 18s ease infinite;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    color: #fff;
    font-weight: bold;
    border: 3px solid #000;
    padding: 0.5rem 1rem;
    border-radius: 10px;
  }
}

.button-submit:hover {
  transform: scale(0.95);
  cursor: pointer;
}
@-webkit-keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
@-moz-keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
@-o-keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
@keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
@media only screen and (max-width: 450px) {
  .contact-form {
    .contact-title {
      color: #fff;
      font-size: 1rem;
    }
    .close-button {
      font-size: 1rem;
    }
    form {
      padding: 0.5rem;
      width: 15rem;
      height: 15rem;
    }
    .contact-form-item {
      font-size: 1rem;
    }
  }
}
</style>
