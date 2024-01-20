<template>
    <section class="main-hero-bg py-10 md:pt-[160px] md:pb-[104px]">
        <div class="container flex flex-wrap justify-center text-center max-w-4xl">

            <h1 class="block font-aeonik font-medium text-3xl md:text-6xl md:leading-tight mb-6">
                {{ detailData?.title }}
            </h1>

            <div class="w-full"/>

            <p class="block text-sm md:text-xl text-gray-600 font-normal mb-8">
                {{ detailData?.description }}
            </p>

            <div class="flex justify-center w-full mb-10 lg:mb-16">
                <Button :label="detailData?.leftbuttonlabel" class="mr-1" :href="detailData?.leftbuttonlink"></Button>
                <Button type="ghost" :label="detailData?.rightbuttonlabel" class="ml-1" :href="detailData?.rightbuttonlink"></Button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps({
    detailData : {
    type: Object
  }
})
</script>
