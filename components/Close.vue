<template>
    <div class="Close">
        <nuxt-icon class="close" name="close" filled />
    </div>
</template>

<style lang="scss">
    .Close {
        position: absolute;
        top: 4rem;
        right: 6rem;
        width: 3.5rem;
        height: 3.8rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        .nuxt-icon {
            transition: transform .3s;
        }
        &:hover .nuxt-icon {
            transform: rotate(-180deg);
        }
    }
</style>