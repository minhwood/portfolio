<template>
    <a :href=section_id v-on:click=onclick>{{ text }}</a>
</template>
<script>
export default {
    name:'SideBarOption',
    props: {
        text: String,
        section_id: String
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

.active {
    background: var(--primary-bg-color);
    color: var(--hover-hightlight-color);
}
</style>