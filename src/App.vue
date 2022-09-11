<script setup lang="ts"></script>

<template>
  <p class="container">
    <div>Luckept Personal Website</div>
  </p>
  <div class="working">
    建设中...
  </div>
</template>

<style lang="scss" scoped>
div {
  font-weight: 900;
  font-size: 100px;
  transition: all linear .1s;
  position: relative;
  z-index: 100;
}
.working {
  font-size: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  word-break: keep-all;
  width: 150px;
  animation: working 3s infinite steps(1);
}

@keyframes working {
  0% {
    width: 150px;
  }
  25% {
    width: 165px;
  }
  50% {
    width: 180px; 
  }
  75% {
   width: 200px; 
  }
}
</style>
