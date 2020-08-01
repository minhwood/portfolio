<template>
    <section id="skills" class="part-container">
        <Header text="SKILLS" icon="skills.svg"/>
        <div class="skills-box">
        <skill-icon src="python.svg" />
        <skill-icon src="djangopixel.svg" />
        <skill-icon src="javascriptpixel.svg" />
        <skill-icon src="vuepixel.svg" />
        <skill-icon src="html18.svg" />
        <skill-icon src="css18.svg" />
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