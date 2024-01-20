<template>
    <section class="container py-10 md:py-[144px]">
        <div class="flex flex-wrap justify-center pt-10 md:pt-[72px] max-w-7xl mx-auto border border-indigo-50 text-center rounded-lg bg-gradient-to-b from-[#F5FAFF] to-transparent">

          <span class="py-1.5 px-4 rounded-full bg-indigo-100 text-primary-700 font-medium text-sm"
                v-text="contentStructure?.subtitle"/>

            <div class="w-full"/>

            <h2 class="block font-aeonik font-medium text-3xl md:text-4xl md:leading-tight xl:max-w-3xl my-6 mx-auto">
                {{ contentStructure?.title }}
            </h2>

            <div class="w-full"/>

            <p class="block xl:max-w-3xl text-sm md:text-base text-gray-600 font-normal mb-8">
                {{ contentStructure?.description }}
            </p>

            <div class="flex justify-center w-full mb-10 md:mb-22">
                <Button class="mr-1" :href="contentStructure?.buttonlink">{{contentStructure?.buttonlabel}}</Button>
            </div>

            <div v-if="contentStructure && contentStructure.imagesrc" class="h-[220px] w-[80%] xl:w-[60%] mx-auto rounded-t-lg">
                <img
                    :src="contentStructure?.imagesrc.split('public')[1]" :alt="contentStructure?.imagealt"
                    height="200" width="100%" class="h-full w-full object-cover rounded-t-lg"/>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
export interface ContentStructureDataInterface {
    title: string
    subtitle: string
    description: string
    imagesrc: string
    imagealt: string
    buttonlabel: string
    buttonlink: string
}
defineProps({
  contentStructure : {
    type: Object as PropType<ContentStructureDataInterface>
  }
})
</script>
