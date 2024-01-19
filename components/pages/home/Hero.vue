<template>
    <section class="main-hero-bg py-10 md:pt-[160px] md:pb-[104px]">
        <div class="container flex flex-wrap justify-center text-center max-w-4xl">

            <h1 class="block font-aeonik font-medium text-3xl md:text-6xl md:leading-tight mb-6">
                {{ heroData?.title }}
            </h1>

            <div class="w-full"/>

            <p class="block text-sm md:text-xl text-gray-600 font-normal mb-8">
                {{ heroData?.description }}
            </p>

            <div class="flex justify-center w-full mb-10 lg:mb-16">
                <ButtonBasic size="md" rounded variant="solid" color="primary" class="mr-1">See live demo</ButtonBasic>
                <ButtonGhost size="md" rounded class="ml-1">Get started — Free</ButtonGhost>
            </div>

            <img :src="heroData?.imageSrc" :alt="heroData?.imageAlt" class="max-w-7xl w-full">

        </div>
    </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
export interface HeroDataInterface {
    title: string
    description: string
    imageSrc: string
    imageAlt: string
    buttons: object
}
defineProps({
  heroData : {
    type: Object as PropType<HeroDataInterface>
  }
})
</script>
