<template>
    <section class="container max-w-3xl px-3">

        <div class="h-[380px] w-full rounded-lg bg-gray-100 overflow-hidden shadow mb-6">
            <img height="380" width="100%" class="h-full w-full object-cover" :src="detail.image"/>
        </div>

        <div class="article" v-html="detail.content"/>

        <div class="flex flex-wrap justify-center p-3 md:p-8 my-24 mx-auto max-w-[640px] border border-indigo-50 text-center rounded-lg bg-gradient-to-b from-[#F5FAFF] to-transparent">

            <div class="text-center mb-6">

                <div class="h-20 w-20 rounded-full bg-gray-100 overflow-hidden mx-auto mb-2">
                    <img height="80" width="80" class="h-full w-full object-cover" :src="detail.authorPhotoSrc" :alt="detail?.authorPhotoAlt"/>
                </div>

                <strong class="block text-xl mb-1" v-text="detail.authorFullName"/>
                <span class="block text-primary-500 font-normal text-sm" v-text="detail.authorJob"/>

            </div>

            <p class="text-gray-600 font-normal" v-text="detail.authorDescription"/>

        </div>

    </section>
</template>

<script setup lang="ts">
const props = defineProps<{
    detail: {
        category: string,
        title: string,
        description: string,
        created_at: string,
        image?: string,
        content?: string,
        authorFullName: string,
        authorPhotoSrc: string,
        authorPhotoAlt: string,
        authorJob: string,
        authorDescription: string,
    }
}>()
</script>

<style lang="postcss" scoped>
.article{

    h1{
        @apply text-3xl
    }

    h2{
        @apply text-2xl
    }

    h3{
        @apply text-xl
    }

    h1, h2, h3, h4, h5{
        font-weight: bold;
    }

    h1, h2, h3, h4, h5, ul, ol, p{
        margin-bottom: 1rem;
    }

    ul, ol, p{
        @apply text-gray-600 leading-relaxed
    }

    p:has(img){
        text-align: center;
    }

    img{
        border-radius: 1rem;
        max-width: 100%;
        height: auto;
    }
}
</style>
