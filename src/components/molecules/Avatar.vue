<template>
    <img 
        :src="require('@/assets/' + this.src)" 
        class="profile-picture" alt="">
</template>
<script>
export default {
    name:'Avatar',
    props: {
        src: String
    },
    created() {
        console.log
    }
}
</script>
<style scoped>
.profile-picture{
    widows: 130px;
    height: 130px;
    border-radius: 130px;
    margin-bottom: 10px;
}
</style>