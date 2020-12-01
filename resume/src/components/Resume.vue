<template>
  <div id="resume">
      <div class="d-flex">
        <div class="col-sm-6" id="details">
            <h1 class="text-center my-3">create your resume</h1>
            <div class="header">
                <h5>1.</h5>
                <div class="row mb-2">
                    <div class="col-6">
                        <input v-model.lazy="header.firstname" type="text" class="form-control" placeholder="Firstname">
                    </div>
                    <div class="col-6">
                        <input v-model.lazy="header.lastname" type="text" class="form-control" placeholder="Lastname">
                    </div>
                </div>
                <input v-model.lazy="header.career" type="text" class="form-control" placeholder="career">
            </div>
            <div class="info">
                <h5 class="my-2">2.</h5>
                <input v-model.lazy="info.tittle" type="text" class="form-control my-2" placeholder="Detalles Personales">
                <div class="row mt-2">
                    <div class="col-4">
                        <input v-model.lazy="info.tittleaddress" type="text" class="form-control mb-2" placeholder="Address Tittle">
                    </div>
                    <div class="col-8">
                        <input v-model.lazy="info.address" type="text" class="form-control mb-2" placeholder="Hollywood Boulevard, Vine St">
                    </div>
                    <div class="col-4">
                        <input v-model.lazy="info.tittlephone" type="text" class="form-control mb-2" placeholder="Phone Tittle">
                    </div>
                    <div class="col-8">
                        <input v-model.lazy="info.phone" type="number" class="form-control mb-2" placeholder="480 0987654">
                    </div>
                    <div class="col-4">
                        <input v-model.lazy="info.tittleemail" type="email" class="form-control mb-2" placeholder="Email Tittle">
                    </div>
                    <div class="col-8">
                        <input v-model.lazy="info.email" type="text" class="form-control" placeholder="createyourresume@resume.com">
                    </div>
                </div>
            </div>
            <div class="skills">
                <h5 class="my-2">3.</h5>
                <input v-model.lazy="skills.tittle" type="text" class="form-control my-2" placeholder="Conocimientos">
                <div class="add row">
                    <div class="col-6">
                        <input v-model.lazy="skills.name" type="text" class="form-control" placeholder="skill">
                    </div>
                    <div class="col-5">
                        <select class="form-control" id="selectskills">
                            <option></option>
                            <option>+</option>
                            <option>++</option>
                            <option>+++</option>
                            <option>++++</option>
                        </select>
                    </div>
                    <div class="col-1 my-2">
                        <i class="fa fa-plus-circle"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6" id="preview">
            <h1 class="text-center my-3">preview your resume</h1>
            <div class="header-preview ml-3">
                <h2>{{header.firstname}}</h2>
                <h2>{{header.lastname}}</h2>
                <p class="uppercase">{{header.career}}</p>
            </div>
            <div class="info-preview my-3">
                <h4 class="col-2">{{info.tittle}}</h4>
                <div class="underline ml-3"> </div><br>
                <div class="personal-details ml-3">
                    <h5 class="uppercase info-tittle">{{info.tittleaddress}}</h5>
                    <p>{{info.address}}</p>
                    <h5 class="uppercase info-tittle">{{info.tittlephone}}</h5>
                    <p>{{info.phone}}</p>
                    <h5 class="uppercase info-tittle">{{info.tittleemail}}</h5>
                    <p>{{info.email}}</p>
                </div>
            </div>
            <div class="skills-preview my-3">
                <h4 class="col-2">{{skills.tittle}}</h4>
                <div class="underline ml-3"> </div><br>
                <div class="skills-details ml-3">
                    <p class="uppercase">{{skills.name}}</p>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
        header : {
            firstname:'',
            lastname:'',
            career:''
        },
        info : {
            tittle:'Detalles Personales',
            tittleaddress:'Direccion',
            address:'',
            tittlephone:'Telefono',
            phone:'',
            tittleemail:'Email',
            email:''
        },
        skills : {
            tittle:'Conocimientos',
            name:''
        }
    }
  },
  methods: {
  },
}
</script>

<style>
#details {
    border-right: 1px solid black;
}
.header-preview h2 {
    font-weight: 900;
}
.header-preview {
    border-bottom: 1px solid black;
}
.uppercase {
    text-transform: uppercase;
}
.underline {
    width: 65px;
    height: 4px;
    border-radius: 20px;
    background: black;
}
.info-tittle {
    font-weight: 900;
}
</style>
