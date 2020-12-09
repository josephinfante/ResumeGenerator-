<template>
    <div class="footer">
        <div class="container">
            <h5>LOGONAME</h5>
            <div class="line"></div>
            <div class="links">
                <ul>
                    <li class="my-3">
                        <a href="#">Terms and Conditions</a>
                    </li>
                    <li class="my-3">
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li class="my-3">
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div class="socialLinks">
                <i class="fa fa-facebook mx-3"></i>
                <i class="fa fa-instagram mx-3"></i>
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
.footer {
    width: 100%;
    height: 130px;
    background: black;
}
.footer .container {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 30px 1fr 1fr;
    grid-template-rows: repeat(1, 1fr);
    grid-template-areas: 
    'h5 line links sl';
}
.footer .container h5 {
    color: white;
    grid-area: h5;
    justify-self: center;
    align-self: center;
}
.footer .container .line {
    grid-area: line;
    height: 70%;
    background: white;
    width: 2px;
    align-self: center;
}
.footer .container .links {
    grid-area: links;
    color: white;
    align-self: center;
}
.footer .container .links ul {
    margin-top: 0px;
    margin-bottom: 0px;
}
.footer .container .links ul li a{
    color: white;
}
.footer .container .socialLinks {
    grid-area: sl;
    color: white;
    justify-self: flex-end;
    align-self: center;
}
.footer .container .socialLinks .fa {
    font-size: 20px;
}
</style>