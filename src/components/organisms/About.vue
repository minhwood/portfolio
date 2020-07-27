<template>
    <section id="about" class="part-container">
        <Header text="ABOUT ME" icon="🧐"/>
        <Paragraph v-for="(paragraph, index) in paragraphs" :key=index 
            :paragraph=paragraph 
            margin_bottom="30px" />
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
    },
    data: () => ({
        paragraphs: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Curabitur placerat turpis in diam ultrices, sed maximus neque vestibulum. 
            Suspendisse pulvinar augue a mi imperdiet egestas. 
            Phasellus in lacus porta, tincidunt est eu, rutrum purus. 
            Mauris sed tincidunt metus.Nam consectetur non sapien ac.`,
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Curabitur placerat turpis in diam ultrices, sed maximus neque vestibulum. 
            Suspendisse pulvinar augue a mi imperdiet egestas. 
            Phasellus in lacus porta, tincidunt est eu, rutrum purus. 
            Mauris sed tincidunt metus.Nam consectetur non sapien ac.`,
        ]
    })
}
</script>
<style scoped>
</style>