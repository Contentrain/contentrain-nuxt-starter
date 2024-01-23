<template>
    <div class="pb-72">

        <article v-if="data" class="mx-auto">
            <section class="main-hero-bg py-10 md:pt-[80px] mb-10">
        <div class="container flex flex-wrap justify-center text-center max-w-3xl">

            <span class="py-1.5 px-4 rounded-full bg-indigo-100 text-primary-700 font-medium text-sm capitalize"
                  v-text="data?.category"/>

            <div class="w-full"/>

            <h1 class="block font-aeonik font-medium text-3xl md:leading-tight my-6 max-w-xl"
                v-text="data?.title"/>

            <div class="w-full"/>

            <p class="block md:text-xl text-gray-600 font-normal mb-8"
                v-text="data?.description"/>

            <div class="flex flex-wrap justify-center w-full flex-col items-center">
                <div class="flex items-center mb-6">
                    <div v-if="data" class="h-16 w-16 rounded-full bg-gray-100 overflow-hidden border shadow-sm">
                        <img height="64" width="64" class="h-full w-full object-cover" :src="getAuthor(data?.author)?.photosrc.split('public')[1]" :alt="getAuthor(data?.author)?.photoalt"/>
                    </div>

                    <div class="pl-2 text-left">
                        <span class="block font-aeonik font-medium text-xl" v-text="getAuthor(data?.author)?.fullname"/>
                        <span class="block text-gray-600 font-normal text-sm" v-text="formatDate(new Date(data?.createdAt).toLocaleDateString())"/>
                    </div>

                </div>

                <!-- <ShareButtons :url="route.fullPath" :text="data?.title"/> -->

            </div>

        </div>
    </section>

            <div class="max-w-3xl prose mx-auto px-3 lg:px-0">
                <ContentRenderer :value="data">
                    <ContentRendererMarkdown :value="data" />
                </ContentRenderer>
            </div>
        </article>

        <div class="flex flex-wrap flex-col justify-center p-3 md:p-8 mt-24 mx-auto max-w-[640px] border border-indigo-50 text-center rounded-lg bg-gradient-to-b from-[#F5FAFF] to-transparent">

            <div class="text-center mb-8">
                <div v-if="getAuthor(data?.author)?.photosrc" class="h-20 w-20 rounded-full bg-gray-100 overflow-hidden mx-auto mb-2 border shadow-sm">
                    <img height="80" width="80" class="h-full w-full object-cover" :src="getAuthor(data?.author)?.photosrc.split('public')[1]" :alt="data?.authorphotoalt"/>
                </div>

                <strong class="block mb-1 font-aeonik font-medium text-xl" v-text="getAuthor(data?.author)?.fullname"/>
                <span class="block text-primary-500 font-normal text-sm" v-text="getAuthor(data?.author)?.job"/>

            </div>

            <p class="text-gray-600 font-normal" v-text="getAuthor(data?.author)?.description"/>

        </div>

    </div>
</template>

<script setup lang="ts">
import authors from '../contentrain/authors/authors.json'

const route = useRoute()
const enteredRoute = route.fullPath.split('/')[1]
const data = await queryContent("use-case").where({ slug: enteredRoute }).findOne()
const getAuthor = (id:string) => {
  const author = authors.find(item => ( item.ID === id ))
  return author
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
