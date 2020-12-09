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
<style lang="scss">
  @import "@/styles/main.scss";
</style>
