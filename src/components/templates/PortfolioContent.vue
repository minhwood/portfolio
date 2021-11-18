<template>
    <div class="content-box" ref="contentBox">
        <div class="container" ref="myElement">
            <Observer/>
            <about/>
            <skills/>
            <projects/>
            <educations/>
            <experiences/>
        </div>
        <project-detail-modal 
        :is_show="job_detail_display_state" 
        :width="container_width" 
        :padding="container_margin"
        :project="displaying_project"
        />
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
import ProjectDetailModal from '../molecules/ProjectDetailModal'
import { ResizeObserver } from 'resize-observer'

export default {
    name:'PortfolioContent',
    components: {
        About,
        Experiences,
        Educations,
        Skills,
        Projects,
        Observer,
        ProjectDetailModal
    },
    data: () => ({
        observer: null,
        job_detail_display_state: false,
        container_width: 0,
        container_margin: "0px",
        displaying_project: null
    }),
    methods: {
        change_job_detail_modal_state({state, project}) {
            this.job_detail_display_state = state
            this.displaying_project = project
        },
        onResize() {
            this.container_width = this.$refs.contentBox.offsetWidth
            this.container_margin = window.getComputedStyle(this.$refs.contentBox, null).getPropertyValue("margin-left")
        }
    },
    mounted() {
        this.observer = new ResizeObserver(this.onResize).observe(this.$refs.contentBox)
    },
    created() {
        bus.$on('change_jobdetail_display_state',(state) => this.change_job_detail_modal_state(state))
    },

    beforeDestroy() {
        this.observer.unobserve(this.$refs.myElement)
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