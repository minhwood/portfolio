<template>
  <div class="introduct-box">
    <div class="introduct-text">
          <div class="centralize">
            <h2> Hi,<br>I'm Minh,<br>Web Developer </h2>
          </div>
      </div>
    <img class="second-avatar" src="../../assets/background.png" />
  </div>
</template>

<script>
// import AnimatedWord from '../atoms/AnimatedWord'

export default {
    name:'Introduction',
    components: { 
        // AnimatedWord 
    }
}
</script>

<style scoped>
.introduct-box {
    padding: 20px 0px 20px 0px;
    margin-bottom: 40px;
}

.introduct-text {
    position: relative;
    width: 50%;
    display: inline-block;
}

.centralize {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.second-avatar {
    max-height: 35vh;
    max-width: 50%;
    display: inline-block;
}

@media (max-width: 768px){
    .introduct-box {
        height: 100%;
    }

    .second-avatar {
        display:none
    }

    .introduct-text {
        width: 100%;
    }

    .centralize {
        position: static;
        top: none;
        left: none;
        transform: none;
    }
}

</style>