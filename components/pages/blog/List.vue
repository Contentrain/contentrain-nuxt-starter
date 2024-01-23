<template>
  <div class="container py-10 md:pb-24">
    <div
      class="flex flex-wrap"
    >
      <template
        v-for="post in paginatedPosts"
        :key="post.slug"
      >
        <div class="blog-card w-full md:w-1/3 px-2 pt-4 pb-12 group">
          <nuxt-link :to="`/blog/${getCategory(post.category)?.slug}/${post.slug}`">
          <div
            class="w-full aspect-video rounded-lg overflow-hidden relative group-hover:shadow-[0_0_0_4px_rgba(59,130,246,0.40)]"
          >
            <span
              class="inline-block border border-gray:50 px-3 py-1 bg-white text-xs font-semibold rounded absolute top-5 left-5 capitalize"
              v-text="getCategory(post.category)?.name"
            />
            <img v-if="post && post.imagesrc"
              class="object-contain"
              :src="post.imagesrc.split('public')[1]"
            />
          </div>
          <div class="pt-6 sm:pr-4">
            <h2
              class="md:text-2xl font-medium mb-2 group-hover:text-primary-500 font-aeonik"
              v-text="post.title"
            />

            <p
              class="text-base text-gray-600 line-clamp-2"
              v-text="post.description"
            />
          </div>
        </nuxt-link>
        </div>
      </template>
    </div>

    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      :pagesToShow="pagesToShow"
      @page-change="handlePageChange"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
  },
})
import categories from '../../../contentrain/blogcategories/blogcategories.json'

const getCategory = (id:string) => {
  const category = categories.find(category => ( category.ID === id ))
  return category
}

const postsPerPage = 9;
const pagesToShow = 5;

const currentPage = ref(1);
const router = useRouter();
const route = useRoute();
const fetchedPosts = props.data

const paginatedPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  return fetchedPosts?.slice(startIndex, endIndex);
});
const totalPages = computed(() => Math.ceil(fetchedPosts?.length / postsPerPage));

onMounted(() => {
  currentPage.value = parseInt(route.query.page as string, 10) || 1;
});

watch(() => route.query.page, (newPage) => {
  currentPage.value = newPage ? parseInt(newPage as string, 10) : 1;
});
const handlePageChange = (page: number) => {
  router.push({ path: route.path, query: { page: page } });
};
</script>

