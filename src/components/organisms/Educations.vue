<template>
    <section id="educations" class="part-container">
        <Header text="EDUCATIONS" icon="🎓"/>
        <EducationBox v-for="(education, index) in educations" :key=index 
            :school=education.school
            :qualification=education.qualification
            :descriptions=temporary_text
            :is_active=is_active(index)
            v-on:change_box=change_box
        />
    </section>
</template>
<script>
import Header from '../molecules/Header'
import EducationBox from '../molecules/EducationBox'

export default {
    name:'Educations',
    components: {
        Header,
        EducationBox
    },
    data: () => ({
        temporary_text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Curabitur placerat turpis in diam ultrices, sed maximus neque vestibulum. 
                Suspendisse pulvinar augue a mi imperdiet egestas. 
                Phasellus in lacus porta, tincidunt est eu, rutrum purus. 
                Mauris sed tincidunt metus.Nam consectetur non sapien ac.`,
        educations: [
            { school: "ROYAL MELBOURNE INSTITUITION OF TECHNOLOGY", qualification: "Bachelor of Information Technology", descriptions: ""},
            { school: "HIGHSCHOOL FOR GIFTED STUDENT - HNUE", qualification: "Graduated in Major of Computer Science", descriptions: "" }
        ],
        active_box: -1
    }),
    methods: {
        is_active(box) {
            return box === this.active_box
        },
        change_box(box) {
            if (this.active_box === box) this.active_box = -1
            else this.active_box = box
        }
    }
}
</script>
<style scoped>
</style>