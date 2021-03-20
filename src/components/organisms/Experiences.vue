<template>
    <section id="experiences" class="part-container">
        <Header text="EXPERIENCES" icon="monitor.svg"/>
        <ExperienceBox v-for="(experience, index) in experiences" :key=index 
            :role=experience.role
            :company=experience.company
            :location=experience.location
            :period=experience.period
            :descriptions=experience.descriptions
            :is_final=is_final_in_list(index)
        />
    </section>
</template>
<script>
import Header from '../molecules/Header'
import ExperienceBox from '../molecules/ExperienceBox'
import {experiences} from '@/constants'

export default {
    name:'Experiences',
    components: {
        Header,
        ExperienceBox
    },
    data: () => ({
        experiences: experiences
    }),
    methods: {
        is_final_in_list(index) {
            return index === this.experiences.length - 1 ? true : false
        }
    }
}
</script>
<style scoped>
</style>