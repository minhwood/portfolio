<template>
    <div id="app">
      <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {
    }
}
</script>

<style>
body {
  margin: 0px !important;
}

#app {
  font-family: var(--default-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--default-text-color);
}
</style>
