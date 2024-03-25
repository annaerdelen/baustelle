<template>
  <button
    class="md:hidden flex flex-col space-y-2 pb-10 pl-10"
    :aria-expanded="String(globalStore.isNavOpen)"
    aria-controls="mobile-nav"
    @click="globalStore.setIsNavOpen()"
  >
    <span class="visually-hidden">Menu</span>

    <span class="origin-top-left" :class="[{ 'rotate-45 -translate-y-[0.085rem] translate-x-[0.5rem]': globalStore.isNavOpen }, classes]" />
    <span :class="[{ 'opacity-0': globalStore.isNavOpen }, classes]" />
    <span class="origin-bottom-left" :class="[{ '-rotate-45 translate-y-[0.085rem] translate-x-[0.5rem]': globalStore.isNavOpen }, classes]" />
  </button>
</template>

<script setup>
const globalStore = useGlobalStore();

const classes = 'block h-[1px] w-[20px] bg-black duration-200 ease-out-quart';
</script>
