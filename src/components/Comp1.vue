<template>
  <div id="Comp1">
    <h1>Here in Comp 1</h1>
    <input type="text" :value="msg" @input ="changeMessage">
    <p>{{ compMessage }}</p>
    <button @click="getUser">get Users Data</button>
  </div>
</template>

<script>
import config from '@/config.js'

export default {
  props: ['msg'],
  data() {
    return {
      compMessage: "",
      userData: '',
      stu: '',
    }
  },
  created() {
    // this.getUser()
  },
  methods: {
    changeMessage(event) {
      this.compMessage = event.target.value;
      this.$emit('messageChanged', this.compMessage)
    },
    getUser() {
      axios({
        method: 'GET',
        url: `${config.port}/user`
      })
        .then((data) => {
          let result = data.data.user
          console.log(result)
          this.userData = result
          this.$emit('usersGot', this.userData)
        })
        .catch((err) => {
          console.log(err)
          console.log(`error to get users data`);
        })
    }
  }
}
</script>
