<template>
    <div class="container ">
        <div class="page1">
            <div class="landing-tittle">
                <h1 data-aos-duration="1000" data-aos="zoom-in-up" class="small">Make your own</h1>
                <h1 data-aos-delay="500" data-aos-duration="2000" data-aos="zoom-in-up" class="medium">resume</h1>
                <h1 data-aos-delay="1000" data-aos-duration="3000" data-aos="zoom-in-up" class="big">for free</h1>
            </div>
            <div data-aos-delay="1000" data-aos-duration="3000" data-aos="fade-left" class="landing-button">
                <router-link to="/Resume" class="btn btn1">create my resume</router-link>
            </div>
        </div>
        <div class="page2">
            <h3 data-aos-duration="1000" data-aos="fade-down" class="text-center my-5 medium">choose your template</h3>
            <div class="cardContainer">
                <div data-aos-duration="1000" data-aos="fade-right" class="card1">
                    <img src="../assets/test.png" alt="" style="width:100%;height:100%;">
                </div>
                <div data-aos-duration="2000" data-aos="fade-up" class="card1">
                    <img src="../assets/test.png" alt="" style="width:100%;height:100%;">
                </div>
                <div data-aos-duration="3000" data-aos="fade-left" class="card1">
                    <img src="../assets/test.png" alt="" style="width:100%;height:100%;">
                </div>
            </div>
        </div>
        <div class="page3">
            <h3 data-aos-duration="1000" data-aos="fade-left" class="text-center my-5 medium">fill it with your information</h3>
            <div data-aos-duration="2000" data-aos="fade-right" class="videContainer">

            </div>
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
ul {
    list-style-type: none;
}
.page2 {
    height: 100vh;
}
.cardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.cardContainer .card1 {
    width: 210px;
    height: 297px;
    border-radius: 20px;
}
.cardContainer .card1 img {
    border-radius: 20px;
}
.page3 {
    height: 100vh;
}
.videContainer {
    width: 100%;
    height: 50%;
    background: gray;
    border-radius: 20px;
}
</style>