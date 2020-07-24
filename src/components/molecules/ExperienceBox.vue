<template>
  <div class="experience-box">
      <timeline-header/>
      <div class="experience-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Curabitur placerat turpis in diam ultrices, sed maximus neque vestibulum. 
        Suspendisse pulvinar augue a mi imperdiet egestas. 
        Phasellus in lacus porta, tincidunt est eu, rutrum purus. 
        Mauris sed tincidunt metus.Nam consectetur non sapien ac.
      </div>
      <div class="empty-padding"></div>
  </div>
</template>
<script>
import TimelineHeader from '../atoms/TimelineHeader'

export default {
    name: 'ExperienceBox',
    components:{
        TimelineHeader
    },
    props: {
        isFinal: {
            type: Boolean,
            deafult: false
        }
    }
}
</script>

<style>
.experience-box {
    position: relative;
    width: 100%;
    min-height: 200px;
}

.experience-content {
    margin-left: 60px;
    margin-right: 20px;
    min-height: 250px;
    background: var(--secondary-bg-color);
    padding: 20px;
    transition: 0.5s;
}

.experience-content:hover {
    margin-left:50px;
    margin-right: 10px;
}

.empty-padding {
    padding: 10px;
}
</style>