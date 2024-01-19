<template>
    <div>
        <PagesProductsHero :products="productHeroData"/>

        <PagesProductsFeatures :features="featuresData"/>

        <PagesProductsContentStructure :content-structure="contentStructureData"/>

        <PagesProductsFeaturesOverview :features-overview="featuresOverviewData" :features-overview-items="featuresOverviewItemsData"/>

        <PagesProductsContentStructure class="md:mb-[144px]" :content-structure="productsCollaborateTeamsData"/>
    </div>
</template>

<script setup lang="ts">
import type { ProductsDataInterface } from '~/components/pages/products/Hero.vue';
import type { ContentStructureDataInterface } from '~/components/pages/products/ContentStructure.vue';
import type { FeaturesDataInterface } from '~/components/pages/products/Features.vue';
import type { FeaturesOverviewDataInterface, FeaturesOverviewItemDataInterface } from '~/components/pages/products/FeaturesOverview.vue';

import pagesProductsHeroData from '../content/contentrain/productsHero/productsHero.json'
const productHeroData: ProductsDataInterface = pagesProductsHeroData[0]

import pagesContentStructureData from '../content/contentrain/productsContentStructure/productsContentStructure.json'
const contentStructureData: ContentStructureDataInterface = pagesContentStructureData[0]

import pagesProductsCollaborateTeamsData from '../content/contentrain/productsCollaborateTeams/productsCollaborateTeams.json'
const productsCollaborateTeamsData: ContentStructureDataInterface = pagesProductsCollaborateTeamsData[0]

import pagesFeaturesData from '../content/contentrain/productsFeatures/productsFeatures.json'
const featuresData: FeaturesDataInterface[] = pagesFeaturesData

import pagesFeaturesOverviewData from '../content/contentrain/productsFeaturesOverview/productsFeaturesOverview.json'
const featuresOverviewData: FeaturesOverviewDataInterface = pagesFeaturesOverviewData[0]

import pagesFeaturesOverviewItemsData from '../content/contentrain/productsFeaturesOverviewItems/productsFeaturesOverviewItems.json'
const featuresOverviewItemsData: FeaturesOverviewItemDataInterface[] = pagesFeaturesOverviewItemsData

</script>
