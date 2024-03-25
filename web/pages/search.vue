<template>
  <article class="p-2 pt-48">
    <ais-instant-search :index-name="indexName" :search-client="algolia">
      <ais-search-box />

      <ais-hits>
        <template #item="{ item }">
          <article>
            <h2>
              <ais-highlight :hit="item" attribute="title" />
            </h2>

            <div>
              <ais-highlight :hit="item" attribute="description" />
            </div>

            <!-- <p>
              <span v-for="(tag, index) in item.tags" :key="tag">
                <ais-highlight :hit="item" :attribute="'tags.' + index" />
                <span v-if="index < item.tags.length - 1">, </span>
              </span>
            </p> -->
          </article>
        </template>
      </ais-hits>
    </ais-instant-search>
  </article>
</template>

<script setup>
// import { AisInstantSearch, AisSearchBox, AisHits, AisHighlight } from 'vue-instantsearch/vue3/es';

// const algolia = useAlgoliaRef();

// const indexName = 'test';
</script>
