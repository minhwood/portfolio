<template>
  <div>
    <img :src="require('@/assets/' + this.src)" >
  </div>
</template>

<script>
export default {
    name:'SkillIcon',
    props: {
      src: String
    }
}
</script>

<style scoped>
div {
  display: inline-block;
  margin: 20px;
  -webkit-transition: transform 0.5s;
}

img {
  height: 80px;
  width: 80px;
  opacity: 0.4;
  -webkit-transition: opacity transform 0.5s;
}

img:hover {
  transform: scale(1.2);
  transition: 0.4s;
  opacity: 1.0;
  -webkit-transition: opacity transform 0.5s;
}
</style>