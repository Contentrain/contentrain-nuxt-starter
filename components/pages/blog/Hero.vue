<template>
    <section class="sm-hero-bg py-10 md:pt-[160px]">
        <div class="container flex flex-wrap justify-center text-center max-w-4xl">

            <h1 class="block font-aeonik font-medium text-3xl md:text-6xl md:leading-tight mb-6">
                {{ blogHeroData.title }}
            </h1>

            <p class="block text-sm md:text-xl text-gray-600 font-normal mb-8">
                {{ blogHeroData.description }}
            </p>

            <div class="w-full"/>

            <div class="flex md:justify-center mx-auto max-w-full border rounded-full p-1 bg-white text-sm text-gray-600 font-normal overflow-auto">

                <nuxt-link to="/blog" title="All articles" class="flex py-2 px-4 rounded-full whitespace-nowrap"
                               exact-active-class="bg-primary-500 text-white">All articles
                </nuxt-link>
                <template v-for="(category, i) in blogCategoriesData" :key="`category-${i}`">
                    <nuxt-link :to="`/blog/${category.slug}`" :title="category.name" class="flex py-2 px-4 rounded-full whitespace-nowrap"
                               exact-active-class="bg-primary-500 text-white">{{ category.name }}
                    </nuxt-link>
                </template>

            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import pageBlogHeroData from '../../../contentrain/bloghero/bloghero.json'
const blogHeroData = pageBlogHeroData[0]
import pageBlogCategoriesData from '../../../contentrain/blogcategories/blogcategories.json'
const blogCategoriesData = pageBlogCategoriesData
</script>
