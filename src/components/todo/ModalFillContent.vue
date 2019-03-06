<template>
  <!-- Modal: Content -->
  <div class="modal fade" id="content_access" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header" align="center">
          <img class="img-circle" id="img_logo" src="">
          <button type="button" class="close" id="close_form" data-dismiss="modal" aria-label="Close">
            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
      </div>
      
      <!-- Begin # DIV Form -->
      <div id="div-forms">
      
      <!-- Begin # Login Form -->
      <form id="content-form" >
        <div class="modal-body">
          <div id="div-content-msg">
            <div id="icon-content-msg" class=""></div>
            <span id="text-content-msg">Type your date target, title to do list and description</span>
          </div>
          <input v-model="todoData.date" id="content_date" class="form-control" type="text" placeholder="YYYY-MM-DD" required>
          <input v-model="todoData.title" id="content_title" class="form-control" type="text" placeholder="title" required>
          <input v-model="todoData.description" id="content_description" class="form-control" type="text" placeholder="description" required>
          <div class="checkbox">
            <label>
              <input type="checkbox"> Remember me
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <div>
            <button @click="fillContent()" type="submit" class="btn btn-primary btn-lg btn-block" data-dismiss="modal">Create</button>
          </div>
        </div>
      </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/config.js'
import { log } from 'async';

export default {
  props: [],
  data() {
    return {
      todoData: {
        date: '',
        title: '',
        description: ''
      },
      todoList: []
    }
  },
  methods: {
    fillContent: function() {
      axios({
        method: `POST`,
        url: `${config.port}/todo/insert`,
        data: {
          date: this.todoData.date,
          title: this.todoData.title,
          description: this.todoData.description,
        },
        headers: {
          token: localStorage.getItem("token")
        }
      })
      .then((response) => {
        console.log(`this is response create content `+JSON.stringify(response));
        this.todoList.push(response.data.todoData)
        this.getTodoList()
        this.$emit('sendTodoData', this.todoList)
      })
      .catch((err) => {
        console.log(`error to create content `+err);
      })
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

    watch() {
      this.getTodoList()
    },

    created() {
      this.getTodoList()
    }
  }
}
</script>
