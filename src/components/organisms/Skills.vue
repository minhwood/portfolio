<template>
    <section id="skills" class="part-container">
        <Header text="SKILLS" icon="💼"/>
        <div class="skills-box">
        <skill-icon src="pythonpixel.svg" />
        <skill-icon src="djangopixel.svg" />
        <skill-icon src="javascriptpixel.svg" />
        <skill-icon src="vuepixel.svg" />
        <skill-icon src="htmlpixel.svg" />
        <skill-icon src="csspixel.svg" />
        <skill-icon src="sasspixel.svg" />
        <skill-icon src="scalapixel.svg" />
        </div>
    </section>
</template>
<script>
import Header from '../molecules/Header'
import SkillIcon from '../molecules/SkillIcon'

export default {
    name:'Skills',
    components: {
        Header,
        SkillIcon
    }
}
</script>
<style scoped>
.skills-box {
    text-align: center;
}
</style>