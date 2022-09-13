<template>
  <div class="working">
    荒原...
  </div>
</template>

<style lang="scss" scoped>
.working {
  font-size: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  word-break: keep-all;
  width: 150px;
  color: #fff;
  animation: working 4s infinite steps(1);
}

@keyframes working {
  0% {
    width: 100px;
  }
  25% {
    width: 115px;
  }
  50% {
    width: 130px; 
  }
  75% {
   width: 150px; 
  }
}
</style>
