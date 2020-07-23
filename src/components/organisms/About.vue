<template>
    <section id="about" class="part-container">
        <Header text="ABOUT ME" icon="🧐"/>
        <Paragraph paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in lacus porta, tincidunt est eu, rutrum purus. Curabitur placerat turpis in diam ultrices, sed maximus neque vestibulum. Suspendisse pulvinar augue a mi imperdiet egestas. Mauris sed tincidunt metus.
Nam consectetur non sapien ac."/>
    </section>
</template>
<script>
import Header from '../molecules/Header'
import Paragraph from '../atoms/Paragraph'

export default {
    name:'About',
    components: {
        Header,
        Paragraph
    }
}
</script>
<style scoped>
</style>