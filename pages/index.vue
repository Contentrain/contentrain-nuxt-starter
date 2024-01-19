<template>
    <div>
        <PagesHomeHero :hero-data="heroData"/>

        <PagesHomeFeatures :features="featuresData"/>

        <PagesHomeContentStructure :content-structure="contentStructureData"/>

        <PagesHomeFeaturesOverview :features-overview="featuresOverviewData" :features-overview-items="featuresOverviewItemsData"/>

        <PagesHomeContentStructure class="md:mb-[144px]" :content-structure="collaborateTeamsData"/>
    </div>
</template>

<script setup lang="ts">
import type { HeroDataInterface } from '~/components/pages/home/Hero.vue';
import type { ContentStructureDataInterface } from '~/components/pages/home/ContentStructure.vue';
import type { FeaturesDataInterface } from '~/components/pages/home/Features.vue';
import type { FeaturesOverviewDataInterface, FeaturesOverviewItemDataInterface } from '~/components/pages/home/FeaturesOverview.vue';

import homeHero from '../contentrain/homeHero/homeHero.json'
const heroData: HeroDataInterface = homeHero[0]

import homeContentStructure from '../contentrain/homeContentStructure/homeContentStructure.json'
const contentStructureData: ContentStructureDataInterface = homeContentStructure[0]

import homeCollaborateTeams from '../contentrain/homeCollaborateTeams/homeCollaborateTeams.json'
const collaborateTeamsData: ContentStructureDataInterface = homeCollaborateTeams[0]

import homeFeatures from '../contentrain/homeFeatures/homeFeatures.json'
const featuresData: FeaturesDataInterface[] = homeFeatures

import homeFeaturesOverview from '../contentrain/homeFeaturesOverview/homeFeaturesOverview.json'
const featuresOverviewData: FeaturesOverviewDataInterface = homeFeaturesOverview[0]

import homeFeaturesOverviewItems from '../contentrain/homeFeaturesOverviewItems/homeFeaturesOverviewItems.json'
const featuresOverviewItemsData: FeaturesOverviewItemDataInterface[] = homeFeaturesOverviewItems

</script>
