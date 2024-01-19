<script lang="ts" setup>
import type { ButtonTag, Block, Filter, Rounded, Size } from './button-types'


export interface Button {
  tag?: ButtonTag
  // /**
  //  * @default 'outline' bu button componentinin default varianti outline'dir.
  //  */
  // variant?: Variant
  // /**
  //  * @default 'secondary' bu button componentinin default coloru secondary'dir.
  //  */
  // color?: Color
  filter?: Filter
  size?: Size
  rounded?: Rounded
  block?: Block
}

withDefaults(defineProps<Button>(), {

})
</script>

<template>
  <ButtonBasic
    class="!border-border !text-heading hover:bg-secondary-50 bg-white"
    variant="outline"
    color="secondary"
    :tag="tag"
    :filter="filter"
    :size="size"
    :rounded="rounded"
    :block="block"
  >
    <template v-if="!!$slots.prepend" #prepend>
      <slot name="prepend" />
    </template>
    <template v-if="!!$slots.append" #append>
      <slot name="append" />
    </template>
    <template v-if="!!$slots.icon" #icon>
      <slot name="icon" />
    </template>
    <slot />
  </ButtonBasic>
</template>
