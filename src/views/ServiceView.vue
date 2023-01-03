<script setup lang="ts">
import LayoutVue from "@/components/Layout.vue";
import DesignBoxVue from "@/components/DesignBox.vue";
const items = [
  {
    bk: "bg-[url(/terrazzo.webp)]",
    title: "Graphic Design",
    intro: ["平面設計", "Logo設計", "文宣設計"],
  },
  {
    bk: "bg-[url(/design.webp)]",
    title: "Web Design",
    intro: ["網頁設計", "響應式設計", "APP設計"],
  },
  {
    bk: "bg-[url(/qbkls.webp)]",
    title: "Front-end development",
    intro: ["網頁前端開發", "RWD響應開發", "視覺動態開發"],
  },
];
</script>
<template>
  <LayoutVue>
    <template #content>
      <div class="service flex flex-col md:flex-row">
        <template v-for="(item, index) in items" :key="item.title + index">
          <DesignBoxVue
            :bk="item.bk"
            :title="item.title"
            :intro="item.intro"
          ></DesignBoxVue>
        </template>
      </div>
    </template>
  </LayoutVue>
</template>

<style scoped>
.service {
  width: 100vw;
  height: 100vh;
}
</style>
