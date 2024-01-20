<template>
    <NuxtLink v-if="logosrc" to="/" title="Contentrain" class="py-3 lg:py-6 inline-block">
          <img :src="logosrc.split('public')[1]" :alt="logoalt" width="189" height="38"/>
    </NuxtLink>
</template>
<script setup lang="ts">

defineProps({
  logosrc : {
    type: String,
    default: "public/images/logo.svg"
  },
  logoalt : {
    type: String,
    default: "Contentrain"
  },
})
</script>
