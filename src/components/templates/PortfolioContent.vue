<template>
    <div class="content-box">
        <div class="container">
            <about/>
            <experiences/>
            <educations/>
            <skills/>
            <activities/>
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
import Playground from '../organisms/Playground' 

export default {
    name:'PortfolioContent',
    components: {
        About,
        Experiences,
        Playground,
        Educations,
        Skills,
        Activities
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