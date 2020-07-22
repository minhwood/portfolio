<template>
    <div class="side-bar">
        <label for="check" class="checkbox-label">
            <font-awesome-icon class="tab-icon" icon="bars"/>
        </label>
        <div class="hide-collabs">
            <img :src="require('@/assets/avatar.jpg')" class="profile-picture" alt="">
            <h4>Minh Doan Quang</h4>
            <a href="#">Something</a>
            <a href="#">Something</a>
            <a href="#">Something</a>
        </div>
    </div>
</template>
<script>
export default {
    name:'PortfolioSideBar',
    components: {}
}
</script>
<style scoped>
</style>