<template>
    <section id="about" class="part-container">
        <Header text="ABOUT ME" icon="glass.svg"/>
        <Introduction></Introduction>
        <Paragraph v-for="(paragraph, index) in paragraphs" :key=index 
            :paragraph=paragraph 
            margin_bottom="30px" />
    </section>
</template>
<script>
import Header from '../molecules/Header'
import Paragraph from '../atoms/Paragraph'
import Introduction from '../molecules/Introduction'

export default {
    name:'About',
    components: {
        Header,
        Paragraph,
        Introduction
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
#about {
    min-height: 100vh;
}
</style>