<template>
  <div class="auth0">
    <div class="title">
      {{ $lang.loginTitleOne }}<br />
      <span class="subtitle">{{ $lang.loginTitleTwo }}</span>
    </div>
    <div class="login-options">
      <div class="signup-button" @click="login">{{ $lang.signup }}</div>
      <div class="login-button" @click="login">{{ $lang.login }}</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ $lang: "personalSiteCurrentLanguage" }),
  },
  methods: {
    async login() {
      await this.$auth0.loginWithRedirect();
      await window.sessionStorage.setItem(
        "currentlyLoggedIn",
        this.$auth0.user.user_id
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.auth0 {
  z-index: 10;
  width: 40vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: inset 1px 1px 10px #444;
  align-items: center;
  background: #ddd;
  color: #222;
  border-radius: 15px;
}
.title {
  font-size: 2rem;
  padding: 1.5rem;
  margin: 1rem;
  font-weight: bold;
  text-align: center;
}
.subtitle {
  font-size: 1rem;
  color: #444;
}
.login-options {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
}

.signup-button {
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
  color: #fff;
  font-weight: bold;
  border: 3px solid #444;
  padding: 0.5rem 1rem;
  border-radius: 10px;
}
.signup-button:hover {
  transform: scale(0.95);
  cursor: pointer;
}
.login-button {
  padding: 0.5rem;
  color: #444;
  font-weight: bold;
}
.login-button:hover {
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
@media only screen and (max-width: 550px) {
  .auth0 {
    width: 70vw;
    height: 50vh;
  }
  .title {
    font-size: 1.5rem;
    padding: 1rem;
    margin: 0;
    font-weight: bold;
    text-align: center;
  }
  .subtitle {
    font-size: 1rem;
    color: #444;
  }
  .login-options {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
  }
}
@media only screen and (max-width: 550px) {
  .auth0 {
    width: 80vw;
    height: 60vh;
  }
  .title {
    font-size: 1rem;
    padding: 1rem;
    margin: 0;
    font-weight: bold;
    text-align: center;
  }
  .subtitle {
    font-size: 0.75rem;
    color: #444;
  }
  .login-options {
    font-size: 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
  }
}
</style>
