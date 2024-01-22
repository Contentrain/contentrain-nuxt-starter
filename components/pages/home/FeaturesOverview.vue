<template>
  <section class="container py-10 md:py-[144px] flex flex-wrap justify-center text-center">

        <span class="py-1.5 px-4 rounded-full bg-indigo-100 text-primary-700 font-medium text-sm"
              v-text="featuresOverview?.subtitle"/>

    <div class="w-full"/>

    <h2 class="block font-aeonik font-medium text-3xl md:text-4xl md:leading-tight xl:max-w-3xl my-6 mx-auto">
      {{ featuresOverview?.title }}
    </h2>

    <div class="w-full"/>

    <p class="block xl:max-w-3xl text-sm md:text-base text-gray-600 font-normal mb-16">
      {{ featuresOverview?.description }}
    </p>

    <div class="flex flex-wrap md:flex-nowrap w-full max-w-7xl gap-4">

      <div class="overflow-auto md:w-[50%]">
        <div class="flex flex-nowrap md:flex-wrap gap-2 md:gap-4 font-medium h-full">

          <template v-for="(item, i) in featuresOverviewItems" :key="`item-${i}`">
            <button v-text="item.title" @click="active = i" :class="active === i ? 'from-[#3b82f621]': 'from-[#F5FAFF]'"
                    class="border border-indigo-50 hover:border-indigo-200 hover:from-[#3b82f621] hover:shadow-[inset_0_0_0_2px_rgba(59,130,246,0.40)] rounded-xl bg-gradient-to-b to-transparent md:w-full p-3 md:p-6 text-left whitespace-nowrap"/>
          </template>

        </div>
      </div>

      <div class="flex md:w-[50%]">
        <template v-for="(item, i) in featuresOverviewItems" :key="`item-${i}`">
          <template v-if="active === i">
            <NuxtLink
                class="block border-2 border-indigo-50 rounded-xl overflow-hidden bg-gradient-to-b from-[#F5FAFF] to-transparent w-full px-6 pt-6 text-center">

              <h3 v-text="item.title" class="font-medium text-xl mb-3"/>

              <p v-text="item.description" class="text-sm text-gray-600 line-clamp-2 mb-4"/>

              <Button type="ghost" size="sm" rounded>
                Learn more
              </Button>

              <div v-if="item && item.imagesrc" class="border-t border-l border-r rounded-t-xl h-[230px] overflow-hidden mt-6">
                <img
                    :src="item.imagesrc.split('public')[1]" :alt="item.imagealt"
                    height="200" width="100%" class="h-full w-full object-cover"/>
              </div>

            </NuxtLink>
          </template>
        </template>
      </div>

    </div>

  </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
export interface FeaturesOverviewDataInterface {
    title: string
    subtitle: string
    description: string
    imagesrc: string
    imagealt: string
}
export interface FeaturesOverviewItemDataInterface {
    title: string
    description:string
    imagesrc: string
    imagealt: string
    buttonlabel: string
    buttonlink: string
}

defineProps({
  featuresOverview : {
    type: Object as PropType<FeaturesOverviewDataInterface>
  },
  featuresOverviewItems : {
    type: Object as PropType<FeaturesOverviewItemDataInterface[]>
  }
})
const active = ref<number>(0);

</script>
