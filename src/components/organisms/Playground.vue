<template>
    <section id="playground" class="part-container">
        <Header text="PLAYGROUND" icon="monitor.svg"/>
        <Project></Project>
    </section>
</template>
<script>
import Header from '../molecules/Header'
import Project from '../molecules/Project'

export default {
    name:'Playground',
    components: {
        Header,
        Project
    }
}
</script>
<style scoped>
#playground {
    min-height: 100vh;
    position: relative;
}
</style>