<template>
    <section id="projects" class="part-container">
        <Header text="PROJECTS" icon="monitor.svg"/>
        <div class="projects-container">
            <projects-swiper :projects="projects"></projects-swiper>
        </div>
    </section>
</template>
<script>
import Header from '../molecules/Header'
import ProjectsSwiper from '../molecules/ProjectsSwiper'

import {projects} from '@/constants'

export default {
    name:'Projects',
    components: {
        Header,
        ProjectsSwiper,
    },
    data: () => ({
        projects:projects
    })
}
</script>
<style scoped>
#projects {
    position: relative;
}

.projects-container {
  text-align: center;
  min-height: 300px;
}
</style>