<template>
    <div class="timeline-header">
        <div class="timeline-icon" ><font-awesome-icon class="info-icon" icon="info"/></div>
        <span class="timeline-line "></span>
    </div>
</template>

<script>
export default {
    name: "TimelineHeader",
    props: {
        isFinal: Boolean
    }
}
</script>

<style scoped>
.timeline-header {
    position: absolute;
    height: 100%;
}

.timeline-icon {
    position: absolute;
    left: 0;
    width:32px;
    height:32px;
    border-radius: 32px;
    border: 2px solid var(--secondary-text-color);
    text-align: center;
    background-clip: var(--primary-bg-color);
    z-index: 100;
}

.timeline-icon .info-icon {
    width: 20px;
    height: 20px;
}

.timeline-line {
    border:1px solid var(--secondary-text-color);
    position: absolute;
    top:32px;
    bottom:0px;
    left: 16px;
}

.final-line {
    bottom:32px !important;
}
</style>