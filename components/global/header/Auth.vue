<template>
    <div class="auth-wrapper">
        <Button type="ghost" class="mr-1 flex-grow lg:flex-grow-0" label="Sign in">
        </Button>
        <Button class="ml-1 flex-grow lg:flex-grow-0" label="Try for free">
        </Button>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

interface ButtonDataInterface {
    label: string
    link: string
    page: string
    section: string
    index: number
}
defineProps({
    buttons : {
        type: Object as PropType<ButtonDataInterface>
    },
    headerButtons: {
        type: Object
    }
})
</script>

<style lang="postcss">
.auth-wrapper {
    @apply flex items-center whitespace-nowrap w-full lg:w-auto
}
</style>
