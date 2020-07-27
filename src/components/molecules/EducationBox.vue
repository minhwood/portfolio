<template>
    <div class="education-box container">
        <div class="education-header row" :style=background_color>
            <div class="col-11">
                <div class="school-header">{{school}}</div>
                <div class="qualification-header" >{{qualification}}</div>
            </div>
            <div class="col-1 education-collab">
                <font-awesome-icon class="education-collab-icon" :icon=collab_icon />
            </div>
        </div>
        <div class="education-content row"  :style=display_content>
            <paragraph :paragraph=descriptions />
        </div>
    </div>
</template>

<script>
import Paragraph from '../atoms/Paragraph'

export default {
    name: 'EducationBox',
    components: {
        Paragraph
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
        background_color() {
            return this.is_active ? 
                "background: var(--hover-hightlight-color)" :
                "background: var(--secondary-bg-color)" 
        },
        collab_icon() {
            return this.is_active ? "minus" : "plus"
        },
        display_content() {
            return this.is_active ? "display:block" : "display:none"
        }
    }
}
</script>

<style scoped>
.education-box {
    margin-bottom: 10px;
}

.education-header {
    padding: 20px;
    cursor: pointer;
}

.school-header {
    font-size: 18px;
}

.qualification-header {
    font-size: 16px;
    color: var(--header-secondary-text-color);
}

.education-collab {
    position: relative;
    min-height: 100% !important;
    text-align: center;
    vertical-align: middle;
}

.education-collab-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.education-content {
    border: 2px solid var(--secondary-bg-color);
    padding: 20px;
    margin-top: 10px;
}


</style>