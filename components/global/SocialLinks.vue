<template>
    <ul class="social-links">

        <li class="social-links__item" v-for="(linkItem, i) in socialLinksData" :key="`social-link-${i}`">
            <NuxtLink :to="linkItem.link" class="social-links__link">
                <span v-text="linkItem.name"></span>
            </NuxtLink>
        </li>

    </ul>
</template>

<script setup lang="ts">
import socialLinks from '../../contentrain/sociallinks/sociallinks.json'
const socialLinksData = socialLinks

</script>

<style lang="postcss">

.social-links {

    &__link{
        @apply px-3 text-xs text-gray-400
    }

    @apply flex list-none justify-center w-full
}

</style>
