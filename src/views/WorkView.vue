<script setup lang="ts">
import LayoutVue from "@/components/Layout.vue";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/vue/24/solid";
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { coverList } from "@/utility/data";
import type { Ref } from "vue";
let scrollXPos: Ref<number> = ref(0); //卷軸滾動的量
let mousePos: number = 0; //滑鼠滾動的位置
let maxPos: Ref<number> = ref(100); //最多滾動的量
const router = useRouter();

function scrollList(amount: number = 120, mouseY: number) {
  //amount一次滾動的幅度,mouseY滑鼠滾動的位置
  const target: Element = document.getElementsByClassName("projects-list")[0];
  let direction: string = +mouseY > 0 ? "right" : "left";
  maxPos.value = target.scrollWidth - target.clientWidth; //div總長-視窗寬度=捲軸最多移動的量
  let fast = mouseY * 0.3; //依照滾動幅度加速
  let movingAmount = +mouseY > 0 ? amount + fast : amount - fast;
  switch (direction) {
    case "right":
      if (scrollXPos.value >= maxPos.value) {
        scrollXPos.value = maxPos.value;
      } else {
        scrollXPos.value += movingAmount;
        target.scrollTo({ left: scrollXPos.value, behavior: "smooth" });
      }
      break;
    case "left":
      if (scrollXPos.value <= 0) {
        scrollXPos.value = 0;
      } else {
        scrollXPos.value -= movingAmount;
        target.scrollTo({ left: scrollXPos.value, behavior: "smooth" });
      }
      break;
  }
}
function loadWorkImg(e: Event) {
  const img = e.target as Element;
  img.classList.add("done");
}
function moveList(diret: string) {
  const windowWidth: number = window.innerWidth;
  const moveAmount: number = windowWidth / 2; //移動的量依據視窗大小除2
  if (diret === "left") {
    //8為最小滾動的數值
    scrollList(moveAmount, 8);
  } else {
    scrollList(moveAmount, -8);
  }
}
function wScroll(e: WheelEvent) {
  mousePos = Number(e.deltaY.toFixed(0));
  //console.log("wScroll:", mousePos);
  scrollList(120, mousePos);
}
function viewWrokDetail(id: number) {
  router.push({ path: `/work-detail/${id}` });
}
onMounted(() => {
  window.addEventListener("wheel", wScroll);
});
onUnmounted(() => {
  //解除監聽滾輪事件，否則點其他組件還會繼續
  window.removeEventListener("wheel", wScroll);
});
</script>
<template>
  <LayoutVue>
    <template #content>
      <div
        class="work h-screen w-screen flex justify-center md:items-center relative overflow-x-hidden md:overfloiw-auto"
      >
        <div
          class="projects-list md:flex flex-wrap md:flex-nowrap md:overflow-hidden"
        >
          <div
            v-for="(item, index) in coverList"
            :key="item.title"
            class="cover-outer-box m-10 md:m-3 md:first:ml-0 md:last:mr-0"
          >
            <div
              @click="viewWrokDetail(index)"
              class="cover-box w-96 md:w-80 move-in"
              :style="`background:${item.subColor}; animation-delay:${
                1000 + 200 * index
              }ms;`"
            >
              <img
                :src="item.img"
                @load="loadWorkImg"
                class="s-work hover:opacity-60 w-full h-auto transition-all duration-[2000ms]"
              />
            </div>
          </div>
        </div>
        <div
          v-show="!(scrollXPos <= 0)"
          @click="moveList('right')"
          class="backdrop-blur-sm bg-white/30 hover:bg-lime-400 hover:opacity-70 -translate-y-1/2 absolute top-[50vh] py-10 pr-5 pl-1 rounded-r-full cursor-pointer left-0 z-10 transition-all duration-500"
        >
          <ChevronDoubleLeftIcon class="w-5 h-5 text-black" />
        </div>

        <div
          v-show="scrollXPos < maxPos"
          @click="moveList('left')"
          class="backdrop-blur-sm bg-white/30 hover:bg-lime-400 hover:opacity-70 -translate-y-1/2 absolute top-[50vh] py-10 pr-5 pl-1 rounded-l-full cursor-pointer right-0 z-10 transition-all duration-500"
        >
          <ChevronDoubleRightIcon class="w-5 h-5 text-black" />
        </div>
      </div>
    </template>
  </LayoutVue>
</template>

<style scoped lang="scss">
.s-work {
  cursor: pointer;
  opacity: 0;
  filter: blur(10px);
  &.done {
    opacity: 1;
    filter: blur(0px);
  }
}
</style>
