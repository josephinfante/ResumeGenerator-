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
<style lang="scss">
  @import "@/styles/main.scss";
</style>
