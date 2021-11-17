<template>
  <p :style=actually_margin_bottom>- {{text}}</p>
</template>

<script>
export default {
    name:'CheckLine',
    props: {
        text: String,
        margin_bottom: {
            type: String,
            default: "0px"
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