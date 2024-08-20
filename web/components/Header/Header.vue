<template>
  <header class="fixed top-0 w-full flex justify-between p-2 z-40">
    <NuxtLink to="/">
      <h1>{{ globalStore?.siteTitle }}</h1>
    </NuxtLink>

    <NavDesktop />
    <NavMobile />
  </header>
</template>

<script setup>
const globalStore = useGlobalStore();

// watchEffect(()=> {
//   textBox.value = route.name
// })
</script>
