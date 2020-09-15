<template>
    <div class="person-title">
        <name-tag :name=name />
        <job-title-tag :jobtitle=jobtitle />
    </div>
</template>
<script>
import NameTag from '../atoms/NameTag'
import JobTitleTag from '../atoms/JobTitleTag'

export default {
    name:'PersonTitle',
    props: {
        name: String,
        jobtitle: String
    },
    components: {
        NameTag,
        JobTitleTag
    }
}
</script>
<style scoped>
.person-title {
    margin-top:5px;
    margin-bottom: 100px;
}
</style>