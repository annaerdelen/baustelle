<template>
  <div class="flex h-screen w-full items-center justify-center flex-col">
    <h2>Page Not Found</h2>
    <button class="underline pt-8" @click="handleError">Back Home</button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'empty',
});

//TODO
const global = { siteTitle: 'Baustelle' };

useSeo({ global });

const handleError = () => {
  clearError({ redirect: '/' });
  setTimeout(() => {
    window.location.reload();
  }, 200);
};
</script>
