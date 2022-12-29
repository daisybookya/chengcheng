<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import type { Ref } from "vue";
import { ChevronUpIcon } from "@heroicons/vue/24/solid";
const showBack = ref(false);
let ticking: boolean = false;
let lastScrollPos: number = 0;
function goBackTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function showBtnBackTop() {
  lastScrollPos = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (lastScrollPos > 500) {
        showBack.value = true;
      } else {
        showBack.value = false;
      }
      ticking = false;
    });

    ticking = true;
  }
}
onMounted(() => {
  window.scrollTo({ top: 0 });
  document.addEventListener("scroll", showBtnBackTop);
});
onUnmounted(() => {
  document.removeEventListener("scroll", showBtnBackTop);
});
</script>

<template>
  <div class="wrapper">
    <div class="layer-1 fixed top-0 left-0 z-0 w-full h-full bg-lime-200"></div>
    <div class="layer-2 fixed top-0 left-0 z-0 w-full h-full bg-amber-50"></div>

    <div class="wrapper-content absolute top-0 left-0 z-20 font-serif w-full">
      <slot name="content"></slot>
      <div
        v-show="showBack"
        @click="goBackTop"
        class="fixed right-8 bottom-5 p-2 opacity-80 bg-amber-500 cursor-pointer rounded-full hover:bg-lime-500"
      >
        <ChevronUpIcon class="w-5 h-5 text-white" />
      </div>
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
