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

export default {
    name:'Experiences',
    components: {
        Header,
        ExperienceBox
    },
    data: () => ({
        experiences: [
            { role:"Web Developer",         company: "Septeni Technology",  location:"Hanoi",       period:"2019-2020" , 
                descriptions:"Develop Web and ETL applications for big multinational media and digital marketing companies in the world to help them automate their workflows."},
            { role:"IT Support",            company: "Emma & Tom",          location:"Melbourne",   period:"2019" , 
                descriptions:"Maintain and monitor the eCommerce website and fleet management system. Provide IT support to other departments in need and exposed to a multicultural working environment." },
            { role:"Teaching Assistant",    company: "Code Camp",           location:"Melbourne",   period:"2018" , 
                descriptions:"Help deliver interactive lessons, activities that expose primary students to programming and problem-solving."},
            { role:"Intern Web Developer",  company: "FPT Software",        location:"Hanoi",       period:"2017-2018" , 
                descriptions:"Build an internal Management System for one of the big four accounting firm."},
        ]
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