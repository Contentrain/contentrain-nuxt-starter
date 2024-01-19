<template>
    <div>
        <div class="pb-72 lg:px-0 px-3">
            <FooterBanner/>
        </div>
        <footer class="bg-[#F5FAFF]">
            <div class="container pt-10 md:pt-16 max-w-7xl">

                <div class="text-center mb-10 md:mb-16">

                    <Logo :logo-src="footerData?.logoSrc" :logo-alt="footerData?.logoAlt"/>

                    <p class="block xl:max-w-5xl text-sm md:text-base text-gray-600 mx-auto"
                    v-text="footerData?.description"/>

                </div>

                <div class="flex flex-wrap lg:flex-nowrap border-t py-3 md:mt-6 text-sm text-gray-700 text-center">

                    <div class="w-full lg:w-3/1 py-2 lg:py-1 md:text-left">
                        <span v-text="footerData?.leftBottomText"/>
                    </div>

                    <div class="w-full lg:w-3/1 py-2 lg:py-1 md:text-center">
                        <span v-text="footerData?.middleBottomText"/>
                    </div>

                    <div class="w-full lg:w-3/1 py-2 lg:py-1">
                        <SocialLinks class="lg:!justify-end"/>
                    </div>

                </div>

            </div>
        </footer>
    </div>

</template>

<script setup lang="ts">

import footer from '../../../content/contentrain/footer/footer.json'
const footerData = footer[0]
</script>
