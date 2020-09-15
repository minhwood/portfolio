<template>
    <section id="playground" class="part-container">
        <Header text="PLAYGROUND" icon="monitor.svg"/>
        <div class="projects-container">
        <Project 
            v-for="(project, index) in projects" 
            :project=project 
            :key=index />
        </div>
    </section>
</template>
<script>
import Header from '../molecules/Header'
import Project from '../molecules/Project'

export default {
    name:'Playground',
    components: {
        Header,
        Project
    },
    data: () => ({
        projects: [
            {
              name:"8-Bits Weather Forecast",
              img: "weather-app.png",
              git_url: "https://github.com/minhdq1998/weather-app",
              demo_url: "https://minhdq1998.github.io/weather-app/"
            },
            {
              name:"Body language-telepresence Robot",
              img: "baxter.jpg",
              git_url: "https://github.com/minhdq1998/Robot-body-language-telepresence---VXLAB",
              demo_url: "https://youtu.be/2_N49f9U_EE"
            },
            {
              name:"Hypeciety",
              img: "hypeciety.png",
              git_url: "https://github.com/minhdq1998/Commercial-Clothing-Website-PHP",
              demo_url: "http://titan.csit.rmit.edu.au/~s3608452/Commercial-Clothing-Website-PHP/home.php"
            },
      ]
    })
}
</script>
<style scoped>
#playground {
    position: relative;
}

.projects-container {
  text-align: center;
}
</style>