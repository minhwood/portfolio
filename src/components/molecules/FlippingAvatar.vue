<template>
<div class="avatar-container">
    <div class="the-avatar-card">
        <img 
            :src="require('@/assets/' + this.src)" 
            class="profile-picture thefront" alt="">
        <img 
            :src="require('@/assets/' + 'avatar.jpg')" 
            class="profile-picture theback" alt="">
    </div>
</div>
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
.avatar-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
    text-align: center;
    display: block;
}

.the-avatar-card {
    width:140px;
    height: 140px;
    position:relative;
    transform-style: preserve-3d;
    transition: all 1.2s ease;    
}

.the-avatar-card:hover {
    transform: rotateY(180deg);
}

.thefront {
    top:0;
    left: 0;
    width: 100%;
    height:100%;
    position: absolute;
    backface-visibility: hidden;
    overflow: hidden;
}

.theback {
    top:0;
    left: 0;
    width: 100%;
    height:100%;
    position: absolute;
    backface-visibility: hidden;
    overflow: hidden;
    transform: rotateY(180deg);
}


.profile-picture{
    widows: 140px;
    height: 140px;
    border-radius: 130px;
    margin-bottom: 10px;
}
</style>