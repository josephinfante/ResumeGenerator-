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
                <div class="row mt-2" v-for="(item, index) in info" :key="`field-${index}-$`">
                    <div class="col-4">
                        <input v-model.lazy="item.title" type="text" class="form-control mb-2" :placeholder="item.placeholderParent">
                    </div>
                    <div class="col-8">
                        <input v-model.lazy="item.value" type="text" class="form-control mb-2" :placeholder="item.placeholder">
                    </div>
                </div>
                <div class="add my-2">
                    <div v-on:click="addInfo()" class="plus">+</div>
                </div>
            </div>
            <div class="skills">
                <h5 class="my-2">3.</h5>
                <input v-model.lazy="skills.title" type="text" class="form-control my-2" placeholder="Conocimientos">
                <div class="row mt-2" v-for="(skill, index) in skills.mySkills" :key="`field-${index}-$`">
                    <div class="col-6">
                        <input v-model.lazy="skill.name" type="text" class="form-control" :placeholder="skill.placeholder">
                    </div>
                    <div class="col-6">
                        <select v-model.lazy="skill.value" class="form-control" id="selectskills">
                            <option value="">Seleccione</option>
                            <option value="25">+</option>
                            <option value="50">++</option>
                            <option value="75">+++</option>
                            <option value="100">++++</option>
                        </select>
                    </div>
                </div>
                <div class="add my-2">
                    <div v-on:click="addSkill()" class="plus">+</div>
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
                    <div v-for="(item, index) in info" :key="`item-${index}`">
                        <h5 class="uppercase info-tittle">{{item.title}}</h5>
                        <p>{{item.value}}</p>
                    </div>
                </div>
            </div>
            <div class="skills-preview my-3">
                <h4 class="col-2">{{skills.title}}</h4>
                <div class="underline ml-3"> </div><br>
                <div class="skills-details ml-3">
                    <div v-for="(item, index) in skills.mySkills" :key="`item-${index}`">
                        <p>{{item.name}}</p>
                        <div class="bar" v-bind:style="{width: item.value + '%'}"></div>
                    </div>
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
        info : [
            {
                title: 'Direccion',
                value: '',
                placeholderParent: 'Address Tittle',
                placeholder: 'Hollywood Boulevard, Vine St'
            },
            {
                title: 'Telefono',
                value: '',
                placeholderParent: 'Phone Tittle',
                placeholder: '480 0987654'
            },
            {
                title: 'Email',
                value: '',
                placeholderParent: 'Email Tittle',
                placeholder: 'createyourresume@resume.com'
            }
        ],
        skills : {
            title:'Conocimientos',
            placeholder: 'Conocimientos',
            mySkills : [
                {
                    name: '',
                    placeholder: 'Habilidad',
                    value: 0
                }
            ]
        }
    }
  },
  methods: {
    addInfo: function (){
        var number = Number(this.info.length);
        this.info.push({
            title: 'Example ' + (number - 2),
            value: '',
            placeholderParent: 'Example Field',
            placeholder: 'Example Field'
        })
    },
    addSkill: function(){
        var number = Number(this.skills.mySkills.length);
        this.skills.mySkills.push({
            name: 'Example Skill ' + (number),
            value: 0,
            placeholder: 'Example Skill'
        })
    }
  },
}
</script>

<style>
#details {
    border-right: 1px solid black;
}
.bar {
    background: #717171;
    height: 5px;
}
.plus {
    background: #717171;
    cursor: pointer;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #FFFFFF;
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
