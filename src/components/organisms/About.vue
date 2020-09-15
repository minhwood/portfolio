<template>
    <section id="about" class="part-container">
        <Header text="ABOUT ME" icon="glass.svg"/>
        <Introduction></Introduction>
        <Paragraph v-for="(paragraph, index) in paragraphs" :key=index 
            :paragraph=paragraph
            font_size="20px" 
            margin_bottom="30px" />
        <contact />
    </section>
</template>
<script>
import Header from '../molecules/Header'
import Paragraph from '../atoms/Paragraph'
import Introduction from '../molecules/Introduction'
import Contact from '../organisms/Contact'

export default {
    name:'About',
    components: {
        Header,
        Paragraph,
        Introduction,
        Contact
    },
    data: () => ({
        paragraphs: [
            `I am a young, curious individual who enjoys writing code and build things to satisfy self-curiosity and make our life a little bit easier.`,
            `Beside that, I'm also a Hufflepuff 🧙 who love coffee ☕, and quite often, I draw ugly pixel-arts just for fun.`
        ]
    })
}
</script>
<style scoped>
#about {
    min-height: 100vh;
}
</style>