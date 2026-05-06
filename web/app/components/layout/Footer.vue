<script setup lang="ts">
const year = ref(new Date().getFullYear());
</script>

<template>
  <footer class="p-2">
    <div class="flex space-x-2">
      <p>© {{ year }}</p>
      <a class="underline" href="https://erdelen.com" target="_blank" rel="noopener noreferrer">Anna Erdelen</a>
    </div>

    <div class="flex space-x-2">
      <p>Demo website built Nuxt 3 and Sanity v3.</p>
      <a class="underline" href="https://github.com/annaerdelen/baustelle" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  </footer>
</template>
