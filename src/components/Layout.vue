<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <div class="layer-1 fixed top-0 left-0 z-0 w-full h-full bg-lime-100"></div>
    <div
      class="layer-2 fixed top-0 left-0 z-10 w-full h-full bg-amber-50"
    ></div>

    <div class="wrapper-content absolute top-0 left-0 z-20 font-serif">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  min-height: 100vh;
}
.layer-2 {
  transform: translateY(-100%);
  animation-name: moveY;
  animation-duration: 1s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
}
.wrapper-content {
  opacity: 0;
  animation-name: fade;
  animation-duration: 1.3s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}
@keyframes moveY {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
