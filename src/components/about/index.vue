<template>
 <div :style="containerStyle" class="about-me">
    <div :style="layer" class="card">
      <div>Welcome!</div>
      <div>I'm Luckept</div>
      <div>页面随缘完善中...</div>
    </div>
 </div>
</template>

<script setup lang="ts">
import { MaybeElementRef, useParallax } from '@vueuse/core'
import { CSSProperties, inject } from 'vue'
import { computed, reactive, ref } from 'vue'

const rootComponent = ref(inject('rootComponent'))
const parallax = reactive(useParallax(rootComponent as MaybeElementRef))

const layerBase: CSSProperties = {
  position: 'absolute',
  transition: '.3s ease-out all',
}

const containerStyle: CSSProperties = {
  perspective: '300px',
}

const layer = computed(() => ({
  ...layerBase,
  transform: `rotateX(${parallax.roll * 10}deg) rotateY(${
    parallax.tilt * 10
  }deg) scale(1.2)`,
}))
</script>

<style lang="scss" scoped>
.about-me {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  box-sizing: border-box;
  .card {
    width: 400px;
    height: 400px;
    font-size: 30px;
    background-color: rgb(151, 134, 134);
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.7);
  }
}
</style>