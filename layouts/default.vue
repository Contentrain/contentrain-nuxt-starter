<template>
    <div>
        <div class="min-h-[86px]">
            <HeaderWrapper class="fixed w-full bg-white z-50"/>
        </div>
        <div>
            <slot/>
        </div>
        <div>
            <FooterWrapper/>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="postcss">

* {
    outline: none !important;
}

.container {
    @apply sm:mx-auto px-3
}

.nuxt-icon {
    svg {
        width: var(--size) !important;
        height: var(--size) !important;
        margin: initial !important;;
    }
}

.main-hero-bg {

    background-image: url("/images/main-hero.svg");
    background-position: center top;
    background-size: var(--bg-size, auto);

    &.half-lines{
        background-image: url("/images/main-hero.svg");
    }
}
.sm-hero-bg {
    background-image: url("/images/sm-hero.svg");
    background-position: center top;
}
.banner-bg {
    background-image: url("/images/banner-bg.svg");
    background-position: center top;
    background-size: cover;
}

</style>
