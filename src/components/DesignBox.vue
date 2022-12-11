<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

const props = defineProps({
  bk: String,
  title: { type: String, required: true },
  intro: {
    type: Array,
    default() {
      return [];
    },
    required: true,
  },
});
let hoverBox: Ref<boolean> = ref(false);
</script>

<template>
  <div
    class="design-box"
    @mouseover="hoverBox = true"
    @mouseout="hoverBox = false"
    :class="[
      bk,
      'flex justify-center items-center relative',
      { active: hoverBox },
    ]"
  >
    <div class="text-center">
      <h4
        :class="[
          'text-3xl text-gray-700 font-serif font-bold rotate-90 transition-all duration-300',
        ]"
      >
        {{ title }}
      </h4>
      <ul>
        <li
          v-for="(txt, index) in intro"
          :key="index"
          class="text-gray-600 opacity-0 transition-all duration-700 translate-x-4"
          :style="{ 'transition-delay': `${0.1 * index}s` }"
        >
          {{ txt }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="scss">
.design-box {
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(245, 158, 11, 0.2);
  }
  &:first-child {
    &::before {
      background: rgba(2, 132, 199, 0.2);
    }
  }
  &:last-child {
    &::before {
      background: rgba(132, 204, 22, 0.2);
    }
  }
  &.active {
    animation-name: bgflow;
    animation-duration: 6s;
    animation-fill-mode: forwards;
    h4 {
      color: #000;
      transform: rotate(0) translateY(-30px) scale(1.1);
    }
    li {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
@keyframes bgflow {
  from {
    background-size: 100%;
    background-position: bottom;
  }
  to {
    background-size: 130%;
    background-position: top;
  }
}
</style>
