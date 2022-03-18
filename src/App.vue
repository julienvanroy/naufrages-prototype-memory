<template>
  <div id="view">
    <router-view/>
  </div>
  <div id="nav">
    <router-link to="/">Game</router-link> |
    <router-link to="/dev">For developers</router-link>
  </div>
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
    border-top: 1px solid $black-color;
    padding: 1rem 0 0.5rem;
    margin: 0 4rem;
  }

  #view {
    min-height: 100vh;
  }
}
</style>
