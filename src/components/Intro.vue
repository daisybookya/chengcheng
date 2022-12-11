<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
});
</script>

<template>
  <div class="md:w-[90%] m-auto py-20 w-[80%]">
    <div
      class="running ml-5 w-52 rotate-90 origin-top-left overflow-hidden text-3xl txt-black leading-normal"
    >
      <div class="flow-txt w-[1000px] flex">
        <div>{{ title }}</div>
        <div>{{ title }}</div>
        <!-- <div>| Intro:About Daisy</div>
              <div>| Intro:About Daisy</div> -->
      </div>
    </div>
    <div
      class="w-[80%] md:w-[60%] xl:w-[50%] ml-10 -mt-14 font-serif leading-normal text-4xl"
    >
      <slot name="content"></slot>
    </div>
    <!-- <p
            class="w-[80%] md:w-[60%] xl:w-[50%] ml-10 -mt-14 font-serif leading-normal text-4xl"
          >
            Hi,my name is Daisy,<br />
            a Designer and Front-End Developer with over 7 years of experience
            working in Taiwan Taichung.
          </p> -->
  </div>
</template>
<style scoped lang="scss">
.flow-txt {
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
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
