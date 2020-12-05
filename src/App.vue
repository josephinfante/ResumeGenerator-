<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
  </div>
</template>
<script>
import navigation from './layouts/Navigation'
export default {
  components: {
    navigation
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
</style>
