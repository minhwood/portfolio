<template>
    <p class="header-text">{{icon}} <b>{{text}}</b></p>
</template>
<script>
export default {
    name:'HeaderText',
    props: {
        text: String,
        icon: String
    }
}
</script>
<style scoped>
.header-text {
    color: var(--header-primary-text-color);
    padding-bottom: 10px;
    font-size: 24px;
    margin:0px;
}
</style>