<template>
  <div class="flex justify-center items-center gap-x-2 fixed bottom-0 left-0 right-0 text-white bg-preview-red text-center p-8 z-[9999]">
    <!-- //TODO add firefox warning -->
    <p>Preview Mode Active</p>
    <button class="bg-black rounded-md px-6 py-2 absolute right-8" @click="stopPreviewMode()">Exit</button>
  </div>
</template>

<script setup>
const { stopPreviewMode } = useSanityPreview();
</script>
