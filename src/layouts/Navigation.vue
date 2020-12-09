<template>
    <div class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <router-link to="/" class="navbar-brand  mr-auto" >LOGONAME</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item my-auto">
                <router-link to="/LoginRegister" class="fa fa-user"></router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  components: {
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
.fa {
  color: #8d8b7a;
}
.fa:hover {
  color: white;
}
</style>