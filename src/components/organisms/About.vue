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
import {about} from '@/constants'

export default {
    name:'About',
    components: {
        Header,
        Paragraph,
        Introduction,
        Contact
    },
    data: () => ({
        paragraphs: about.paragraphs
    })
}
</script>
<style scoped>
#about {
    min-height: 100vh;
}
</style>