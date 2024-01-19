<template>
    <div>
        <ul class="share-links pb-2">
            <li class="share-links__item" v-for="(linkItem, i) in shareLinks" :key="`share-link-${i}`">
                <NuxtLink v-if="linkItem.icon !== 'links'" :to="linkItem.link" target="_blank" rel="noopener noreferrer"
                        :title="linkItem.name" :aria-label="linkItem.name" class="share-links__link shadow-sm bg-white bg-gradient-to-b from-[#3b82f621] to-transparent border border-[#E9F0F9]">
                    <nuxt-icon :name="linkItem.icon" class="text-primary-400" style="--size: 20px"/>
                </NuxtLink>
                <button v-else :title="linkItem.name" :aria-label="linkItem.name" class="share-links__link shadow-sm bg-white bg-gradient-to-b from-[#3b82f621] to-transparent border border-[#E9F0F9] hover:bg-primary-50" @click="copyLink">
                    <nuxt-icon :name="linkItem.icon" class="text-primary-400" style="--size: 20px"/>
                </button>
            </li>
        </ul>
        <span class="font-medium text-sm text-slate-600">Share this article</span>
    </div>
</template>

<script setup lang="ts">

const runtimeConfig = useRuntimeConfig()
const baseURL = runtimeConfig.public.baseURL

const props = defineProps<{
    url: string,
    text: string,
}>()

const url = computed(()=> `${baseURL}${props.url}`)

const shareLinks = [
    {
        name: 'Twitter',
        icon: 'twitter',
        link: `https://twitter.com/intent/tweet?text=${props.text} ${url.value}`
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin-gray',
        link: `https://www.linkedin.com/sharing/share-offsite/?mini=true&url=${url.value}`
    },
    {
        name: 'Copy Link',
        icon: 'links',
        link: url.value
    },
]

const copyLink = async () => {
    await navigator.clipboard.writeText(url.value)
}

</script>

<style lang="postcss">

.share-links {

    &__link{
        @apply block p-2 text-xs text-gray-400 border mx-2 rounded-full
    }

    @apply flex list-none justify-center w-full
}

</style>
