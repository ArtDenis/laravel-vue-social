<template>
    <div class="container">
        <h1>Vue Router!</h1>
        <my-input></my-input>
        <my-button>Регистрация</my-button>
    </div>
</template>

<script>
    export default {
        name: "Container"
    }
</script>

<style scoped lang="scss">
    .container {
        max-width: 120rem;
        margin: 8rem auto;
        background-color: var(--color-gray-light);
        box-shadow: var(--shadow-dark);
        min-height: 50rem;

        @media only screen and (max-width: 75rem) {
            margin: 0;
            max-width: 100%;
            width: 100%;
        }
    }
</style>