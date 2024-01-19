<template>
    <div class="container py-10 md:pb-24">

        <div class="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-20 gap-x-6 mb-10 md:mb-24">

            <template v-for="(article, i) in paginatedPosts" :key="`article-${i}`">

                <nuxt-link :to="`/use-cases/${article.category}/${article.slug}`" class="flex flex-wrap">

                    <div class="h-[300px] w-full rounded-lg bg-gray-100 overflow-hidden">
                        <img height="200" width="100%" class="h-full w-full object-cover"
                                 src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"/>
                    </div>

                    <div class="pt-6 sm:pr-4">

                        <h2 class="md:text-2xl font-medium mb-2" v-text="article.title"/>

                        <p class="text-base text-gray-600 line-clamp-2" v-text="article.description"/>

                    </div>

                </nuxt-link>

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

const {$date} = useNuxtApp()
const props = defineProps({
    data : {
    type: Object
  }
})
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
  // Sayfa yüklendiğinde sayfalama bilgilerini al
  currentPage.value = parseInt(route.query.page as string, 10) || 1;
});

watch(() => route.query.page, (newPage) => {
  // URL'den sayfa değişikliklerini izle
  currentPage.value = newPage ? parseInt(newPage as string, 10) : 1;
});
const handlePageChange = (page: number) => {
  // Sayfa değiştiğinde URL'i güncelle
  router.push({ path: route.path, query: { page: page } });
};
</script>
