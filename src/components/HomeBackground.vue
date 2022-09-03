<template>
  <div class="center">
    <div id="cloud1" class="cloud"></div>
    <div id="cloud2" class="cloud"></div>
    <div id="cloud3" class="cloud"></div>
    <div id="cloud4" class="cloud"></div>
    <div id="cloud5" class="cloud"></div>
  </div>
</template>
<script>
export default {
  name: "HomeBackground",
  props: {
    positionTop: {
      type: String,
    },
    positionLeft: {
      type: String,
    },
  },
  computed: {
    styles() {
      return {
        top: this.positionTop,
        left: this.positionLeft,
      };
    },
  },
};
</script>
<style>
/* .center {
  position: absolute;
  top: 25%;
  left: 15%;
  transform: translate(-50%, -50%);
}

.cloud {
  background: rgba(255, 255, 255);
  width: 300px;
  height: 100px;
  border-radius: 150px;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.2);
  animation: move 3s infinite;
}

.cloud:after {
  content: "";
  background: rgba(255, 255, 255);
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  top: -50px;
  left: 50px;
}

.cloud:before {
  content: "";
  background: rgba(255, 255, 255);
  position: absolute;
  width: 170px;
  height: 150px;
  border-radius: 50%;
  top: -90px;
  right: 40px;
}

@keyframes move {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100vh);
  }
  51% {
    transform: translateX(-100vh);
  }
} */
</style>
