<template>
    <div class="timeline-header">
        <div class="timeline-icon" ><font-awesome-icon class="info-icon" icon="highlighter"/></div>
        <template v-if="is_final">
            <span class="timeline-line final-line"></span>
            <div class="timeline-final-icon" ></div>
        </template>
        <template v-else>
            <span class="timeline-line "></span>
        </template>
    </div>
</template>

<script>
export default {
    name: "TimelineHeader",
    props: {
        is_final: Boolean
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
    border: 2px solid var(--default-text-color);
    text-align: center;
    background-color: var(--primary-bg-color);
}

.info-icon {
    width: 20px;
    height: 20px;
}

.timeline-line {
    border:1px solid var(--hover-hightlight-color);
    position: absolute;
    background: var(--hover-hightlight-color);
    top:32px;
    bottom:0px;
    left: 16px;
}

.final-line {
    bottom:32px !important;
}

.timeline-final-icon {
    position: absolute;
    left: 5px;
    width:24px;
    height:24px;
    border-radius: 24px;
    border: 3px solid var(--hover-hightlight-color);;
    text-align: center;
    bottom: 8px;
}
</style>