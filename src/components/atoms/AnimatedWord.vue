<template>
    <div class="jumping-text" :style="{color: color}">{{word}}</div>
</template>

<script>
export default {
    name: 'AnimatedWord',
    props: {
        word: String,
        color: {
            type: String,
            default: "var(--default-text-color)"
        }
    }
}
</script>

<style scoped>
div {
    font-size: 32px;
    padding: 4px 6px;
    text-shadow: 10px 10px 10px 10px rgba(0,0,0,0.5);
    display: inline-block;
}

div:hover {
    animation: jump 1s !important;
    cursor: pointer;
}

@keyframes jump {
    0% {
        color: var(--header-primary-text-color);
    }
    65% {
        color: var(--header-secondary-text-color);
    }
    100% {
        color: var(--hover-hightlight-color);
    }
}
</style>