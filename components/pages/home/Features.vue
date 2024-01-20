<template>
    <section class="container py-10 md:py-[144px]">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">

            <div v-for="(item, i) in features" :key="`item-${i}`"
                class="p-8 rounded-xl border border-indigo-50 bg-gradient-to-b from-[#F5FAFF] to-transparent hover:shadow-[0_0_0_4px_rgba(59,130,246,0.40)]">

                <span class="inline-block p-3 mb-5 rounded-xl text-primary-500 bg-gradient-to-b from-[#3b82f621] to-transparent border border-[#E9F0F9]">
                    <nuxt-icon :name="item.icon" style="--size: 24px"/>
                </span>

                <h2 class="md:text-lg font-medium mb-2" v-text="item.title"/>

                <p class="text-sm text-gray-600 line-clamp-2 mb-6" v-text="item.description"/>

                <Button type="ghost" size="md" :href="item.buttonlink" :label="item.buttonlabel"></Button>

            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
export interface FeaturesDataInterface {
    title: string
    icon: string
    description: string
    buttonlink: string
    buttonlabel: string
}
defineProps({
  features : {
    type: Object as PropType<FeaturesDataInterface[]>
  }
})
</script>
