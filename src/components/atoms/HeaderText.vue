<template>
    <p class="header-text"><img :src="require('@/assets/' + icon)" /> <b>{{text}}</b></p>
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

.header-text img {
    height: 40px;
}

</style>