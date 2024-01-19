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
                <ButtonBasic size="md" rounded variant="solid" color="primary" class="mr-1">Get started — Free</ButtonBasic>
            </div>

            <div class="h-[220px] w-[80%] xl:w-[60%] mx-auto rounded-t-lg">
                <img
                    src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
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
    imageSrc: string
    imageAlt: string
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
  contentStructure : {
    type: Object as PropType<ContentStructureDataInterface>
  },
  buttons : {
    type: Object as PropType<ButtonDataInterface>
  }
})
</script>
