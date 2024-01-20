<template>
    <div class="auth-wrapper">
        <Button type="ghost" class="mr-1 flex-grow lg:flex-grow-0" :label="headerData?.leftbuttonlabel" :href="headerData?.leftbuttonlink">
        </Button>
        <Button class="ml-1 flex-grow lg:flex-grow-0" :label="headerData?.rightbuttonlabel" :href="headerData?.rightbuttonlink">
        </Button>
    </div>
</template>

<script setup lang="ts">
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
