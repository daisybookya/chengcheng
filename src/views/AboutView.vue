<script setup lang="ts">
import LayoutVue from "@/components/Layout.vue";
import IntroVue from "@/components/Intro.vue";
import { ref, onMounted, onBeforeMount } from "vue";

document.body.style.overflowX = "hidden";
</script>
<template>
  <LayoutVue>
    <template #content>
      <div class="about h-full">
        <div
          class="flow-bg w-full flex justify-end items-center p-10 h-screen bg-[url(/design.webp)] bg-fixed"
        >
          <h1
            class="lg:text-6xl sm:text-5xl font-bold font-display sm:leading-normal lg:leading-relaxed"
          >
            Shaping your Identity <br />width design and code
          </h1>
        </div>
        <div
          class="flex justify-start px-14 py-10 mt-20"
          data-aos="zoom-in-up"
          data-aos-offset="-50"
        >
          <IntroVue title="| Intro:About Daisy" size="text-5xl">
            <template #content>
              Hi,my name is Daisy,<br />
              a Designer and Front-End Developer with over 5 years of experience
              working in Taiwan Taichung.
            </template>
          </IntroVue>
        </div>
        <div
          class="flex justify-end px-14 py-10 mt-20"
          data-aos="zoom-in-up"
          data-aos-offset="-220"
        >
          <IntroVue title="| Professional Skills" size="text-4xl">
            <template #content>
              <ul>
                <li>-Javascript: Vue/React/Typescript</li>
                <li>-Css:scss/less/tailwindcss</li>
                <li>-UI framework:Ant Design/Boostrap/Vuetify</li>
                <li>-git/github</li>
                <li>-photoshop</li>
                <li>-illustrator</li>
              </ul>
            </template>
          </IntroVue>
        </div>
        <div
          class="flex justify-evenly px-14 py-10 mt-20"
          data-aos="zoom-in-up"
          data-aos-offset="-220"
        >
          <IntroVue title="|More about:Faith" size="text-3xl">
            <template #content>
              <p>
                “<i
                  >A SPARK IS YOUR MEANINGS OF LIFE, YOUR PASSIONS, YOUR
                  PURPOSES, ISN‘T A SOUL’S PURPOSE.</i
                >” From film "Soul"<br />
                I hope I can help you complete a spark in your life and bring
                more good things.
              </p>
            </template>
          </IntroVue>
        </div>
        <div class="m-auto py-24 overflow-hidden w-screen">
          <div
            class="run-txt hover:text-sky-600 text-5xl text-white bg-lime-500 flex leading-normal h-20"
          >
            <div>
              Let's get Started.Contact Dasiy!Let's get Started.Contact Dasiy!
            </div>
            <div>
              Let's get Started.Contact Dasiy!Let's get Started.Contact Dasiy!
            </div>
          </div>
        </div>
      </div>
    </template>
  </LayoutVue>
</template>

<style scoped lang="scss">
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
