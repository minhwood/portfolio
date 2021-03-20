<template>
    <section id="educations" class="part-container">
        <Header text="EDUCATIONS" icon="hat.svg"/>
        <EducationBox v-for="(education, index) in educations" :key=index 
            :school=education.school
            :qualification=education.qualification
            :descriptions=education.descriptions
            :is_active=is_active(index)
        />
    </section>
</template>
<script>
import Header from '../molecules/Header'
import EducationBox from '../molecules/EducationBox'
import { bus } from '../../main'
import {educations} from '@/constants'

export default {
    name:'Educations',
    components: {
        Header,
        EducationBox
    },
    data: () => ({
        educations: educations,
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
    },
    created () {
        bus.$on('change_box', (box_id) => this.change_box(box_id))
    }
}
</script>
<style scoped>
</style>