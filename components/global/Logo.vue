<template>
    <NuxtLink to="/" title="Contentrain" class="logo">
        <img :src="logosrc" :alt="logoalt" width="189" height="38"/>
    </NuxtLink>
</template>
<script setup lang="ts">

defineProps({
  logosrc : {
    type: String,
    deafult: "/images/logo.svg"
  },
  logoalt : {
    type: String,
    default: "Contentrain"
  },
})
</script>
<style lang="postcss">
.logo{
    @apply py-3 lg:py-6 inline-block
}
</style>
