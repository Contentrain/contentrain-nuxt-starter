<template>
    <NuxtLink to="/" title="Contentrain" class="logo">
        <img :src="logoSrc" :alt="logoAlt" width="189" height="38"/>
    </NuxtLink>
</template>
<script setup lang="ts">

defineProps({
  logoSrc : {
    type: String,
    deafult: "/images/logo.svg"
  },
  logoAlt : {
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
