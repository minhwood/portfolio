<template>
    <section id="experiences" class="part-container">
        <Header text="EXPERIENCES" icon="🖥️"/>
        <ExperienceBox/>
        <ExperienceBox/>
        <ExperienceBox/>
    </section>
</template>
<script>
import Header from '../molecules/Header'
import ExperienceBox from '../molecules/ExperienceBox'

export default {
    name:'Experiences',
    components: {
        Header,
        ExperienceBox
    }
}
</script>
<style scoped>
</style>