<template>
  <button
    class="md:hidden flex flex-col space-y-2 pb-10 pl-10"
    :aria-expanded="String(isMenuOpen)"
    aria-controls="mobile-nav"
    @click="isMenuOpen = !isMenuOpen"
  >
    <span class="sr-only">Menu</span>

    <span class="bg-gray-05 rounded-full size-[3.2rem] grid items-center justify-center backdrop-blur-8px">
      <span ref="topLine" :class="[classes, { 'rotate-45 translate-y-0': isMenuOpen, 'rotate-0 translate-y-[6px]': !isMenuOpen }]" />
      <span ref="middleLine" :class="[classes, { 'opacity-0': isMenuOpen }]" />
      <span ref="bottomLine" :class="[classes, { '-rotate-45 translate-y-0': isMenuOpen, 'rotate-0 translate-y-[-6px]': !isMenuOpen }]" />
    </span>
  </button>
</template>

<script setup>
const isMenuOpen = useIsMenuOpen();

const classes = 'grid-stacked | block h-[1px] w-[15px] duration-500 bg-black origin-center';

// const topLine = ref(null);
// const bottomLine = ref(null);

// const duration = 0.3;
// const ease = 'power4.inOut';
// const classes = 'grid-stacked | block h-[1px] w-[15px] transition-colors duration-500';

// const menuOpen = () => {
//   const tl = gsap.timeline();

//   tl.to([topLine.value, bottomLine.value], { y: 0, duration, ease });
//   tl.to(topLine.value, { rotate: 45, duration, ease }, '<30%');
//   tl.to(bottomLine.value, { rotate: -45, duration, ease }, '<');
// };

// const menuClose = () => {
//   const tl = gsap.timeline();

//   tl.to([topLine.value, bottomLine.value], { rotate: 0, duration, ease });
//   tl.to(topLine.value, { y: -3, duration, ease }, '<30%');
//   tl.to(bottomLine.value, { y: 3, duration, ease }, '<');
// };

// watch(isMenuOpen, (value) => {
//   gsap.killTweensOf([topLine.value, bottomLine.value]);

//   if (value) {
//     menuOpen();
//   } else {
//     menuClose();
//   }
// });
</script>
