<template>
    <h5>{{name}}</h5>
</template>
<script>
export default {
    name:'NameTag',
    props: {
        name: String
    }
}
</script>
<style scoped>
h5 {
    margin-top: 0px;
    font-family: var(--default-font);
    font-weight: bold;
}
</style>