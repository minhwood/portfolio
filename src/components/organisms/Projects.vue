<template>
    <section id="projects" class="part-container">
        <Header text="PROJECTS" icon="monitor.svg"/>
        <div class="projects-container">
        <Project 
            v-for="(project, index) in projects" 
            :project=project 
            :key=index />
        </div>
    </section>
</template>
<script>
import Header from '../molecules/Header'
import Project from '../molecules/Project'
import {projects} from '@/constants'

export default {
    name:'Projects',
    components: {
        Header,
        Project
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
}
</style>