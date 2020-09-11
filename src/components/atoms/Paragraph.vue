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
        },
        font_size: {
            type: String,
            default: "16px"
        }
    },
    computed: {
        actually_margin_bottom() {
            return {
                "font-size": this.font_size,
                "margin-bottom": this.margin_bottom
            }
        }
    }
}
</script>

<style scoped>
p {
    animation: transitionIn 3s;
    text-align:justify;
}

@media (max-width: 568px) {
    p {
        text-align: left;
    }
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