<template>
    <div class="content-box">
        <div class="container">
            <Observer v-on:change_tab=change_tab />
            <about/>
            <experiences/>
            <educations/>
            <skills/>
            <activities/>
            <contacts/>
            <playground/>
        </div>
    </div>
</template>
<script>
import About from '../organisms/About'
import Experiences from '../organisms/Experiences'
import Educations from '../organisms/Educations'
import Skills from '../organisms/Skills'
import Activities from '../organisms/Activities'
import Contacts from '../organisms/Contacts'
import Playground from '../organisms/Playground' 
import Observer from '../atoms/Observer'

export default {
    name:'PortfolioContent',
    components: {
        About,
        Experiences,
        Educations,
        Skills,
        Activities,
        Contacts,
        Playground,
        Observer
    },
    methods: {
        change_tab(tab) {
            this.$emit("change_tab", tab)
        }
    }
}
</script>
<style scoped>
.content-box {
    background: var(--primary-bg-color);
    min-height: 100vh;
    margin-left: 250px;
    padding-top: 5px;
    padding-bottom: 5px;
    transition: margin-left 0.5s ease-in;
    animation: transitionIn 1s;
}

@media(max-width:568px) {
    .content-box {
        margin-left: 50px !important;
    }
}

@keyframes transitionIn {
    from {
        margin-left: 100vh;
    }
    to {
        margin-left: 250px;
    }
}
</style>