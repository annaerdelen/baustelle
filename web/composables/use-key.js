export default function () {
  const key = ref(undefined);

  function onKey({ keyCode }) {
    if (keyCode === 27) {
      key.value = 'escape';
    } else if (keyCode === 37) {
      key.value = 'left';
    } else if (keyCode === 38) {
      key.value = 'up';
    } else if (keyCode === 39) {
      key.value = 'right';
    } else if (keyCode === 40) {
      key.value = 'down';
    } else {
      key.value = undefined;
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', onKey);
    window.addEventListener('keyup', () => (key.value = undefined));
  });

  onUnmounted(() => window.removeEventListener('keydown', onKey));

  return { key };
}
