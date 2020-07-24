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
    color: rgb(137,221,255);
    padding-bottom: 10px;
    font-size: 24px;
    font-family: var(--default-font);
    margin:0px;
}
</style>