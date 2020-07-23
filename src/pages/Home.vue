<template>
    <div>
        <input class="checkbox" type="checkbox" id="check">
        <div class="temp-background"></div>
        <!-- <div class="dark-background background"></div> -->
        <!-- <div class="light-background background"></div> -->
        <portfolio-side-bar></portfolio-side-bar>
        <portfolio-content></portfolio-content>
    </div>
</template>

<script>
import PortfolioSideBar from '../components/templates/PortfolioSideBar'
import PortfolioContent from '../components/templates/PortfolioContent'

export default {
    name: 'Home',
    components: {
        PortfolioSideBar,
        PortfolioContent
    }
}
</script>
<style scoped>
.temp-background {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    z-index: -1000;
    position: fixed;
    left:0;
    top:0;
    background-color: var(--primary-bg-color);
}

.background {
  min-height: 100vh;
  width: 50%;
  height: 100%;
  z-index: -1000;
}

.dark-background {
  position: fixed;
  left:0;
  top: 0;
  background-color: var(--secondary-bg-color);
  display: inline-block;
}

.light-background {
  position: fixed;
  right: 0;
  top: 0;
  background-color: var(--primary-bg-color);
  display: inline-block;
}

.checkbox {
    display: none;
}
</style>