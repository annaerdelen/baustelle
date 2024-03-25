<template>
  <div class="p-2">
    <div class="pt-8">
      <p v-if="!(response || error)">Loading...</p>

      <div v-else>
        <p v-if="error">{{ error }}</p>
        <p v-else>{{ response }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const response = ref(null);
const error = ref(null);

const fetchData = async () => {
  try {
    const data = await $fetch('/api/hello');
    response.value = data;
  } catch (err) {
    error.value = err;
    console.log(err);
  }
};
const postData = async () => {
  try {
    const data = await $fetch('/api/hello', {
      method: 'POST',
      body: email,
    });

    response.value = data;
  } catch (err) {
    error.value = err;
    console.log(err);
  }
};

onMounted(() => {
  postData();
});
</script>
