<template>
    <section id="playground" class="part-container">
        <Header text="PLAYGROUND" icon="🚀"/>
        <UnderConstructions />
    </section>
</template>
<script>
import Header from '../molecules/Header'
import UnderConstructions from '../molecules/UnderConstructions'

export default {
    name:'Playground',
    components: {
        Header,
        UnderConstructions
    }
}
</script>
<style scoped>
#playground {
    min-height: 100vh;
}
</style>