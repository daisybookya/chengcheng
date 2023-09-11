<script setup lang="ts">
import LayoutVue from "@/components/Layout.vue";
import IntroVue from "@/components/Intro.vue";
import { ref, onMounted, onUnmounted } from "vue";
interface Item {
  ele: Element;
  y: number;
  color: string;
}
document.body.style.overflowX = "hidden";
let eleList: Item[] = [];
let lastKnownScrollPosition = 0;
let ticking = false;
let mainBox: any = null;
onMounted(() => {
  eleList = getEleList(".part");
  mainBox = document.querySelector(".about");
  document.addEventListener("scroll", scrollEvent);
});
function getEleList(eleId: string) {
  if (eleId !== "" || null) {
    let topItem = document.getElementsByClassName("about-banner")[0];
    let topItemHeight = topItem.getBoundingClientRect().height;
    let ele = document.querySelectorAll(eleId);
    let firstItemY = ele[0].getBoundingClientRect().y;
    let list: Item[] = [];
    console.log(topItemHeight, firstItemY);
    ele.forEach((item, index) => {
      let itemPosY = item.getBoundingClientRect().y;
      if (firstItemY > topItemHeight) {
        //從首頁跳轉進來的y值跟重新整理過後的y值不一樣
        //因為重新整理會沒算到topItemHeight的值
        itemPosY -= topItemHeight;
      }
      const itemColor = item.getAttribute("data-color") || "";
      const detail: Item = {
        ele: item,
        y: itemPosY,
        color: itemColor,
      };
      //console.log(topItemHeight, detail);
      list.push(detail);
    });
    return list;
  }
  return [];
}
function listenEleShowUp(scrollPos: number, obj: number) {
  let posAmount = 30;
  let nowItem = eleList[obj];
  if (scrollPos + posAmount > nowItem.y && mainBox !== null) {
    mainBox.setAttribute("style", `background:${nowItem.color}`);
    nowItem.ele.classList.add("active");
  }
}

function scrollEvent(event: Event) {
  lastKnownScrollPosition = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      for (let i = 0, k = eleList.length; i < k; i++) {
        listenEleShowUp(lastKnownScrollPosition, i);
      }
      ticking = false;
    });

    ticking = true;
  }
}
onUnmounted(() => {
  document.removeEventListener("scroll", scrollEvent);
});
</script>
<template>
  <LayoutVue>
    <template #content>
      <div class="about h-full transition-all duration-1000">
        <div
          class="about-banner flow-bg w-full flex justify-end items-center p-10 h-screen bg-[url(/qbkls.webp)] bg-fixed"
        >
          <h1
            class="text-sky-600 text-5xl md:text-6xl lg:text-8xl font-bold uppercase font-display sm:leading-normal lg:leading-relaxed"
          >
            About Cheng <br />Cheng Design
          </h1>
        </div>
        <div
          class="part flex justify-start px-14 py-10 mt-20"
          data-color="#f0e6fc"
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
        </div>
        <div
          class="part flex justify-end px-14 py-10 mt-20"
          data-color="#f7e2c6"
        >
          <IntroVue
            title="| Professional Skills"
            size="text-2xl md:text-4xl md:leading-normal"
          >
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
          class="part flex justify-evenly px-14 py-10 mt-20"
          data-color="#def3ff"
        >
          <IntroVue
            title="|More about:Faith"
            size="text-2xl md:text-4xl md:leading-normal"
          >
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
            class="run-txt hover:text-sky-400 text-5xl text-white bg-stone-500 flex leading-normal h-20"
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
.bk-blue-g {
  background: #a1eaaa;
  /* Old browsers */
  /* FF3.6-15 */
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg, #a1eaaa 1%, #8fd6e0 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a1eaaa', endColorstr='#8fd6e0',GradientType=1 );
  /* IE6-9 fallback on horizontal gradient */
}
.bk-pink-b {
  background: #a6c2dd;
  /* Old browsers */
  /* FF3.6-15 */
  /* Chrome10-25,Safari5.1-6 */
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(1%, #a6c2dd),
    to(#eac8bb)
  );
  background: linear-gradient(to right, #a6c2dd 1%, #eac8bb 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6c2dd', endColorstr='#eac8bb',GradientType=1 );
  /* IE6-9 */
}
.bk-green-p {
  background: #a3ccb3;
  /* Old browsers */
  /* FF3.6-15 */
  /* Chrome10-25,Safari5.1-6 */
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#a3ccb3),
    to(#bdb5dd)
  );
  background: linear-gradient(to right, #a3ccb3 0%, #bdb5dd 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a3ccb3', endColorstr='#bdb5dd',GradientType=1 );
  /* IE6-9 */
}
</style>
