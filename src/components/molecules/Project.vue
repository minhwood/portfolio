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
      <h4>{{ project.name }}</h4>
      <div class="row">
        <a class="retro-button offset-md-2 col-md-4" type="submit" href="#">Source Code</a>
        <a class="retro-button col-md-4" type="submit" href="#">Demo</a>
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
          name:"Body language-telepresence Robot",
          img: "baxter.jpg",
          description:"",
          git_url: "https://github.com/minhdq1998/Robot-body-language-telepresence---VXLAB",
          demo_url: "https://youtu.be/2_N49f9U_EE"
        },
        {
          name:"8-Bits Weather Forecast",
          img: "weather-app.png",
          description: "",
          git_url: "https://github.com/minhdq1998/weather-app",
          demo_url: "https://minhdq1998.github.io/weather-app/"
        }
      ]
    }),
    methods: {
      background_image_path(image) {
        console.log("executed")
        let result = 'background:url('+require('@/assets/' + image )+");"
        console.log(result)
        return result
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
  opacity: 0.4;
}

.project-box-content {
  width:100%;
  height:100%;
  z-index:20000;
  position: relative;
  padding: 10px;
  padding-top:30px;
  text-align: center;
}

.retro-button {
  visibility: hidden;
  transition: 0.3s ease-in-out;
  text-decoration: none;
  border: 1px solid white;
  padding: 5px;
  color: white;
}

.project-box:hover {
  transform: scale(1.05);
}

.project-box:hover .retro-button{
  visibility: visible;
}




</style>