<template>
    <div class="education-box container">
        <education-header :box_id="this.$vnode.key"
            :school=school 
            :qualification=qualification 
            :is_active=is_active
            :expandable=expandable
            ><location-period :period="period" :location="location"></location-period></education-header>
        
        <div class="education-content row"  :style=display_content>
            <check-line v-for="(desc, index) in descriptions" :key=index :text=desc />
        </div>
    </div>
</template>

<script>
import CheckLine from '../atoms/CheckLine'
import EducationHeader from '../atoms/EducationHeader'
import LocationPeriod from '../atoms/LocationPeriod'

export default {
    name: 'EducationBox',
    components: {
        CheckLine,
        EducationHeader,
        LocationPeriod
    },
    props: {
        is_active: {
            type: Boolean,
            default: false
        },
        school: String,
        qualification: String,
        descriptions: Array,
        location: String,
        period: String
    },
    computed: {
        display_content() {
            return this.is_active ? "display:block" : "display:none"
        },
        expandable() {
            return this.descriptions ? true : false
        }
    },
}
</script>

<style scoped>
.education-box {
    margin-bottom: 10px;
    transition: 0.2s;
}

.education-content {
    border: 2px solid var(--secondary-bg-color);
    padding: 20px;
    margin-top: 10px;
    animation: transitionOpen 0.2s;
}

@keyframes transitionOpen {
    from {
        opacity: 0;
        display: none;
    }
    to {
        opacity: 1;
        display: block;
    }
}


</style>