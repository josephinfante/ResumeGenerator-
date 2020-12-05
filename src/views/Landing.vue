<template>
    <div class="container page1">
        <div class="landing-tittle">
            <h1 class="small">Make your own</h1>
            <h1 class="medium">resume</h1>
            <h1 class="big">for free</h1>
        </div>
        <div class="landing-button">
            <router-link to="/Resume" class="btn btn1">click here</router-link>
        </div>
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
/*003b46, 07575b, 66a5ad, c4dfe6*/
.page1 {
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1,1fr);
    grid-template-areas: 
    'landing-tittle landing-button';
}
.landing-button {
    grid-area: landing-button;
    justify-self: center;
    align-self: center;
}
.btn1 {
    background: #07575B;
    color: #c4dfe6;
}
.btn1:hover {
    background: #66a5ad;
    color: #003b46;
}
.landing-tittle {
    justify-self: center;
    align-self: center;
    grid-area: landing-tittle;
}
.small {
    font-size: 25px;
}
.medium {
    font-size: 60px;
}
.big {
    font-size: 80px;
}
</style>