<template>
    <div class="auth-wrapper">
        <Button type="ghost" class="mr-1 flex-grow lg:flex-grow-0" :label="headerData?.leftButtonLabel" :href="headerData?.leftButtonLink">
        </Button>
        <Button class="ml-1 flex-grow lg:flex-grow-0" :label="headerData?.rightButtonLabel" :href="headerData?.rightButtonLink">
        </Button>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
    headerData: {
        type: Object
    }
})
</script>

<style lang="postcss">
.auth-wrapper {
    @apply flex items-center whitespace-nowrap w-full lg:w-auto
}
</style>
