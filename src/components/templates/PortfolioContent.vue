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
.content-box {
    background: var(--primary-bg-color);
    min-height: 100vh;
    margin-left: 250px;
    padding-top: 40px;
    padding-bottom: 40px;
    transition: margin-left 0.5s ease-in;
}

.temp-div {
    background: var(--secondary-bg-color);
    min-height: 40vh;
    margin-top: 20px;
    margin-bottom: 20px;
}

@media(max-width:568px) {
    .content-box {
        margin-left: 50px !important;
    }
}
</style>