import { defineStore } from 'pinia';
import { global as globalQuery } from '../utils/queries';

export const useSanityStore = defineStore('sanityStore', () => {
  const global = ref(undefined);

  async function setGlobal() {
    const query = groq`{
      ${globalQuery}
    }`;

    const { data } = await useSanityQuery(query);
    global.value = data.value.global;
  }

  return { global, setGlobal };
});
