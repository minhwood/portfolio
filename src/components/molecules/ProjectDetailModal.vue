<template>
<div :class='"project-detail-wrapper " + project_box_styling' 
    v-if="is_show" 
    v-on:click="change_display_mode"
    :style="styleObject"
    >
    <div class="project-detail-relative-wrapper">
        <div class='project-detail-container' v-if="project">
            <div class="project-detail-container-wrapper">
                <div class="project-image">
                    <div class="project-image-wrapper"
                        v-on:click="redirect_to(project.demo_url)"
                    >
                    <img 
                    v-if="project.img"
                    :src="require('@/assets/' + project.img)"
                    />
                    <div 
                        class="retro-button"
                        v-if="project.demo_url"
                        >View</div>
                    </div>
                </div>
                <div class="project-text-info ">
                    <div class="project-name">{{project.name}}</div>
                    <div class="project-description">{{project.description}}</div>
                    <br/>
                    <div class="project-role"><span style="font-weight:bold">Role: </span>{{project.role}}</div>
                    <div class="project-contribution" v-for="(line, index) in project.contributions" :key=index>
                        - {{line}}
                    </div>
                    <br>
                    <div class="project-stacks">
                        <stack-tag 
                        v-for="(stack, index) in project.stacks" 
                        :key="index"
                        :stack=stack />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
</template>
<script>
import { bus } from '../../main'
import StackTag from '../atoms/StackTag'

export default {
    name: 'ProjectDetailModal',
    components:{
        StackTag
    },
    props: {
        is_show: {
            type: Boolean,
            default: false
        },
        width: Number,
        padding: String,
        project: {
            type: Object,
            default: null
        }
    },
    data: () => ({
        styleObject: {
            width: "0px",
            left: "0px"
        }
    }),
    computed: {
        project_box_styling() {
            return this.width <= 1110 ? "small-size" : "full-size" 
        }
    },
    methods: {
        redirect_to(url) {
            window.open(url, '_blank')
        },
        change_display_mode() {
            bus.$emit('change_jobdetail_display_state', {state:!this.is_show, project:null})
        }
    },
    watch: {
        width: function(val) {
            this.styleObject.width = `${val}px`
            this.styleObject.left = `${this.padding}`
        },
    }
}
</script>
<style scoped>
.project-detail-wrapper {
    background-color: rgba(55, 65, 81, 0.8);
    z-index: 100000;
    color: white;
    height: 100vh;
    position: fixed;
    top:0px;
    transition: 0.3s;
}

.project-detail-relative-wrapper {
    position: relative;
    height: 100%;
}

.project-detail-container {
    position: absolute;
    width: 100%;
    top: calc(50% - 80px);
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px;
    max-width: 1210px;
}



.small-size .project-detail-container {
    top: 50%;
    max-height: 80vh;
    overflow: auto;
}

.project-detail-container-wrapper {
    position: relative;
}

.full-size .project-image {
    height: 300px;
    overflow: hidden;
}

.full-size .project-image .project-image-wrapper  {
    width: 45%;
}


.full-size .project-text-info {
    position: absolute;
    padding: 20px;
    top: 20%;
    left: 40%;
    width: 60%;
    background-color: var(--primary-bg-color);
    border: 2px solid var(--secondary-bg-color);
    border-radius: 4px;
}

.project-image .project-image-wrapper img {
    width: 100%;
    position: absolute;
    top:0px;
    left: 0px;
    opacity: 0.6;
}

.project-image .project-image-wrapper {
    height: 100%;
    position: relative;
    opacity: 1.0;
    background:  var(--secondary-bg-color);
}

.project-image .project-image-wrapper:hover img {
    opacity: 0.4;
}

.project-image .project-image-wrapper:hover .retro-button{
    background-color: var(--hover-hightlight-color);
}

.small-size .project-image {
    height: 300px;
    overflow: hidden;
    
}

.small-size .project-image .project-image-wrapper {
    width: 100%;
}

.small-size .project-text-info {
    padding: 20px;
    width: 100%;
    background-color:var(--primary-bg-color)
}

.project-name {
    font-size: 25px;
    font-weight: bold;
}

.retro-button {
  transition: 0.2s;
  text-decoration: none;
  padding: 5px 10px;
  background-color: var(--secondary-bg-color);
  color: white;
  display: inline-block;
  text-align:center;
  margin: 20px 10px 10px 0px;
}

.retro-button:hover {
    background-color: darkgray;
}

.project-image .project-image-wrapper .retro-button {
    position: absolute;
    top: calc(50% - 10px);
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>