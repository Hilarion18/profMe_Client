<template>
  <div class="about">
    <leftside>
      <about-left :biography="biography" @clickBio="getBio($event)" :workingExp="workingExp" @clickWorkingExp="getWork($event)" :skills="skills" @clickSkills="getSkills($event)">
      </about-left>
    </leftside>
    <rightside>
        <biography-comp v-if="biography === true"></biography-comp>
        <working-exp-comp v-if="workingExp === true"></working-exp-comp>
        <skills-comp v-if="skills === true"></skills-comp>
    </rightside>
  </div>
</template>

<script>
import AboutLeft from '@/components/AboutLeft.vue'
import AboutRight from '@/components/AboutRight.vue'
import BiographyComp from '@/components/biodata/Biography.vue'
import WorkingExpComp from '@/components/biodata/WorkingExperience.vue'
import SkillsComp from '@/components/biodata/Skills.vue'

export default {
  components: {
    AboutLeft,
    AboutRight,
    BiographyComp,
    WorkingExpComp,
    SkillsComp
  },
  data() {
    return {
      bgc: {
        backgroundColor: ''
      },
      colorFilled: '',
      biography: false,
      workingExp: false,
      skills: false
    }
  },
  methods: {
    getBio(dataBio) {
      this.biography = dataBio
      this.workingExp = false
      this.skills = false
    },
    getWork(dataWork) {
      this.workingExp = dataWork
      this.biography = false
      this.skills = false
    },
    getSkills(dataSkills) {
      this.skills = dataSkills
      this.biography = false
      this.workingExp = false
    }
  }
}
</script>

<style>
leftside {
  position: fixed;
  top: 0;
  right: 65%;
  width: 35%;
  height: 100%;
  overflow-y: auto;
  overflow-x: auto;
  background-color: rgb(69, 100, 157);
  /* transform: rotate(-45deg); */
}

.insidetext {
  margin-top: 80px;
}

input {
		background-color: transparent;
		border-color: transparent;
		border-bottom-color: black;
    background-repeat: no-repeat;
}

rightside {
  position: fixed;
  top: 0;
  left: 35%;
  width: 65%;
  height: 100%;
  /* background-repeat: no-repeat; */
  overflow-y: auto;
  overflow-x: auto;
  background-color: pink;
  /* transform: rotate(-45deg); */
}

.insidetext {
  margin-top: 80px;
}

colorright {
  background-color: pink;
}

input {
		background-color: transparent;
		border-color: transparent;
		border-bottom-color: black;
    background-repeat: no-repeat;
}


.bioText {
  margin-top: 25%;
  margin-bottom: 50px;
  margin-left: 3%;
}
</style>
