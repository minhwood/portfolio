<template>
    <a :href="'#'+section_id" v-on:click=onclick
        v-bind:class=active_tab
    ><span>{{ text }}</span></a>
</template>
<script>
import { bus } from '../../main'

export default {
    name:'SideBarOption',
    props: {
        text: String,
        section_id: String,
        current_active_tab: String
    },
    methods: {
        onclick() {
            bus.$emit('change_tab', this.section_id)
        },
    },
    computed: {
        active_tab() {
            return this.section_id === this.current_active_tab ? 'active' : ""
        }
    }
}
</script>
<style scoped>
span {
    width: 100%;
    transition: 0.5s;
    transition-property: border-bottom;
}

a {
    display: block;
    width: 100%;
    line-height: 60px;
    text-decoration: none;
    color: var(--secondary-text-color);
    transition: 0.5s;
    transition-property: background, color;
}

a:hover {
    background: var(--primary-bg-color);
    color: var(--default-text-color);
    text-decoration: none
}

a:hover span {
    border-bottom: 1px solid var(--hover-hightlight-color);
}

.active {
    background: var(--primary-bg-color);
    color: var(--hover-hightlight-color);
}
</style>