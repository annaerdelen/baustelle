import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('globalStore', () => {
  const isNavOpen = ref(false);

  function setIsNavOpen() {
    isNavOpen.value = !isNavOpen.value;
  }

  return { isNavOpen, setIsNavOpen };
});
