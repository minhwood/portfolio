<template>
    <div class="content-box">
        <div class="container">
            <div class="temp-div"></div>
            <div class="temp-div"></div>
            <div class="temp-div"></div>        
        </div>
    </div>
</template>
<script>
export default {
    name:'PortfolioContent',
    components: {}
}
</script>
<style scoped>
.temp-div {
    background: var(--secondary-bg-color);
    min-height: 40vh;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>