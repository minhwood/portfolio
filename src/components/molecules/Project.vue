<template>
<div>
  <div 
  class="project-box" 
  v-for="(project, index) in projects" 
  :key=index>
    <img 
      class="project-box-background"
      :src="require('@/assets/'+project.img)" />
    <div class="project-box-content">
      <h5 style="font-weight:bold;">{{ project.name }}</h5>
      <div>
        <div class="retro-button" v-on:click="redirect_to(project.git_url)">Source Code</div>
        <div class="retro-button" v-on:click="redirect_to(project.demo_url)">Demo</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name:"Project",
    components: {
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
    }),
    methods: {
      background_image_path(image) {
        console.log("executed")
        let result = 'background:url('+require('@/assets/' + image )+");"
        console.log(result)
        return result
      },
      redirect_to(url) {
        window.open(url, '_blank')
      }
    }
}
</script>

<style scoped>
.project-box {
  position: relative;
  overflow: hidden;
  height: 160px;
  width: 100%;
  border: 2px solid black;
  border-radius: 20px;
  margin-bottom: 20px;
  transition: 0.25s;
  background:black;
}

.project-box-background {
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  transition: 0.25s;
  border-radius: 20px;
  z-index:1;
  opacity: 0.3;
}

.project-box-content {
  width:100%;
  height:100%;
  z-index:20000;
  position: relative;
  padding: 10px;
  padding-top:60px;
  text-align: center;
  transition: 0.25s;
}

.project-box:hover {
  transform: scale(1.05); 
}

.project-box:hover .project-box-background {
  opacity: 0.2;
}

.project-box:hover .retro-button{
  visibility: visible;
}

.project-box:hover .project-box-content {
  padding-top: 30px;
}

.retro-button {
  visibility: hidden;
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