<template>
    <div class="education-box container">
        <education-header :box_id="this.$vnode.key"
            :school=school 
            :qualification=qualification 
            :is_active=is_active 
            />
        <div class="education-content row"  :style=display_content>
            <paragraph :paragraph=descriptions />
        </div>
    </div>
</template>

<script>
import Paragraph from '../atoms/Paragraph'
import EducationHeader from '../atoms/EducationHeader'

export default {
    name: 'EducationBox',
    components: {
        Paragraph,
        EducationHeader
    },
    props: {
        is_active: {
            type: Boolean,
            default: false
        },
        school: String,
        qualification: String,
        descriptions: String
    },
    computed: {
        display_content() {
            return this.is_active ? "display:block" : "display:none"
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