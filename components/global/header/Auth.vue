<template>
    <div class="auth-wrapper">
        <ButtonGhost size="md" rounded variant="outlined" class="mr-1">Sign in
        </ButtonGhost>
        <ButtonBasic size="md" rounded variant="solid" color="primary" class="ml-1">Try for free
        </ButtonBasic>
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
