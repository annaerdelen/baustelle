<template>
  <div id="root" class="flex flex-col min-h-screen">
    <PreviewBanner v-if="showPreviewBanner" />

    <Header />

    <main class="flex-1">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup>
useCredits();
const showPreviewBanner = useShowPreviewBanner();
</script>
