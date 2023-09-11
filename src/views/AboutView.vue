<script setup lang="ts">
import LayoutVue from "@/components/Layout.vue";
import IntroVue from "@/components/Intro.vue";
import { HandRaisedIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <LayoutVue>
    <template #content>
      <div
        class="about h-full flow-bg w-full flex justify-center items-center p-5 md:p-10 h-screen bg-[url(/qbkls.webp)] bg-fixed transition-all duration-1000"
      >
        <div
          class="flex w-[90%] sm:w-[80%] md:w-[90%] lg:w-4/5 h-4/5 py-0 md:py-10 flex-col md:flex-row bg-stone-300 rounded-3xl md:rounded-full"
        >
          <div
            class="basis-2/5 sm:basis-auto md:basis-1/2 border-b md:border-b-0 md:border-r flex items-center justify-center justify-end"
          >
            <div
              class="basis-10/12 pl-2 py-6 md:py-0 text-stone-800 font-display text-base lg:text-lg"
            >
              <span class="hidden md:block"
                ><HandRaisedIcon class="w-7 h-7 mb-2 text-stone-500"
              /></span>
              Hi,my name is Daisy,<br />
              a Designer and Front-End Developer with over 5 years of experience
              working in Taiwan Taichung.
            </div>
          </div>
          <div
            class="basis-3/5 sm:basis-auto md:basis-1/2 flex items-center justify-center md:justify-between"
          >
            <div
              class="p-10 py-3 md:py-0 flex flex-col sm:flex-row md:flex-col basis-atuo sm:basis-full md:basis-auto"
            >
              <div class="basis-atuo sm:basis-1/2 md:basis-auto">
                <h3
                  class="text-xl lg:text-2xl py-1 lg:py-3 font-display text-stone-600"
                >
                  What can i do for you:
                </h3>
                <ul
                  class="text-stone-800 list-disc list-inside leading-relaxed mb-2 lg:mb-5"
                >
                  <li>Web design / UIUX</li>
                  <li>Brand identity</li>
                  <li>Graphic design</li>
                </ul>
              </div>
              <div class="basis-atuo sm:basis-1/2 md:basis-auto">
                <h3
                  class="text-xl lg:text-2xl py-1 lg:py-3 font-display text-stone-600"
                >
                  Contact Daisy:
                </h3>
                E-mail : daisybookya@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div
          class="part flex justify-start px-14 py-10 mt-20"
        >
          <IntroVue
            title="| Intro:About Daisy"
            size="text-3xl md:text-5xl md:leading-normal"
          >
            <template #content>
              Hi,my name is Daisy,<br />
              a Designer and Front-End Developer with over 5 years of experience
              working in Taiwan Taichung.
            </template>
          </IntroVue>
        </div> -->

      <div class="m-auto overflow-hidden w-screen">
        <div
          class="run-txt hover:text-sky-400 text-2xl md:text-4xl text-white bg-stone-500 flex leading-normal"
        >
          <div>
            Let's get Started.Contact Dasiy! Let's get Started.Contact Dasiy!
          </div>
          <div>
            Let's get Started.Contact Dasiy! Let's get Started.Contact Dasiy!
          </div>
        </div>
      </div>
    </template>
  </LayoutVue>
</template>

<style scoped lang="scss">
.part {
  opacity: 0;
  transition: all ease-in 0.4s;
  transform: scale(0.5);
  &.active {
    opacity: 1;
    transform: scale(1);
  }
}
.run-txt {
  > div {
    white-space: nowrap;
    animation: scroll 40s linear infinite;
    &:nth-child(2) {
      animation: scroll2 40s linear infinite;
      animation-delay: -20s;
    }
  }
}
@keyframes scroll {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes scroll2 {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-200%);
  }
}
</style>
