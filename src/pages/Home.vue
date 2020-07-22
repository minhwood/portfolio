<template>
    <div>
        <div class="dark-background background"></div>
        <div class="light-background background"></div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {
    }
}
</script>
<style scoped>
.background {
  min-height: 100vh;
  width: 50%;
  height: 100%;
  z-index: -1000;
}

.dark-background {
  position: fixed;
  left:0;
  top: 0;
  background-color: rgb(25, 34, 39);
  display: inline-block;
}

.light-background {
  position: fixed;
  right: 0;
  top: 0;
  background-color: rgb(38, 50, 56);
  display: inline-block;
}
</style>