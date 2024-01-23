<template>
    <div class="pb-72">

        <article v-if="data" class="mx-auto">
            <PagesBlogDetailHero :detail="data"/>

            <div class="max-w-3xl prose mx-auto px-3 lg:px-0">
                <ContentRenderer :value="data">
                    <ContentRendererMarkdown :value="data" />
                </ContentRenderer>
            </div>
        </article>

        <div class="flex flex-wrap flex-col justify-center p-3 md:p-8 mt-24 mx-auto max-w-[640px] border border-indigo-50 text-center rounded-lg bg-gradient-to-b from-[#F5FAFF] to-transparent">

            <div class="text-center mb-8">
                <div v-if="setAuthor?.photosrc" class="h-20 w-20 rounded-full bg-gray-100 overflow-hidden mx-auto mb-2 border shadow-sm">
                    <img height="80" width="80" class="h-full w-full object-cover" :src="setAuthor?.photosrc.split('public')[1]" :alt="data?.authorphotoalt"/>
                </div>

                <strong class="block mb-1 font-aeonik font-medium text-xl" v-text="getAuthor(data?.author)?.fullname"/>
                <span class="block text-primary-500 font-normal text-sm" v-text="setAuthor?.job"/>

            </div>

            <p class="text-gray-600 font-normal" v-text="setAuthor?.description"/>

        </div>

    </div>
</template>

<script setup lang="ts">
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types';
import authors from '../../../contentrain/authors/authors.json'

const route = useRoute()
const slug = route.params.slug as string
const { data } = await useAsyncData(`${route.path}`, () => queryContent<MarkdownParsedContent>('blog').where({ slug: {$eq: slug}
}).findOne())
const getAuthor = (id:string) => {
  const author = authors.find(item => ( item.ID === id ))
  return author
}
const setAuthor = getAuthor(data.value?.author)
</script>
