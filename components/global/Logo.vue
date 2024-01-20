<template>
    <NuxtLink to="/" title="Contentrain" class="logo">
        <div v-if="logosrc" class="flex max-w-[189px] h-[38px]">
          <img :src="logosrc.split('public')[1]" :alt="logoalt" width="189" height="38"/>
        </div>
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
<style lang="postcss">
.logo{
    @apply py-3 lg:py-6 inline-block w-[189px] h-[38px]
}
</style>
