<script setup lang="ts">
import Menu from "@/components/Menu.vue";
import { Bars3Icon } from "@heroicons/vue/24/solid";
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import type { Ref } from "vue";

let menuOpen: Ref<boolean> = ref(false);
</script>

<template>
  <header class="w-full flex justify-between px-8 py-5 fixed top-0 left-0 z-50">
    <div class="logo font-display text-2xl lg:text-3xl italic">
      <RouterLink class="hover:text-stone-400 text-stone-600" to="/"
        >CHENG <br />DESIGN</RouterLink
      >
    </div>
    <button
      @click="menuOpen = !menuOpen"
      class="p-2 border-none rounded-full bg-sky-600 hover:bg-sky-400 transition-colors"
    >
      <Bars3Icon class="h-6 w-6 text-white" />
    </button>
  </header>
  <Menu v-show="menuOpen" @close="menuOpen = false"></Menu>

  <router-view v-slot="{ Component, route }">
    <transition name="fade">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<style scoped lang="scss">
.fade-leave-to {
  transform: translateY(0);
  opacity: 1;
}
.fade-enter-from {
  transform: translateY(-100%);
  opacity: 1;
}
.fade-enter-active {
  transition: all 0.5s ease-out;
}
</style>
