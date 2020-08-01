<template>
  <div>
    <img :src="require('@/assets/' + this.src)" >
    <span class="description">{{description}}</span>
  </div>
</template>

<script>
export default {
    name:'SkillIcon',
    props: {
      src: String,
      description: String
    }
}
</script>

<style scoped>
div {
  position: relative;
  display: inline-block;
  margin: 20px;
  -webkit-transition: transform 0.5s;
}

img {
  height: 80px;
  width: 80px;
  opacity: 0.4;
  transition: 0.4s;
  -webkit-transition: opacity transform 0.4s;
}

img:hover {
  transform: scale(1.2);
  opacity: 1.0;
  -webkit-transition: opacity transform 0.4s;
}

img:hover ~ .description {
  visibility: visible;
  height: 14px;
}

.description {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 0px;
  padding-top: 10px;
  display: block;
  visibility: hidden;
  font-size: 14px;
}
</style>