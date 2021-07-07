<template>
<div class='job-detail-wrapper' v-if="is_show" v-on:click="change_display_mode">
    <div class='job-detail-container'>
        
    </div>
</div>
</template>
<script>
import { bus } from '../../main'
export default {
    name: 'JobDetailModal',
    components:{
    },
    props: {
        is_show: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        change_display_mode() {
            bus.$emit('change_jobdetail_display_state', !this.is_show)
        }
    }
}
</script>
<style scoped>
.job-detail-wrapper {
    position: fixed;
    top:0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(55, 65, 81, 0.5);
    z-index: 100000;
    display: grid;
    place-items: center;
}

.job-detail-container {
    width: 1000px;
    height: 1000px;
    background-color: var(--primary-bg-color);
}
</style>