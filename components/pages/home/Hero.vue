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
                <Button :label="heroData?.leftbuttonlabel" class="mr-1"></Button>
                <Button type="ghost" label="Get started — Free" class="ml-1"></Button>
            </div>

            <div v-if="heroData && heroData.imagesrc">
                <img :src="heroData?.imagesrc.split('public')[1]" :alt="heroData?.imagealt" class="max-w-7xl w-full">
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
export interface HeroDataInterface {
    title: string
    description: string
    imagesrc: string
    imagealt: string
    leftbuttonlabel: string
    leftbuttonlink: string
    rightbuttonlabel: string
    rightbuttonlink: string
}
defineProps({
  heroData : {
    type: Object as PropType<HeroDataInterface>
  }
})
</script>
