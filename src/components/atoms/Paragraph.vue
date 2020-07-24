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
    color: var(--secondary-text-color);
    font-size: 20px;
    font-family: var(--default-font);
    margin-bottom:30px;
}
</style>