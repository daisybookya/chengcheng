<script setup lang="ts">
import { ArrowSmallRightIcon, ArrowPathIcon } from "@heroicons/vue/24/solid";
import LayoutVue from "@/components/Layout.vue";
import { coverList } from "@/utility/data";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, onBeforeMount } from "vue";
import type { Ref } from "vue";

const isloading: Ref<boolean> = ref(true);
const workId: Ref<number> = ref(0);
const nextId: Ref<number> = ref(1);
const endId: number = coverList.length - 1;
const route = useRoute();
const router = useRouter();
function loadWorkImg(e: Event) {
  const img = e.target as Element;
  isloading.value = false;
  setTimeout(() => {
    img.classList.add("done");
  }, 1000);
}
function goPage(id: number) {
  if (id <= endId) {
    router.push({ path: `/work-detail/${id}` });
  }
  if (id === -1) {
    router.push({ path: `/works` });
  }
  return;
}
onBeforeMount(() => {
  workId.value = +route.params.id;
  nextId.value = +route.params.id + 1;
});
onMounted(() => {});
</script>
<template>
  <LayoutVue>
    <template #content>
      <div
        class="work-detail pt-28 flex flex-col-reverse items-start md:flex-row"
      >
        <div
          :style="`animation-delay:700ms;background:${coverList[workId].subColor}`"
          class="move-in basis-full w-full md:w-auto mt-10 md:mt-0 md:basis-3/12 lg:basis-1/5 flex flex-row md:flex-col"
        >
          <div class="p-8 text-white basis-2/3 md:basis-auto">
            <p class="text-sm move-in">-產業類別</p>
            <p class="text-xl py-3 move-in">{{ coverList[workId].title }}</p>
            <p class="text-sm py-5 move-in">-設計項目</p>
            <p class="text-xl move-in">{{ coverList[workId].type }}</p>
          </div>
          <template v-if="coverList[nextId]">
            <div
              @click="goPage(nextId)"
              :style="`background:${coverList[nextId].subColor}`"
              class="hover:opacity-70 w-full px-8 py-5 basis-1/3 md:basis-auto cursor-pointer"
            >
              <p
                class="text-xl text-white move-in"
                :style="`animation-delay:2000ms`"
              >
                NEXT<span class="align-sub mr-2 inline-block"
                  ><ArrowSmallRightIcon class="w-5 h-5" /></span
                ><span class="text-xl py-3 block md:inline-block">{{
                  coverList[nextId].title
                }}</span>
              </p>
            </div>
          </template>
          <template v-else>
            <div
              @click="goPage(-1)"
              class="bg-sky-600 hover:opacity-70 w-full px-8 py-5 basis-1/3 md:basis-auto cursor-pointer"
            >
              <p
                class="text-xl text-white move-in"
                :style="`animation-delay:2000ms`"
              >
                BACK<span class="align-sub mr-2 inline-block"
                  ><ArrowSmallRightIcon class="w-5 h-5" /></span
                ><span class="text-xl py-3 block md:inline-block">目錄頁</span>
              </p>
            </div>
          </template>
        </div>
        <div class="basis-full md:basis-9/12 lg:basis-4/5 text-center px-8">
          <p v-show="isloading" class="text-sky-700 py-5">
            <span class="align-sub inline-block"
              ><ArrowPathIcon class="w-5 h-5 animate-spin mr-5" /></span
            >Loading Images...
          </p>
          <img
            v-for="path in coverList[workId].imglist"
            @load="loadWorkImg"
            :src="path"
            :style="`animation-delay:1200ms`"
            class="xl-work max-fit m-auto transition-all duration-[2000ms] move-in"
          />
        </div>
      </div>
    </template>
  </LayoutVue>
</template>

<style scoped lang="scss">
.xl-work {
  opacity: 0;
  filter: blur(10px);
  &.done {
    opacity: 1;
    filter: blur(0px);
  }
}
.move-in {
  &:nth-child(odd) {
    animation-delay: 1500ms;
  }
  &:nth-child(even) {
    animation-delay: 1800ms;
  }
}
</style>
