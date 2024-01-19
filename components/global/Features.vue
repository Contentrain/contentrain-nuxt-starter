<template>
    <section>

        <div class="container py-10 md:py-[176px]">

            <div class="text-center mb-10 md:mb-16">

                <span class="py-1.5 px-4 rounded-full bg-indigo-100 text-primary-700 font-medium text-sm"
                      v-text="features?.subtitle"/>

                <h2 class="block font-aeonik font-medium text-3xl md:text-4xl md:leading-tight xl:max-w-[45%] my-6 mx-auto"
                    v-text="features?.title"/>

                <p class="block xl:max-w-[45%] text-sm md:text-base text-gray-600 mx-auto"
                   v-text="features?.description"/>

            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">

                <div v-for="(item, i) in featuresItems" :key="`item-${i}`"
                    class="p-8 rounded-xl border border-indigo-50 bg-gradient-to-b from-[#F5FAFF] to-transparent hover:shadow-[0_0_0_4px_rgba(59,130,246,0.40)]">

                    <span class="inline-block p-3 mb-5 rounded-xl text-primary-500 bg-gradient-to-b from-[#3b82f621] to-transparent border border-[#E9F0F9]">
                        <nuxt-icon :name="item.icon" style="--size: 24px"/>
                    </span>

                    <h2 class="md:text-lg font-medium mb-2" v-text="item.title"/>

                    <p class="text-sm text-gray-600 line-clamp-2 mb-6" v-text="item.description"/>

                    <ButtonGhost rounded size="sm">
                        Learn more
                    </ButtonGhost>

                </div>

            </div>

        </div>

        <ButtonBasic variant="text" block class="bg-indigo-100 font-medium">

            See all features
            <template #append>
                <nuxt-icon name="arrow-right" class="ml-2" :size="16"/>
            </template>

        </ButtonBasic>

    </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

export interface FeaturesItemDataInterface {
    imageSrc: string
    imageAlt: string
    link: string
    title: string
    description: string
    icon: string
}

export interface FeaturesDataInterface {
    title: string
    description: string
    subtitle: string
    buttons: object
}

interface ButtonDataInterface {
    label: string
    link: string
    page: string
    section: string
    index: number
}

defineProps({
    features : {
    type: Object as PropType<FeaturesDataInterface>
  },
    featuresItems : {
    type: Object as PropType<FeaturesItemDataInterface[]>
  },
  buttons : {
    type: Object as PropType<ButtonDataInterface>
  }
})

</script>
