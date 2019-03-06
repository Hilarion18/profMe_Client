<template>
  <div id="registration">
        <!-- <h3>Register here</h3>
        <hr>
        <div class="row" :key="index" v-for="(user, index) in users">
            <h4>{{ user.name }}</h4>
            <button @click="registerUser(user)">Register</button>
        </div> -->
        <h4>HALO</h4>
        <h4>di bawah ini todos</h4>
        <h4>{{ todos }}</h4>
        <!-- <div :key="index" v-for="(todo , index) in todos">
            <a href="">{{ todo.title }}</a>
        </div> -->
        <a :key="index" v-for="(todo , index) in todos">
            {{ todo.title }}
        </a>
    </div>
</template>

<script>
// import {mapState} from 'vuex'
import config from '@/config.js'
import { log } from 'async';

export default {
    data() {
        return {
            orang: this.$store.state.users,
            todos: ''
        }
    },
  computed: {
    users() {
        return this.$store.state.users.filter(user => {
            return !user.registered;
        });
    },
    // ...mapState([
    //     'todos'
    // ])
  },
  methods: {
      registerUser(user) {
          const date = new Date;
          user.registered = true;
          this.$store.state.registrations.push({userId: user.id, name: user.name, date: date.getMonth() + '/' + date.getDay()});
      },
      getTodoes: function({commit}) {
      axios({
        method: 'GET',
        url: `${config.port}/todo`,
        headers: {
        // id: localStorage.get('userId'),
        token: localStorage.getItem('token')
        }
      })
      .then((data) => {
        this.todos = data.data.todo
        console.log(`ini get todolist`,todos);
        console.log(`todo list has been found`)
        // localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YzY1MjY3NTA3MTljNzc1MmNhOTU2ZjEiLCJlbWFpbCI6ImJhY2l0QG1haWwuY29tIiwiaWF0IjoxNTUwMjM5NDcyfQ.vFU85BQvBPSpYoVzYaDXIWuCSm122n1fIb-aFBCd0QU')
        // commit('SET_TODOS', todos)
      })
      .catch(err => {
        console.log(`todolist err `+todoList);
        console.log(err)
        console.log(`error to get todo lists`); 
      })
    }
      
  },
  mounted() {
      console.log(this.$store.state.people)
    //   console.log(`ini state todos `, this.$store.state.todos);
    console.log(`ini mounted gettodos `, this.todos);
    
      console.log(this.orang)
      this.todoList
    //   this.getTodos()
  },
  created() {
      console.log(`ini get todos `, this.todos)
      this.getTodoes()
  }
}
</script>

<style scoped>
    #registration {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        width: 300px;
        vertical-align: top;
    }
    .row h4 {
        display: inline-block;
        width: 70%;
        text-align: left;
        margin: 0 0 10px 0;
    }
    button {
        background-color: lightgreen;
        border: none;
        box-shadow: 1px 1px 1px black;
        font-size: inherit;
        text-align: right;
        cursor: pointer;
    }
    button:hover {
        background-color: green;
    }
</style>