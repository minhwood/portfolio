<template>
    <div class="content-box">
        <div class="container">
            <Observer/>
            <about/>
            <skills/>
            <projects/>
            <educations/>
            <experiences/>
            <job-detail-modal :is_show="job_detail_display_state" />
        </div>
    </div>
</template>
<script>
import { bus } from '../../main'
import About from '../organisms/About'
import Experiences from '../organisms/Experiences'
import Educations from '../organisms/Educations'
import Skills from '../organisms/Skills'
import Projects from '../organisms/Projects'
import Observer from '../atoms/Observer'
import JobDetailModal from '../molecules/JobDetailModal'

export default {
    name:'PortfolioContent',
    components: {
        About,
        Experiences,
        Educations,
        Skills,
        Projects,
        Observer,
        JobDetailModal
    },
    data: () => ({
        job_detail_display_state: false
    }),
    methods: {
        change_job_detail_modal_state(state) {
            this.job_detail_display_state = state
        }
    },
    created() {
        bus.$on('change_jobdetail_display_state',(state) => this.change_job_detail_modal_state(state))
    }
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