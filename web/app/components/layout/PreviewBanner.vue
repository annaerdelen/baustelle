<script setup lang="ts">
const { isFirefox } = useDetectBrowser();
// const { stopPreviewMode } = useSanityPreview();
</script>

<template>
  <div
    class="font-preview text-[1.2rem] uppercase leading-none tracking-wide flex justify-center items-center gap-x-2 fixed bottom-0 left-0 right-0 text-center p-8 z-[9999] text-white"
  >
    <div class="bg-preview/90 backdrop-blur-sm rounded-full px-4 py-3">
      <p v-if="isFirefox">Preview Mode does not work in Firefox</p>
      <p v-else>Preview Mode</p>
    </div>
    <!-- <button class="bg-white text-black rounded-full px-4 pt-3 pb-2 uppercase" @click="stopPreviewMode()">Exit</button> -->
  </div>
</template>
