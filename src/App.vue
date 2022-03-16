<template>
  <div id="nav">
    <router-link to="/">Game</router-link> |
    <router-link to="/dev">For developers</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black-color;

  #nav {
    border-bottom: 1px solid $black-color;
    padding-bottom: 1rem;
    margin: 0 4rem;
  }
}
</style>
