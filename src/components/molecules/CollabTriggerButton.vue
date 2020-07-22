<template>
    <label :for=check_box_id class="checkbox-label">
        <font-awesome-icon class="tab-icon" icon="bars"/>
    </label>
</template>
<script>
export default {
    name:'CollabTriggerButton',
    props: {
        check_box_id:String
    }
}
</script>
<style scoped>

.checkbox-label {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}

.checkbox-label .tab-icon {
    width: 25px;
    height: 25px;
    z-index: 1;
    color: var(--primary-text-color)
}

.checkbox-label .tab-icon:hover {
    color: var(--hover-hightlight-color);
    transition: color 0.5s;
}
</style>