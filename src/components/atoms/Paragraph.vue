<template>
  <p>{{paragraph}}</p>
</template>

<script>
export default {
    name:'Paragraph',
    props: {
        paragraph: String
    }
}
</script>

<style scoped>
p {
    font-size: 16px;
    margin-bottom:30px;
    animation: transitionIn 3s;
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