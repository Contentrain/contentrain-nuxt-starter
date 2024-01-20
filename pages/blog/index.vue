<template>
    <div>
        <PagesBlogHero v-if="!route.params.slug"/>

        <PagesBlogList :data="data"/>

        <Resources v-if="!route.params.slug" :resources="resource" :resources-items="resourceItems" />
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
import type { ResourcesDataInterface, ResourcesItemsDataInterface } from '~/components/global/Resources.vue';
import resourceHeroData from '../../contentrain/resourceshero/resourceshero.json'
import resourceItemsData from '../../contentrain/resourcesitems/resourcesitems.json'
const resource: ResourcesDataInterface = resourceHeroData[0]
const resourceItems: ResourcesItemsDataInterface[] = resourceItemsData

const data = await queryContent("blog").find()
</script>
