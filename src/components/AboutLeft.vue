<template>
<div id="aboutLeft">
  <div class="container">
    <div class="text-justify">
      <div class="texting">
          <p><a href="#" style="color: black" @click="clickBio" >Biography</a></p>
          <p><a href="#" style="color: black" @click="clickWorkingExp" >Working Experience</a></p>
          <p><a href="#" style="color: black" @click="clickSkills">Skills</a></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      biography: false,
      workingExp: false,
      skills: false,
    }
  },
  methods: {
    clickBio() {
      this.biography = true,
      this.workingExp = false,
      this.skills = false,
      this.$emit('clickBio', this.biography)
    },
    clickWorkingExp() {
      this.biography = false,
      this.workingExp = true,
      this.skills = false,
      this.$emit('clickWorkingExp', this.workingExp)
    },
    clickSkills() {
      this.biography = false,
      this.workingExp = false,
      this.skills = true
      this.$emit('clickSkills', this.skills)
    }
  }
}
</script>

<style>
.texting {
  margin-top: 70%;
  margin-bottom: 70%;
  margin-left: 30px;
  font-style: oblique;
}
</style>
