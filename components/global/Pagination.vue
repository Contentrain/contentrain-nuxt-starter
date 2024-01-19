<template>
  <nav
    class="flex flex-row flex-nowrap justify-between md:justify-center items-center"
    aria-label="Pagination"
  >
    <nuxt-link
      v-if="currentPage > 1"
      class="flex w-10 h-10 mr-1 justify-center items-center rounded-lg bg-white text-secondary-500 hover:border-gray-300"
      :to="{ path: '/blog', query: { page: currentPage - 1 } }"
      title="Previous Page"
    >
      <span class="sr-only">Previous Page</span>
      <nuxt-icon class="-m-1" name="chevron-left" style="--size: 20px" />
    </nuxt-link>

    <template v-for="page in displayedPages" :key="page">
      <nuxt-link
        class="flex w-10 h-10 mx-1 justify-center items-center rounded-lg"
        :to="{ path: '/blog', query: { page: page } }"
        :class="{ 'bg-primary-500 text-white pointer-events-none': currentPage === page, 'bg-white text-black hover:border-gray-300': currentPage !== page }"
        :title="'Page ' + page"
      >
        {{ page }}
      </nuxt-link>
    </template>

    <nuxt-link
      v-if="currentPage < totalPages"
      class="flex w-10 h-10 ml-2 justify-center items-center rounded-lg bg-white text-secondary-500 hover:border-gray-300"
      :to="{ path: '/blog', query: { page: currentPage + 1 } }"
      title="Next Page"
    >
      <span class="sr-only">Next Page</span>
      <nuxt-icon class="-m-1" name="chevron-right" style="--size: 20px" />
    </nuxt-link>
  </nav>
</template>

<script setup lang="ts">

const props = defineProps<{
  currentPage: number;
  totalPages: number;
  pagesToShow: number;
}>();

const displayedPages = computed(() => {
  const startPage = Math.max(1, props.currentPage - Math.floor(props.pagesToShow / 2));
  const endPage = Math.min(props.totalPages, startPage + props.pagesToShow - 1);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return pages;
});

</script>
