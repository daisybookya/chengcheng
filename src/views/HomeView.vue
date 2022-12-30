<script setup lang="ts">
import LayoutVue from "@/components/Layout.vue";
import { onMounted } from "vue";
const blocks = Array.from({ length: 6 }, (x, i) => i);
</script>

<template>
  <LayoutVue>
    <template #content>
      <div class="home relative">
        <div class="bk-box flex flex-col h-screen bg-[url(/design.webp)]">
          <div v-for="item in blocks" class="run-bar h-1/6 overflow-hidden">
            <div class="inner-bar w-full h-full">
              {{ item }}
            </div>
          </div>
        </div>
        <div
          class="text-6xl md:text-8xl lg:text-8xl xl:text-9xl text-center whitespace-nowrap font-display font-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div class="overflow-hidden">
            <div class="titleMove origin-bottom leading-tight">Shaping</div>
          </div>
          <div class="overflow-hidden">
            <div class="titleMove origin-bottom leading-tight">
              Identity width
            </div>
          </div>
          <div class="overflow-hidden">
            <div class="titleMove origin-bottom">
              <span class="font-sans capitalize font-light leading-tight"
                >design</span
              >
              and
              <span class="font-sans capitalize font-light leading-tight"
                >code</span
              >
            </div>
          </div>
        </div>
        <div class="absolute bottom-5 right-8 text-sm text-gray-600">
          © 2022 ChengCheng Design.All rights reserved.
        </div>
      </div>
    </template>
  </LayoutVue>
</template>
<style lang="scss" scoped>
.bk-box {
  animation: 0.6s ease-in 2.5s forwards moveSmall, 24s linear infinite bgflow;
}
.run-bar {
  &:nth-child(even) {
    .inner-bar {
      background: #0684c7;
      animation-name: moveRight;
    }
  }
  .inner-bar {
    background: #0684c7;
    animation-delay: 1s;
    animation-name: moveLeft;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
  }
}
@keyframes moveLeft {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-101%);
  }
}
@keyframes moveRight {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(101%);
  }
}
@keyframes moveSmall {
  0% {
    transform: scale(1);
    border-radius: 0;
  }

  100% {
    transform: scale(0.7);
    border-radius: 100vh;
  }
}
.titleMove {
  transform: translateY(100%);
  animation-delay: 3s;
  animation-name: moveUp;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}
@keyframes moveUp {
  0% {
    transform: perspective(250px) rotateX(30deg) translateY(100%);
  }

  100% {
    transform: perspective(250px) rotateX(0deg) translateY(0%);
  }
}
</style>
