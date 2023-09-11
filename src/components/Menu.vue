<script setup lang="ts">
import { RouterLink } from "vue-router";
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { routes } from "@/router";

const emit = defineEmits(["close"]);
const menu = routes.filter((item) => !item.name.includes("WorkDetail"));
</script>
<template>
  <div
    class="menu-wrapper move-scale flex justify-center items-center fixed top-0 left-0 z-50 bg-stone-700"
  >
    <div class="box">
      <nav class="text-white flex flex-col font-display text-5xl">
        <RouterLink
          class="hover:text-sky-500 py-4 move-in"
          :style="`animation-delay:${150 * index}ms`"
          @click="$emit('close')"
          :to="link.path"
          v-for="(link, index) in menu"
          :key="link.name"
          >{{ link.name }}</RouterLink
        >
      </nav>
      <button class="absolute top-5 right-5" @click="$emit('close')">
        <XMarkIcon
          class="h-12 w-12 text-white transition-all hover:text-sky-500 hover:rotate-90"
        />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu-wrapper {
  width: 100vw;
  height: 100vh;
}
.move-scale {
  opacity: 0;
  animation-name: scaleUp;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
@keyframes scaleUp {
  0% {
    opacity: 0;
    border-radius: 100vh;
    transform: scaleX(0.3);
  }

  100% {
    opacity: 1;
    border-radius: 0;
    transform: scaleX(1);
  }
}
</style>
