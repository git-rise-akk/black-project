<template>
    <div :class="['Close', {'Close_blur': blur}]">
        <nuxt-icon class="close" name="close" filled />
    </div>
</template>

<script>
    export default {
        props: {
            blur: {
                type: Boolean,
                default: false,
            },
        },
    }    
</script>

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
            z-index: 1;
        }
        &:hover .nuxt-icon {
            transform: rotate(-180deg);
        }
        &_blur {
            &::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 10.8rem;
                height: 10.8rem;
                border-radius: 50%;
                background: #000;
                filter: blur(6rem);
            }
        }
    }
</style>