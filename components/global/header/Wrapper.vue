<template>
  <header class="flex">
      <div class="container flex justify-between items-center !px-3">
        <div>
            <Logo :logosrc="headerData?.logosrc" :logoalt="headerData?.logoalt"/>
        </div>
        <div>
            <HeaderNavWrapper/>
        </div>
        <div class="hidden lg:flex">
            <HeaderAuth :header-data="headerData"/>
        </div>
        <div class="lg:hidden flex">
            <Button type="ghost" class="py-3 bg-white xl:hidden" @click="navMenuStore.setMenuVisibility(true)">
                <nuxt-icon name="menu" style="--size: 16px" class="text-slate-400"/>
            </Button>
        </div>
      </div>
  </header>
</template>

<script setup lang="ts">
import header from '../../../contentrain/header/header.json'
const headerData = header[0]
</script>
