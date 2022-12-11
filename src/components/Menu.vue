<script setup lang="ts">
import { RouterLink } from "vue-router";
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { routes } from "@/router";

const emit = defineEmits(["close"]);
</script>
<template>
  <div
    class="menu-wrapper flex justify-center items-center fixed top-0 left-0 z-50 bg-sky-600"
  >
    <div class="box">
      <nav class="text-white flex flex-col font-display text-5xl">
        <RouterLink
          class="hover:even:text-lime-400 hover:odd:text-amber-300 py-2"
          @click="$emit('close')"
          :to="link.path"
          v-for="link in routes"
          :key="link.name"
          >{{ link.name }}</RouterLink
        >
      </nav>
      <button class="absolute top-5 right-5" @click="$emit('close')">
        <XMarkIcon
          class="h-12 w-12 text-white transition-all hover:text-amber-300 hover:rotate-90"
        />
      </button>
    </div>
  </div>
</template>

<style scoped>
.menu-wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
