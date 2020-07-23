<template>
    <div>
        <input class="checkbox" type="checkbox" id="check">
        <div class="background"></div>
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
.background {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    z-index: -1000;
    position: fixed;
    left:0;
    top:0;
    background-color: var(--primary-bg-color);
}

.checkbox {
    display: none;
}
</style>