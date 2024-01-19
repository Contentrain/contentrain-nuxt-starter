<template>
    <li class="main-navbar__item">
        <NuxtLink :to="prop.navItem.to" :title="prop.navItem.name" class="main-navbar__link hover:text-primary-500" exact-active-class="text-primary-500">
            <span v-text="prop.navItem.name"/>
        </NuxtLink>
    </li>
</template>

<script setup lang="ts">
interface NavItem {
    name: string
    to?: string
}

const prop = defineProps<{
    navItem: NavItem
}>()
</script>

<style lang="postcss">

.mega-menu {

    &__title {
        @apply block text-xs text-gray-400 uppercase font-medium px-8 xl:px-0 mb-3
    }

    &__list {
        @apply list-none m-0 p-0 pb-2 xl:pr-24
    }

    &__item {
        @apply mb-2
    }

    &__link {
        @apply flex items-center font-medium whitespace-nowrap py-2 px-8 xl:px-0 rounded-lg text-sm group-hover:text-primary-500
    }

    &.shown {
        @apply flex fixed xl:absolute z-10 left-0 xl:left-[50%] top-0 xl:top-full w-full xl:w-auto h-[calc(100vh-50px)] xl:h-auto
    }

    &__wrapper{
        @apply xl:block xl:fixed xl:left-0 xl:w-screen xl:top-[79px]
    }

    @apply hidden top-full overflow-auto bg-white xl:p-8 left-full flex-wrap xl:flex-nowrap xl:shadow-xl xl:rounded-lg xl:border border-slate-100 xl:translate-x-[-50%] ease-in-out duration-300
}

</style>
