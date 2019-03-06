<template>
  <div id="navbarTodo">
    <div class="text-left">
      <button v-if="isLogin === false" data-toggle="modal" data-target="#login_access" style="margin: 5px">
        Login
      </button>
      <button v-if="isLogin === false" data-toggle="modal" data-target="#regis_access" style="margin: 5px">
        Register
      </button>
      <!-- <g-signin-button
        :params="googleSignInParams"
        @success="onSignInSuccess"
        @error="onSignInError">
        Sign in with Google
      </g-signin-button>
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
      <div class="g-signin2" data-onsuccess="onSignIn"></div> -->
      
      <button v-if="isLogin === true" @click="logout">
        Logout
      </button>
      <modal-register
        :isLogin="isLogin" @sendIsLogin="getIsLogin($event)" :userData="userData" @sendUserData="getUserData($event)">
      </modal-register>
      <modal-login
      :isLogin="isLogin" @sendIsLogin="getIsLogin($event)" :userData="userData" @sendUserData="getUserData($event)">
      </modal-login>
      <content :todoList="todoList" @sendTodoList="getContent($event)">
      </content>
    </div>
  </div>
</template>

    <script src="https://apis.google.com/js/api.js"></script>
    <script src="https://apis.google.com/js/platform.js" async defer></script>

<script>
import config from '@/config.js'
import { log } from 'async';
import ModalRegister from '@/components/todo/ModalRegister.vue'
import ModalLogin from '@/components/todo/ModalLogin.vue'
import Content from '@/components/todo/Content.vue'
// import GSignInButton from 'vue-google-signin-button'
// Vue.use(GSignInButton)

export default {
  props: ['statusLogin', 'statusLogout'],
  components: {
    ModalRegister,
    ModalLogin,
    Content
  },
  data() {
    return {
      isLogin: false,
      userData: {
        name: '',
        email: '',
        password: '',
        todoList: [],
        todoData: []
      },
      googleSignInParams: {
        client_id: '211180884805-0q38di9t5d5k546aaa0s4t45nvja97mn.apps.googleusercontent.com'
      }
    }
  },
  methods: {
    onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() // etc etc
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    },
    getTodoList: function() {
      axios({
        method: 'GET',
        url: `${config.port}/todo`,
        headers: {
          // id: localStorage.get('userId'),
          token: localStorage.getItem('token')
        }
      })
      .then((todos) => {
          this.todoList = todos.data.todo
          console.log(`ini get todolist`,todoList);
          console.log(`todo list has been found`)
      })
      .catch(err => {
        console.log(`todolist err `+todoList);
        
          console.log(err)
          console.log(`error to get todo lists`);
              
      })
    },
    logout: function() {
      this.isLogin = false
      this.todoData = []
      localStorage.removeItem('userId')
      localStorage.removeItem('token')
      this.$emit('sendIsLogout', this.isLogin)
      this.$emit('sendTodoLogout', this.todoData)
      // this.getTodoList()
      // this.$emit(`emptyTodo`, this.todoList)
    },
    getUserData(getData) {
      this.userData = getData
    },
    getIsLogin(loginStatus) {
      this.isLogin = loginStatus
    },
    statusLogin() {
      console.log("ini local storage",localStorage);           
      if ( localStorage.getItem('token') ) {
          this.isLogin = true
      } else {
          this.isLogin = false
      }
    },
    getContetnt(val) {
      console.log(`masuk get content navbar`);
      this.todoList = val
    }
  },
  created() {
    this.statusLogin()
    this.todoList
  },
  watch() {
    this.statusLogin()
    this.todoList
  }
}
</script>

<style scoped>
.text-left {
  margin-left: 130px;
  margin-bottom: 10px;
  margin-top: 10px
}

.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>
