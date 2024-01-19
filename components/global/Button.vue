<template>
  <div>
    <span v-if="type==='ghost'">
      <button class="!border-border !text-heading hover:bg-secondary-50 bg-white outline-none focus-visible:ring-4 transition-transform active:translate-y-0.5 disabled:translate-y-0 cursor-pointer disabled:cursor-not-allowed text-base hover:text-secondary-400 disabled:text-secondary-500 border border-solid focus-visible:ring-secondary-500/40 rounded-lg" :class="size==='lg' ? 'text-base  py-2 px-5' : 'text-sm py-1.5 px-4'">{{ label }}
      <slot/>
      </button>
    </span>
    <span v-else>
      <button class="outline-none focus-visible:ring-4 transition-colors active:translate-y-0.5 disabled:translate-y-0 cursor-pointer disabled:cursor-not-allowed text-base bg-primary-500 hover:bg-primary-400 disabled:bg-secondary-500 text-white disabled:text-secondary-300 border-primary-500 hover:border-primary-400 disabled:border-secondary-500 border border-solid focus-visible:ring-primary-500/40 rounded-lg" :class="size==='lg' ? 'text-base  py-2 px-5' : 'text-sm py-1.5 px-4'">
       <slot/>
        {{ label }}
      </button>
    </span>
  </div>
</template>
<script setup lang="ts">
defineProps({
  type : {
    type: String,
    default: "primary"
  },
  size : {
    type: String,
    default: "lg"
  },
  label: {
    type: String
  }
})
</script>