<template>
  <div class="education-header row" :style="background_color" @click="change_box">
    <div class="col-12 col-md-11">
      <div class="school-header" >{{school}}</div>
      <div class="qualification-header">{{qualification}}</div>
    </div>
    <div class="col-12 col-md-1 education-collab">
      <font-awesome-icon class="education-collab-icon" :icon="collab_icon" />
    </div>
  </div>
</template>

<script>
import { bus } from '../../main'

export default {
    name:'EducationHeader',
    props: {
        is_active: {
            type: Boolean,
            default: false
        },
        school: String,
        qualification: String,
        box_id: Number
    },
    computed: {
        background_color() {
            return this.is_active ? 
                "border-bottom: 2px solid var(--hover-hightlight-color)" :
                "border: none"
        },
        collab_icon() {
            return this.is_active ? "minus" : "plus"
        },
    },
    methods: {
        change_box() {
            bus.$emit('change_box', this.box_id)
        }
    }
};
</script>

<style scoped>
.education-header {
    padding: 20px;
    cursor: pointer;
    background: var(--secondary-bg-color);
}

.school-header {
    font-size: 18px;
}

.qualification-header {
    font-size: 16px;
    color: var(--header-secondary-text-color);
}

.education-collab {
    min-height: 30px;
    position: relative;
    text-align: center;
    vertical-align: middle;
}

.education-collab-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>