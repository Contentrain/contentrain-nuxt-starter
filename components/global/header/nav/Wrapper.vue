<template>
  <nav class="main-navbar" :class="{'shown': shown}">

    <div class="flex justify-end self-start p-8 w-full lg:hidden">
      <Button type="ghost" class="py-3" @click="closeNavMenu">
        <nuxt-icon name="close" class="text-slate-400" style="--size: 16px"/>
      </Button>
    </div>

    <HeaderNavMenuList @click="closeNavMenu" :nav-menu="navigationItemsData"/>

    <div class="self-end p-6 w-full lg:hidden">

      <HeaderAuth class="mb-6" :header-data="headerData"/>

      <SocialLinks/>

    </div>
  </nav>
</template>

<script setup lang="ts">

import { navMenuStore } from '#imports';
import navigationItems from '../../../../contentrain/navigationitems/navigationitems.json'
const navigationItemsData = navigationItems
import header from '../../../../contentrain/header/header.json'
const headerData = header[0]

const closeNavMenu = (): void => {
  navMenuStore.show = false
}

const shown = computed<boolean>(() => navMenuStore.show)

</script>

<style lang="postcss">

.main-navbar {

  &__list {
    @apply flex flex-wrap lg:flex-nowrap m-0 p-0 list-none self-start w-full lg:w-auto
  }

  &__item {
    @apply flex w-full lg:w-auto relative
  }

  &__link {
    @apply flex items-center px-6 py-3 text-lg lg:py-6 lg:px-4 lg:text-base font-medium w-full
  }

  &.shown {
    @apply w-full h-screen rounded-none shadow-lg
  }

  @apply fixed lg:relative w-0 h-0 right-0 top-0 rounded-b-full rounded-tl-full rounded overflow-hidden lg:overflow-visible flex flex-wrap lg:h-auto lg:w-auto lg:right-auto lg:top-auto lg:justify-center lg:flex-nowrap bg-white lg:bg-transparent ease-in-out duration-300 z-50
}

</style>
