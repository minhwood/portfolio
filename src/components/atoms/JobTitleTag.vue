<template>
    <p>{{jobtitle}}</p>
</template>
<script>
export default {
    name:'JobTitleTag',
    props: {
        jobtitle: String
    }
}
</script>
<style scoped>
p {
    margin-top: 0px;
    font-size: 15px;
    color: var(--default-text-color);
}
</style>