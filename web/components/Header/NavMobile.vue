<template>
  <NavBtn />

  <Transition enter-from-class="-translate-y-full" leave-to-class="-translate-y-full">
    <nav v-if="isMenuOpen" class="fixed inset-0 w-full h-full p-2 pt-12 md:hidden duration-400 ease-out-quint z-[-1] bg-white">
      <NuxtLink v-for="page in globalStore.navigation" :key="page._id" class="block pb-3" :to="'/' + page.slug.current">
        {{ page.title }}
      </NuxtLink>
    </nav>
  </Transition>
</template>

<script setup>
const globalStore = useGlobalStore();
const isMenuOpen = useIsMenuOpen();

const route = useRoute();
const { key } = useKey();

watch(
  () => route.href,
  () => {
    if (isMenuOpen.value) isMenuOpen.value = false;
  },
);

watch(key, () => {
  if (!isMenuOpen.value) return;
  if (key.value === 'escape') isMenuOpen.value = false;
});
</script>
