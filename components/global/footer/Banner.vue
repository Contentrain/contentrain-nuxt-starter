<template>
    <section class="banner-bg max-w-5xl mx-auto border rounded-[40px] shadow-sm">
        <div class="container flex flex-col flex-wrap justify-center text-center max-w-xl py-24">
            <span v-if="footerBannerData && footerBannerData.logosrc" class="pb-10 mx-auto">
                <img height="80" width="80" class="object-cover"
                     :src="footerBannerData?.logosrc.split('public')[1]" :alt="footerBannerData?.logoalt"/>
            </span>
            <h1 class="block font-aeonik font-medium text-3xl md:text-5xl md:leading-tight pb-8">
                {{ footerBannerData.title }}
            </h1>

            <div class="w-full"/>

            <div class="flex justify-center w-full">
                <Button :label="footerBannerData?.leftbuttonlabel" :href="footerBannerData?.leftbuttonlink" class="mr-1"></Button>
                <Button type="ghost" :label="footerBannerData?.rightbuttonlabel" class="ml-1" :href="footerBannerData?.rightbuttonlink"></Button>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import footerBanner from '../../../contentrain/footerbanner/footerbanner.json'
const footerBannerData = footerBanner[0]
</script>

<style lang="postcss">

</style>
