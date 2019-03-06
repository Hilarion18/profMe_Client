<template>
  <div id="contact">
    <div>
      <h1>Here in Contact</h1>
      <p>{{ message }} </p>
      <comp-input :msg="message" @messageChanged="message = $event"  :userData="users" @usersGot="allUsers($event)">
      </comp-input>
      <P>{{ users }}</P> 
    </div>     
  </div>
</template>

<script>
import Comp1 from '@/components/Comp1.vue'

export default {
  components: {
    'comp-input': Comp1
  },
  data() {
    return {
      users: 'tidak ada',
      message: 'Hai',
      greeting: 'Hello World!',
      user: 'Hassan Djirdeh',
      city: 'Toronto',
      cityImage: 'https://bit.ly/2SKJPqJ',
      numbers: [
        {id: 1, value: 1},
        {id: 2, value: 10},
        {id: 3, value: 100},
        {id: 4, value: 1000},
        {id: 5, value: 10000}
      ],
    }
  },
  methods: {
     allUsers(dataUsers) {
       this.users = dataUsers
     }
    }
}
</script>
