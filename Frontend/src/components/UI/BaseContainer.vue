<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    div {
        width: 90%;
        max-width: 40rem;
        margin: 2rem auto;
        padding: 1rem;
        border-radius: 12px;
        background-color: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    }
</style>