<template>
    <div class="content-box">
        <div class="container">
            <Observer/>
            <about/>
            <skills/>
            <experiences/>
            <educations/>
            <playground/>
        </div>
    </div>
</template>
<script>
import About from '../organisms/About'
import Experiences from '../organisms/Experiences'
import Educations from '../organisms/Educations'
import Skills from '../organisms/Skills'
import Playground from '../organisms/Playground' 
import Observer from '../atoms/Observer'

export default {
    name:'PortfolioContent',
    components: {
        About,
        Experiences,
        Educations,
        Skills,
        Playground,
        Observer
    },
}
</script>
<style scoped>
.content-box {
    background-color: var(--primary-bg-color);
    min-height: 100vh;
    margin-left: 250px;
    padding: 5px 120px 5px 120px;
    transition: margin-left 0.5s linear;
    animation: transitionIn 0.8s;
}

@media(max-width:768px) {
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