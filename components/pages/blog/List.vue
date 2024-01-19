<template>
  <div class="container py-10 md:pb-24">
    <div
      class="flex flex-wrap"
    >
      <!-- <template v-for="(article, i) in paginatedPosts" :key="`article-${i}`">
        <nuxt-link
          :to="`/blog/${article.category.toLowerCase()}/${article.slug}`"
          class="group flex flex-wrap"
        >
          <div
            class="w-full aspect-video rounded-lg bg-gray-100 overflow-hidden relative group-hover:shadow-[0_0_0_4px_rgba(59,130,246,0.40)]"
          >
            <span
              class="inline-block border border-gray:50 px-3 py-1 bg-white text-xs font-semibold rounded absolute top-5 left-5 capitalize"
              v-text="article.category"
            />

            <img
              class="object-contain"
              :src="article.image"
            />

            <div
              class="flex flex-nowrap justify-between items-center w-full absolute bottom-0 left-0 right-0 p-5 text-white"
            >
              <div class="flex items-center">
                <div class="h-12 w-12 rounded-full bg-gray-100 overflow-hidden">
                  <img height="48" width="48" class="h-full w-full object-cover" :src="article.author_photo"/>
                </div>

                <div class="pl-2 text-left">
                  <span class="block font-aeonik font-medium" v-text="article.author_full_name" />
                  <span
                    class="block font-normal text-sm text-white opacity-80"
                    v-text="article.author_job"
                  />
                </div>
              </div>

              <p class="text-base line-clamp-2" v-text="new Date(article.createdAt).toLocaleDateString()" />
            </div>
          </div>

          <div class="pt-6 sm:pr-4">
            <h2
              class="md:text-2xl font-medium mb-2 group-hover:text-primary-500 font-aeonik"
              v-text="article.title"
            />

            <p
              class="text-base text-gray-600 line-clamp-2"
              v-text="article.description"
            />
          </div>
        </nuxt-link>
      </template> -->
      <template
        v-for="post in paginatedPosts"
        :key="post.slug"
      >
        <div class="blog-card w-full md:w-1/3 px-2 pt-4 pb-12 group">
          <nuxt-link :to="`/blog/${post.category.toLowerCase()}/${post.slug}`">
          <div
            class="w-full aspect-video rounded-lg overflow-hidden relative group-hover:shadow-[0_0_0_4px_rgba(59,130,246,0.40)]"
          >
            <span
              class="inline-block border border-gray:50 px-3 py-1 bg-white text-xs font-semibold rounded absolute top-5 left-5 capitalize"
              v-text="post.category"
            />
            <img
              class="object-contain"
              :src="post.image"
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

const postsPerPage = 9;
const pagesToShow = 5;

const currentPage = ref(1);
const router = useRouter();
const route = useRoute();

// Dummy data, gerçek postları buradan çekmelisin
// const allPosts = Array.from({ length: 60 }, (_, index) => ({
//   _path: `/blog/post-${index + 1}`,
//   _dir: "blog",
//   _draft: false,
//   _partial: false,
//   _locale: "",
//   title: `Post ${index + 1} Title`,
//   description: `This is the description for Post ${index + 1}.`,
//   ID: `post-${index + 1}-id`,
//   category: "products",
//   slug: `post-${index + 1}-slug`,
//   image: `https://placekitten.com/800/400?image=${index + 1}`,
//   author_full_name: "John Doe",
//   author_job: "Technical Writer",
//   author_photo: "https://placekitten.com/200/200",
//   author_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   createdAt: Date.now() + index * 1000,
//   updatedAt: Date.now() + index * 1000,
//   body: {
//     type: "root",
//     children: [
//       {
//         type: "element",
//         tag: "h1",
//         props: {},
//         children: [
//           {
//             type: "text",
//             value: `Post ${index + 1} Title`,
//           },
//         ],
//       },
//       {
//         type: "element",
//         tag: "p",
//         props: {},
//         children: [
//           {
//             type: "text",
//             value: `This is the content for Post ${index + 1}.`,
//           },
//         ],
//       },
//     ],
//     toc: {
//       title: "",
//       searchDepth: 2,
//       depth: 2,
//       links: [
//         {
//           id: "section-1",
//           depth: 2,
//           text: "Section 1",
//         },
//         {
//           id: "section-2",
//           depth: 2,
//           text: "Section 2",
//         },
//       ],
//     },
//   },
//   _type: "markdown",
//   _id: `content:Blog:post-${index + 1}.md`,
//   _source: "content",
//   _file: `Blog/post-${index + 1}.md`,
//   _extension: "md",
// }));

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

