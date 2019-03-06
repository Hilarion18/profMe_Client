import Vue from 'vue'
import Vuex from 'vuex'
import config from '@/config.js'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  // data
  state: {
    // todos: [],
    registrations: [],
    users: [
        {id: 1, name: 'Max', registered: false},
        {id: 2, name: 'Anna', registered: false},
        {id: 3, name: 'Chris', registered: false},
        {id: 4, name: 'Sven', registered: false}
    ],
    people: [
      {id: 'a', name: 'bacot1'},
      {id: 'b', name: 'bacot2'},
      {id: 'c', name: 'bacot3'},
      {id: 'd', name: 'bacot4'}
    ],
    isLogin: '',

  },
  mutations: {
    SET_TODOS (state, todos) {
      state.todos = todos
    },
  },
  actions: {
    saying() {
      console.log(`masuk nih`);
    },
    getTodos: function({commit}) {
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
        commit('SET_TODOS', todos)
      })
      .catch(err => {
        console.log(`todolist err `+todoList);
        console.log(err)
        console.log(`error to get todo lists`); 
      })
    }
  }
})
