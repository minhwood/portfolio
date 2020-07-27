<template>
  <div class="experience-box">
      <timeline-header :is_final=is_final />
      <div class="experience-content">
        <experiences-header :role=role :company=company :location=location :period=period />
        <paragraph paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Curabitur placerat turpis in diam ultrices, sed maximus neque vestibulum. 
        Suspendisse pulvinar augue a mi imperdiet egestas. 
        Phasellus in lacus porta, tincidunt est eu, rutrum purus. 
        Mauris sed tincidunt metus.Nam consectetur non sapien ac." />
      </div>
      <div class="empty-padding"></div>
  </div>
</template>
<script>
import TimelineHeader from '../atoms/TimelineHeader'
import Paragraph from '../atoms/Paragraph'
import ExperiencesHeader from '../atoms/ExperiencesHeader'

export default {
    name: 'ExperienceBox',
    components:{
        TimelineHeader,
        Paragraph,
        ExperiencesHeader
    },
    props: {
        is_final: {
            type: Boolean,
            deafult: false
        },
        role: String,
        company: String,
        location: String,
        period: String
    }
}
</script>

<style scoped>
.experience-box {
    position: relative;
    width: 100%;
    min-height: 200px;
    animation: transitionIn 0.8s linear;
}

.experience-content {
    margin-left: 60px;
    margin-right: 20px;
    background: var(--secondary-bg-color);
    padding: 20px;
    transition: 0.25s;
}

.experience-content:hover {
    transform: scale(1.05);
}

.empty-padding {
    padding: 10px;
}

@keyframes transitionIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>