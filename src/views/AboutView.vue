<script setup lang="ts">
import LayoutVue from "@/components/Layout.vue";
import IntroVue from "@/components/Intro.vue";
</script>
<template>
  <LayoutVue>
    <template #content>
      <div class="about h-full py-20">
        <div
          class="flow-bg w-full flex justify-end items-center p-10 h-96 bg-[url(/design.webp)] bg-fixed"
        >
          <h1
            class="lg:text-6xl sm:text-5xl font-bold font-display sm:leading-normal lg:leading-relaxed"
          >
            Shaping your Identity <br />width design and code
          </h1>
        </div>
        <div class="flex">
          <IntroVue title="| Intro:About Daisy">
            <template #content>
              Hi,my name is Daisy,<br />
              a Designer and Front-End Developer with over 7 years of experience
              working in Taiwan Taichung.
            </template>
          </IntroVue>
        </div>
      </div>
    </template>
  </LayoutVue>
</template>

<style scoped lang="scss">
.flow-bg {
  animation-name: bgflow;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes bgflow {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 100%;
  }
}
</style>
