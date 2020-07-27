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
    padding: 5px 120px 5px 120px;
    transition: margin-left 0.5s linear;
    animation: transitionIn 0.8s;
}

@media(max-width:568px) {
    .content-box {
        margin-left: 50px !important;
    }
}

@media(max-width:1200px) {
    .content-box {
        padding: 5px 0px 5px 0px;
    }
}

@keyframes transitionIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>