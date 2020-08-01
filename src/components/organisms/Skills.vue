<template>
    <section id="skills" class="part-container">
        <Header text="SKILLS" icon="skills.svg"/>
        <div class="skills-box">
        <skill-icon description="Python" src="python.svg" />
        <skill-icon description="Django" src="djangopixel.svg" />
        <skill-icon description="Javascript" src="javascriptpixel.svg" />
        <skill-icon description="VueJs" src="vuepixel.svg" />
        <skill-icon description="HTML" src="html18.svg" />
        <skill-icon description="CSS" src="css18.svg" />
        <skill-icon description="Scala" src="scalapixel.svg" />
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