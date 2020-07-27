<template>
  <p :style=actually_margin_bottom>{{paragraph}}</p>
</template>

<script>
export default {
    name:'Paragraph',
    props: {
        paragraph: String,
        margin_bottom: {
            type: String,
            default: "0.5rem"
        }
    },
    computed: {
        actually_margin_bottom() {
            return {
                "margin-bottom": this.margin_bottom
            }
        }
    }
}
</script>

<style scoped>
p {
    font-size: 16px;
    animation: transitionIn 3s;
    text-align:justify;
}


@keyframes transitionIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>