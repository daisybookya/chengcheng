<script setup lang="ts">
import LayoutVue from "@/components/Layout.vue";
</script>
<template>
  <LayoutVue>
    <template #content>
      <div class="contact py-16 m-auto">
        <div class="flex justify-center w-full">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdsvXROEZDwUVeDHgC_XqvRS5OKczrfhJkp0bK5Ql2D8hVkfw/viewform?embedded=true"
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            >載入中…</iframe
          >
        </div>
      </div>
    </template>
  </LayoutVue>
</template>

<style scoped lang="scss">
.contact {
  width: 80vw;
  margin-left: 10vw;
  .flex {
    height: 1300px;
  }
}
</style>
