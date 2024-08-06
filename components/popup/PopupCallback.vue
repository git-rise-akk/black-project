<template>
    <div class="PopupCallback">
        <div class="PopupCallback_bg"></div>
        <div class="PopupCallback_form"></div>
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
    .PopupCallback {
        .PopupService_bg {
            background-color: rgba($color: #000000, $alpha: .2);
            backdrop-filter: blur(5px);
        }
    }
</style>