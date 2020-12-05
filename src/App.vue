<template>
  <div>
    <navigation></navigation>
    <landing></landing>
  </div>
</template>

<script>
import navigation from './components/Navigation';
import landing from './components/Landing';
export default {
  components: {
    navigation,
    landing,
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
