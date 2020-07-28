<template>
  <div class="introduct-box row">
      <div class="col-7 introduct-text">
          <div class="centralize">
            <AnimatedWord word="Hi," /><br>
            <AnimatedWord word="I'm" />
            <AnimatedWord word="Minh," color="var(--header-secondary-text-color)" /><br>
            <AnimatedWord word="Web Developer" color="var(--header-third-text-color)"/>
          </div>
      </div>
      <img class="col-5 second-avatar" src="../../assets/introduction.png" />
  </div>
</template>

<script>
import AnimatedWord from '../atoms/AnimatedWord'

export default {
    name:'Introduction',
    components: { AnimatedWord }
}
</script>

<style scoped>
.introduct-box {
    height: 40vh;
    padding: 20px 0px 20px 0px;
    margin-bottom: 40px;
    overflow: hidden;
}

.introduct-box img {
    max-width: 100% !important;
    height: inherit !important;
    overflow: hidden;
}

.introduct-text {
    position: relative;
}

.centralize {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@media (max-width: 768px){
    .second-avatar {
        display:none
    }
}

</style>