<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  size: { type: String },
});
</script>

<template>
  <!-- <div class="md:w-[90%] m-auto py-20 w-[80%]"></div> -->
  <div class="w-[100%] md:w-[60%] xl:w-[50%] text-sky-600">
    <div
      class="running ml-5 w-52 rotate-90 origin-top-left overflow-hidden text-3xl txt-black leading-normal"
    >
      <div class="flow-txt w-[1000px] flex text-sky-600">
        <div>{{ title }}</div>
        <div>{{ title }}</div>
      </div>
    </div>
    <div class="ml-10 -mt-14 font-serif leading-normal" :class="[size]">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
.flow-txt {
  border-top: 2px solid #0684c7;
  border-bottom: 2px solid #0684c7;
  > div {
    white-space: nowrap;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 10s;
    animation-name: flowTxt;

    &:nth-child(2) {
      animation-name: flowTxt2;
      animation-delay: 5s;
    }
  }
}
@keyframes flowTxt {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-110%);
  }
}
@keyframes flowTxt2 {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-210%);
  }
}
</style>
