<template>
    <div class="container containerLoginRegister">
      <div class="backbox">
        <div  :class="{visibility:clicked == 1}" class="loginMessage">
          <div class="textcontent">
            <h3>REGISTER</h3>
            <div class="content1">
              <p>create an account and be part of this. <br>
              make your own resume and presonalize it</p>
              <button @click="clicked = 1" class="btn"><i class="fa fa-chevron-left"></i></button>
            </div>
          </div>
        </div>
        <div :class="{visibility:clicked == 2}" class="registerMessage">
          <div class="textcontent">
            <h3 class="text-right" style="margin-right: 35px;">LOGIN</h3>
            <div class="content2">
              <p>welcome back! dont miss out our free templates. <br>
              choose and custom your resume.</p>
              <button @click="clicked = 2" class="btn"><i class="fa fa-chevron-right"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div :class="{moving:clicked == 1}" class="frontbox">
        <div :class="{hide:clicked == 1}" class="card login">
          <div class="inputbox">
            <input type="email" class="form-control mb-3" placeholder="Email">
            <input type="password" class="form-control mb-3" placeholder="Password">
          </div>
          <a href="#" class="my-3">forgot your password?</a>
          <button class="btn mt-2">LOGIN</button>
        </div>
        <div :class="{hide:clicked !=1 }" class="card register">
          <div class="inputbox">
            <div class="form-group row">
              <div class="col-6">
                <input type="text" class="form-control" placeholder="Name">
              </div>
              <div class="col-6">
                <input type="text" class="form-control" placeholder="Lastname">
              </div>
            </div>
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Email">
            </div>
            <div class="form-group">
              <input type="password" class="form-control" placeholder="Password">
            </div>
            <div class="form-group">
              <input type="password" class="form-control" placeholder="Confirm Password">
            </div>
          </div>
          <button class="btn">REGISTER</button>
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
      clicked: undefined
    }
  },
  methods: {

  }
}
</script>
<style>
/*003b46, 07575b, 66a5ad, c4dfe6*/
.containerLoginRegister {
  max-width: 750px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
}
.backbox {
  background: #DAE1E7;
  width: 100%;
  height: 80%;
  position: absolute;
  transform: translate(0, -50%);
  top: 50%;
  display: inline-flex;
  border-radius: 20px;
}
.frontbox {
  background: white;
  border-radius: 20px;
  height: 100%;
  width: 45%;
  z-index: 1;
  position: absolute;
  right: 0;
  margin-right: 3%;
  margin-left: 3%;
  transition: right .8s ease-in-out;
}
.content1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.content1 p {
  width: 70%;
}
.content1 button {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background: #00909E;
  font-size: 25px;
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
}
.content1 button .fa {
  color: #DAE1E7;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn:focus, .btn.focus {
  outline: 0;
  -webkit-box-shadow: none;
}
.content2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: right;
}
.content2 p {
  width: 70%;
  margin-left: 60px;
}
.content2 button {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background: #00909E;
  font-size: 25px;
  position: absolute;
  top: 50%;
  right: 35%;
  transform: translate(-50%, -50%);
}
.content2 button .fa {
  color: #DAE1E7;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.card {
  border-radius: 20px;
}
.moving {
  right: 45%;
}
.loginMessage, .registerMessage {
  width: 50%;
  height: 100%;
  font-size: 15px;
  box-sizing: border-box;
}
.textcontent {
  margin-top: 65px;
  margin-left: 12%;
}
.login, .register {
  padding: 20px;
  text-align: center;
}
.login button, .register button {
  background: #00909E;
  color: #DAE1E7;
  border-radius: 20px;
  width: 50%;
  margin: 0px auto;
}
.register {
  margin: -35px 0px;
}
.inputbox {
  margin-top: 30px;
}
input {
  border-radius: 20px!important;
  background-color: #DAE1E7!important;
}
.loginMessage, .registerMessage {
  transition: opacity .8s ease-in-out;
}
.visibility {
  opacity: 0;
}
.hide {
  display: none;
}
</style>