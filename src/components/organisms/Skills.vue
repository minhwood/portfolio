<template>
    <section id="skills" class="part-container">
        <Header text="SKILLS" icon="💼"/>
        <skill-icon src="python.svg" />
        <skill-icon src="django.svg" />
        <skill-icon src="javascript.svg" />
        <skill-icon src="vue.svg" />
        <skill-icon src="html.svg" />
        <skill-icon src="css.svg" />
        <skill-icon src="scss.svg" />
        <skill-icon src="scala.svg" />
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
#skills {
    text-align: center;
}
</style>