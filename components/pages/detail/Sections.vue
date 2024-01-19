<template>
    <div>
         <section v-for="(item, index) in detailData" :key="index" class="text-center lg:text-left lg:mb-[128px]">
            <div class="container flex flex-wrap lg:flex-nowrap lg:gap-x-32 items-center max-w-7xl">

                <div class="border border-indigo-50 rounded-xl overflow-hidden h-[300px] md:h-[400px] w-full lg:w-[50%]" :class="index % 2 === 1 ? 'lg:order-1' : '' ">
                    <img width="100%" class="h-full w-full object-cover"
                            :src="item?.imageSrc" :alt="item?.imageAlt"/>
                </div>

                <div class="py-6 lg:w-[50%]">

                    <h2 class="block font-aeonik font-medium text-3xl md:text-4xl md:leading-tight mb-4 lg:mb-6 text-slate-900"
                        v-text="item?.title"/>

                    <p class="block text-sm md:text-base text-slate-600 mb-4 lg:mb-6"
                    v-text="item?.description"/>

                    <ButtonGhost size="sm" rounded class="ml-1">{{item?.buttonLabel}}</ButtonGhost>

                </div>

            </div>
        </section>
    </div>
</template>

<script setup lang="ts">

defineProps({
    detailData : {
    type: Object
  }
})

</script>
