<template>
    <div class="page page-test">
        <div class="page-test__container">
            <InputMask id="basic" v-model="value" mask="+7 (999) 999-99-99" placeholder="+7 (999) 999-99-99" />
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .page-test {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;

        &__container {
            height: 75vh;
            width: 50vw;
            border: 1px solid red;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
</style>