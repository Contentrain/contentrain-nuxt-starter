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

import homeHero from '../contentrain/homehero/homehero.json'
const heroData: HeroDataInterface = homeHero[0]

import homeContentStructure from '../contentrain/homecontentstructure/homecontentstructure.json'
const contentStructureData: ContentStructureDataInterface = homeContentStructure[0]

import homeCollaborateTeams from '../contentrain/homecollaborateteams/homecollaborateteams.json'
const collaborateTeamsData: ContentStructureDataInterface = homeCollaborateTeams[0]

import homeFeatures from '../contentrain/homefeatures/homefeatures.json'
const featuresData: FeaturesDataInterface[] = homeFeatures

import homeFeaturesOverview from '../contentrain/homefeaturesoverview/homefeaturesoverview.json'
const featuresOverviewData: FeaturesOverviewDataInterface = homeFeaturesOverview[0]

import homeFeaturesOverviewItems from '../contentrain/homefeaturesoverviewitems/homefeaturesoverviewitems.json'
const featuresOverviewItemsData: FeaturesOverviewItemDataInterface[] = homeFeaturesOverviewItems

</script>
