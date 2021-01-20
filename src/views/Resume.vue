<template>
  <div id="resume" class="my-3">
      <div class="d-flex pb-5">
        <div class="col-sm-6 left">
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
                <input v-model.lazy="header.career" type="text" class="form-control" placeholder="Career">
            </div>
            <div class="info">
                <h5 class="my-2">2.</h5>
                <input v-model.lazy="info.tittle" type="text" class="form-control my-2" placeholder="Personal Details Tittle">
                <div class="row mt-2" v-for="(item, index) in info" :key="`field-${index}-$`">
                    <div class="col-4">
                        <input v-model.lazy="item.title" type="text" class="form-control" :placeholder="item.placeholderParent">
                    </div>
                    <div class="col-7">
                        <input v-model.lazy="item.value" type="text" class="form-control" :placeholder="item.placeholder">
                    </div>
                    <div v-if="index>2" class="col-1 iconBox-container">
                        <div v-on:click="deleteInfo(index)"  class="iconBox">x</div>
                    </div>
                </div>
                <div class="add my-2 iconBox-container left">
                    <div v-on:click="addInfo()" class="iconBox">+</div>
                </div>
            </div>
            <div class="skills">
                <h5 class="my-2">3.</h5>
                <input v-model.lazy="skills.title" type="text" class="form-control my-2" placeholder="Skills Tittle">
                <div class="row mt-2" v-for="(skill, index) in skills.mySkills" :key="`field-${index}-$`">
                    <div class="col-6">
                        <input v-model.lazy="skill.name" type="text" class="form-control" :placeholder="skill.placeholder">
                    </div>
                    <div class="col-5">
                        <select v-model.lazy="skill.value" class="form-control" id="selectskills">
                            <option value="0">Seleccione</option>
                            <option value="25">+</option>
                            <option value="50">++</option>
                            <option value="75">+++</option>
                            <option value="100">++++</option>
                        </select>
                    </div>
                    <div v-if="index>0" class="col-1 iconBox-container">
                        <div v-on:click="deleteSkill(index)"  class="iconBox">x</div>
                    </div>
                </div>
                <div class="add my-2 iconBox-container left">
                    <div v-on:click="addSkill()" class="iconBox">+</div>
                </div>
            </div>
            <div class="resume">
                <h5 class="my-2">4.</h5>
                <input v-model.lazy="resumen.tittle" type="text" class="form-control mb-2" placeholder="Resume Tittle">
                <textarea v-model.lazy="resumen.about" cols="10" rows="3" placeholder="About you" class="form-control"></textarea>
            </div>
            <div class="jobs">
                <h5 class="my-2">5.</h5>
                <input v-model="jobs.tittle" type="text" class="form-control" placeholder="Jobs Tittle">
                <div class="my-4" v-for="(jobs, index) in jobs.myJobs" :key="`field-${index}-$`">
                    <div class="row">
                        <div class="col-6 mb-2">
                            <input v-model.lazy="jobs.name" type="text" class="form-control" placeholder="Jobs Name">
                        </div>
                        <div class="col-5 mb-2">
                            <input v-model.lazy="jobs.position" type="text" class="form-control" placeholder="Jobs Position">
                        </div>
                        <div v-if="index>0" class="col-1 iconBox-container">
                            <div v-on:click="deleteJob(index)"  class="iconBox">x</div>
                        </div>
                        <datepicker v-model.lazy="jobs.startDate" placeholder="Select start date" input-class="form-control" class="col-6 mb-2"></datepicker>
                        <datepicker v-model.lazy="jobs.endDate" placeholder="Select end date" input-class="form-control" class="col-5 mb-2"></datepicker>
                    </div>
                    <textarea v-model.lazy="jobs.description" cols="10" rows="3" placeholder="Job Description" class="form-control col-11"></textarea>
                </div>
                <div class="add my-2 iconBox-container left">
                    <div v-on:click="addJob()" class="iconBox">+</div>
                </div>
            </div>
        </div>

        <div class="template1">
            <div  v-bind:class="{ 'header-preview': header.firstname}">
                <h2>{{header.firstname}}</h2>
                <h2>{{header.lastname}}</h2>
                <p class="uppercase">{{header.career}}</p>
            </div>
            <div class="bodycontainer">
                <div v-bind:class="{ 'leftcontainer': info.tittle}">
                    <div class="info-preview">
                        <h5>{{info.tittle}}</h5>
                        <div v-bind:class="{ 'underline': info.tittle}"> </div>
                        <div class="personal-details">
                            <div v-for="(item, index) in info" :key="`item-${index}`">
                                <p class="uppercase info-tittle"><strong>{{item.title}}</strong></p>
                                <p>{{item.value}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="skills-preview mt-4">
                        <h5>{{skills.title}}</h5>
                        <div v-bind:class="{ 'underline': skills.title}"> </div>
                        <div class="skills-details">
                            <div class="my-3" v-for="(item, index) in skills.mySkills" :key="`item-${index}`">
                                <p>{{item.name}}</p>
                                <div class="bar" v-bind:style="{width: item.value + '%'}"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rightcontainer">
                    <div v-bind:class="{ 'resume-preview': resumen.tittle}">
                        <h5>{{resumen.tittle}}</h5>
                        <div v-bind:class="{ 'underline': resumen.tittle}"></div>
                        <div class="resume-about text-justify">{{resumen.about}}</div>
                    </div>
                    <div v-bind:class="{ 'jobs-preview mt-4': jobs.tittle}">
                        <h5>{{jobs.tittle}}</h5>
                        <div v-bind:class="{ 'underline': jobs.tittle}"></div>
                        <div class="jobs-details">
                            <div v-for="(item, index) in jobs.myJobs" :key="`item-${index}`">
                                <h5 v-if="item.position">{{item.position+', '+item.name}}</h5>
                                <p v-if="item.startDate && item.endDate">{{dateFormat(item.startDate)+' - '+dateFormat(item.endDate)}}</p>
                                <p class="text-justify">{{item.description}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import moment from 'moment';
export default {
components : {
    Datepicker
},
data() {
    return {
        header : {
            firstname:'',
            lastname:'',
            career:''
        },
        info : [
            {
                title: '',
                value: '',
                placeholderParent: 'Address Tittle',
                placeholder: 'Hollywood Boulevard, Vine St'
            },
            {
                title: '',
                value: '',
                placeholderParent: 'Phone Tittle',
                placeholder: '480 0987654'
            },
            {
                title: '',
                value: '',
                placeholderParent: 'Email Tittle',
                placeholder: 'createyourresume@resume.com'
            }
        ],
        skills : {
            title:'',
            placeholder: 'Skills Tittle',
            mySkills : [
                {
                    name: '',
                    placeholder: 'Skill field',
                    value: 0
                }
            ]
        },
        resumen : {
            tittle:'',
            about:''
        },
        jobs : {
            tittle:'',
            placeholder: 'Jobs Tittle',
            myJobs : [
                {
                    name: '',
                    position: '',
                    startDate: '',
                    endDate: '',
                    description: ''
                }
            ]
        }
    }
  },
  methods: {
    addInfo: function (){
        var number = Number(this.info.length);
        this.info.push({
            title: '',
            value: '',
            placeholderParent: 'Example Field'  + (number - 2),
            placeholder: 'Example Field'
        })
    },
    deleteInfo: function(index) {
        this.info.splice(index, 1);
    },
    addSkill: function(){
        var number = Number(this.skills.mySkills.length);
        this.skills.mySkills.push({
            name: '',
            value: 0,
            placeholder: 'Example Skill' + (number)
        })
    },
    deleteSkill: function(index) {
        this.skills.mySkills.splice(index, 1);
    },
    addJob: function() {
        var number = Number(this.jobs.myJobs.length);
        this.jobs.myJobs.push({
            name: '',
            position: '',
            startDate: '',
            endDate: '',
            description: '',
            placeholder: 'Example Job' + (number)
        })
    },
    deleteJob: function(index) {
        this.jobs.myJobs.splice(index, 1);
    },
    dateFormat: function(date){
        return moment(date).format('d MMM yyyy')
    },
  },
}
</script>

<style lang="scss">
@import '../styles/templates/template1.scss';
#resume {
    margin: 0px 25px;
    .iconBox-container {
        display: flex;
        align-items: center;
        justify-content: center;
        &.left {
            justify-content: left;
        }
    }
    .iconBox {
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
}
</style>