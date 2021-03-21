<template>
  <div class="project-container">
      <img 
        v-if="project.img"
        class="project-box-background"
        :src="require('@/assets/' + project.img)"
      />
      <div class="project-box-content">
          <div class="top">
            <h5 style="font-weight: bold;">{{project.name}}</h5>
          </div>
          <div class="middle">
              <div>{{project.description}}</div>
              <div class="retro-button" 
                v-if="project.git_url" 
                v-on:click="redirect_to(project.git_url)">Source Code</div>
              <div 
                class="retro-button"
                v-if="project.demo_url" 
                v-on:click="redirect_to(project.demo_url)"
                >Demo</div>
          </div>
          <div class="bottom">
            <div class="project-stacks">
                <stack-tag 
                v-for="(stack, index) in project.stacks" 
                :key="index"
                :stack=stack />
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import StackTag from '../atoms/StackTag'

export default {
    name:"ProjectContainer",
    components: {StackTag},
    props: {
        project: Object
    },
    methods: {
      redirect_to(url) {
        window.open(url, '_blank')
      }
    }
}
</script>

<style scoped>
.project-container {
    border: 2px solid var(--secondary-bg-color);
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    transition: 0.25s;
    background: var(--secondary-bg-color);
}

.project-box-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.3;
}

.project-box-content {
    position:relative;
    width: 100%;
    height: 100%;
    z-index: 2000;
    padding: 10px;
    transition: 0.25s;
}

.project-box-content .top {
    position: relative;
    height: 50%;
    transition: all 0.25s;
}

h5 {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0px;
}

.project-box-content .bottom {
    height: 50%;
}

.project-box-content .middle {
    display: none;
    margin-bottom: 10px;
    padding-bottom: 40px;
}

.project-box-content:hover .top {
    height: 45px;
}

.project-box-content:hover .bottom {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 2px;
    height: unset;
}

.project-box-content:hover .middle {
    display: block;
}

.retro-button {
  transition: 0.2s;
  text-decoration: none;
  border: 2px solid white;
  padding: 5px;
  color: white;
  display: inline-block;
  width: 200px;
  margin-top:15px;
  margin-right: 10px;
  margin-left: 10px;
}

.retro-button:hover {
  background-color: darkgray;
}
</style>