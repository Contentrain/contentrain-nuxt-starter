<template>
    <ul class="main-navbar__list">

        <template v-for="(navItem, i) in navMenu" :key="`nav-item-${i}`">
            <HeaderNavMenuItem :nav-item="navItem"/>
        </template>

    </ul>
</template>

<script setup lang="ts">

defineProps({
    navMenu: {
        type: Object
    }
})
</script>
