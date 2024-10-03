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
        height: 3.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        -webkit-tap-highlight-color: transparent;
        
        .tablet & {
            top: 1rem;
            right: 3.8rem;;
        }

        .mobile & {
            top: 1rem;
            right: 1rem;
        }
    
        .nuxt-icon {
            transition: transform .3s;
            z-index: 1;
            svg {
                width: 5.6rem;
                height: 5.9rem;

                .tablet & {
                    width: 3.5rem;
                    height: 3.5rem;
                }

                .mobile & {
                    width: 3.5rem;
                    height: 3.5rem;
                }
            }
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

                .tablet & {
                    width: 6.8rem;
                    height: 6.8rem;
                    filter: blur(4rem);
                }

                .mobile & {
                    width: 6.8rem;
                    height: 6.8rem;
                    filter: blur(4rem);
                }
            }
        }
    }
</style>