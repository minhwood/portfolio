<template>
    <a href="#" v-on:click=onclick>{{ text }}</a>
</template>
<script>
export default {
    name:'SideBarOption',
    props: {
        text: String
    },
    methods: {
        onclick() {
            //trigger scroll map button
            this.$emit('onclick')
        }
    }
}
</script>
<style scoped>
a {
    display: block;
    width: 100%;
    line-height: 60px;
    text-decoration: none;
    color: var(--primary-text-color);
    transition: 0.7s;
    transition-property: background, color;
}

a:hover {
    background: var(--primary-bg-color);
    color: var(--secondary-text-color);
}
</style>