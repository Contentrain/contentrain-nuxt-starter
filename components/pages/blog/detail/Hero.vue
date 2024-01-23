<template>
    <section class="main-hero-bg py-10 md:pt-[80px] mb-10">
        <div class="container flex flex-wrap justify-center text-center max-w-3xl">

            <span class="py-1.5 px-4 rounded-full bg-indigo-100 text-primary-700 font-medium text-sm capitalize"
                  v-text="getCategory(detail?.category)?.name"/>

            <div class="w-full"/>

            <h1 class="block font-aeonik font-medium text-3xl md:leading-tight my-6 max-w-xl"
                v-text="detail?.title"/>

            <div class="w-full"/>

            <p class="block md:text-xl text-gray-600 font-normal mb-8"
                v-text="detail?.description"/>

            <div class="flex flex-wrap justify-center w-full flex-col items-center">
                <div class="flex items-center mb-6">
                    <div v-if="detail" class="h-16 w-16 rounded-full bg-gray-100 overflow-hidden border shadow-sm">
                        <img height="64" width="64" class="h-full w-full object-cover" :src="getAuthor(props.detail?.author)?.photosrc.split('public')[1]" :alt="getAuthor(props.detail?.author)?.photoalt"/>
                    </div>

                    <div class="pl-2 text-left">
                        <span class="block font-aeonik font-medium text-xl" v-text="getAuthor(props.detail?.author)?.fullname"/>
                        <span class="block text-gray-600 font-normal text-sm" v-text="formatDate(new Date(detail?.createdAt).toLocaleDateString())"/>
                    </div>

                </div>

                <ShareButtons :url="route.fullPath" :text="detail?.title"/>

            </div>

        </div>
    </section>
</template>

<script setup lang="ts">

const route = useRoute()

const props = defineProps({
        detail: {
            type: Object
        }
    }
    )
import categories from '../../../../contentrain/blogcategories/blogcategories.json'
import authors from '../../../../contentrain/authors/authors.json'

const getAuthor = (id:string) => {
  const author = authors.find(item => ( item.ID === id ))
  return author
}
const getCategory = (id:string) => {
  const category = categories.find(category => ( category.ID === id ))
  return category
}
function formatDate(inputDate:string) {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr',
        'May', 'Jun', 'Jul', 'Aug',
        'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const parts = inputDate.split('/');
    const month = months[parseInt(parts[0], 10) - 1];
    const day = parseInt(parts[1], 10);
    const year = parts[2];

    return `${month} ${day}, ${year}`;
}
</script>
