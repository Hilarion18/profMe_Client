<template>
  <div class="todo">
    <todo-navbar :isLogin="isLogin" @sendIsLogin="getIsLogin($event)" @sendIsLogout="getIsLogout($event)" :todoData="todoList" @sendTodoLogout="todoLogout($event)"></todo-navbar>
    <todo-content :todoList="todoList" @sendTodoList="getTodoList($event)"></todo-content>
  </div>
  
</template>

<script>
import TodoNavbar from  "@/components/todo/Navbar.vue"
import TodoContent from  "@/components/todo/Content.vue"

export default {
  components: {
    TodoNavbar,
    TodoContent
  },
  data() {
    return {
      isLogin: '',
      todoList: [],
      todoData: []
    }
  },
  methods: {
    getTodoList(val) {
      this.todoList = val
    },
    todoLogout(val) {
      this.todoList = val
    },
    getIsLogin(val) {
      this.isLogin = val
    },
    getIsLogout(val) {
      this.isLogin = val
    },
    statusLogin() {
      console.log("ini local storage",localStorage);           
      if ( localStorage.getItem('token') ) {
          this.isLogin = true
      } else {
          this.isLogin = false,
          this.todoList = []
      }
    },
  },
  watch: {
    
  },
  created() {
    this.getTodoList()
    this.statusLogin()
  }
}
</script>
