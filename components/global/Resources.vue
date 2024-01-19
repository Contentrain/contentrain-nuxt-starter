<template>
    <section class="py-10 md:py-[192px] bg-gradient-to-b from-[#0331FC]/[0.08] to-transparent">

        <div class="container max-w-7xl">

            <div class="text-center md:pb-4">

                <span class="py-1.5 px-4 rounded-full bg-indigo-100 text-primary-700 font-medium text-sm"
                      v-text="resources?.subtitle"/>

                <h2 class="block font-aeonik font-medium text-3xl md:text-4xl md:leading-tight xl:max-w-3xl my-6 mx-auto"
                    v-text="resources?.title"/>

            </div>

            <div class="flex flex-wrap gap-4">
                <div v-for="(item, i) in resourcesItems" :key="`item-${i}`" class="w-full md:w-[calc(50%-8px)] group cursor-pointer rounded-xl" :class="item.color">
                    <nuxt-link :to="item.link"
                               class="flex rounded-xl items-center p-6 text-white md:min-h-[140px] min-h-[88px] hover:shadow-[0_0_0_4px_rgba(59,130,246,0.40)]">

                        <nuxt-icon :name="item.icon" style="--size: 28px"/>

                        <h3 class="text-sm md:text-lg font-medium ml-4 flex-grow" v-text="item.title"/>

                        <nuxt-icon name="arrow-top-right" class="invisible group-hover:visible" style="--size: 22px"/>

                    </nuxt-link>
                </div>
            </div>

        </div>

    </section>
</template>

<script setup lang="ts">

import type { PropType } from 'vue'
export interface ResourcesDataInterface {
    title: string
    subtitle: string
}
export interface ResourcesItemsDataInterface {
    title: string
    icon: string
    link: string,
    color: string
}
defineProps({
  resources : {
    type: Object as PropType<ResourcesDataInterface>
  },
  resourcesItems : {
    type: Object as PropType<ResourcesItemsDataInterface[]>
  }
})
</script>
