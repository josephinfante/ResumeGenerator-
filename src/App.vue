<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
    <footerc></footerc>
  </div>
</template>
<script>
import navigation from './layouts/Navigation'
import footerc from './layouts/Footer'
export default {
  components: {
    navigation,
    footerc
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
