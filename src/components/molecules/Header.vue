<template>
  <div class="part-header">
      <header-text :text=text :icon=icon></header-text>
      <header-line></header-line>
  </div>
</template>

<script>
import HeaderText from '../atoms/HeaderText'
import HeaderLine from '../atoms/HeaderLine'

export default {
    name:"Header",
    props:{
        text: String,
        icon: String
    },
    components: {
        HeaderText,
        HeaderLine
    }
}
</script>
<style scoped>
.part-header {
    margin-bottom: 60px;
}
</style>