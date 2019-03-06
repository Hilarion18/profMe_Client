<template>
  <!-- Modal: Content -->
  <div class="modal fade" id="update_content_access" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
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
      <form id="update_content-form" >
        <div class="modal-body">
          <div id="div-content-msg">
            <div id="icon-content-msg" class=""></div>
            <span id="text-content-msg">Type your date target, title to do list and description</span>
          </div>
          <input v-model="todoData.date" id="uodate_content_date" class="form-control" type="text" placeholder="YYYY-MM-DD" required>
          <input v-model="todoData.title" id="update_content_title" class="form-control" type="text" placeholder="title" required>
          <input v-model="todoData.description" id="update_content_description" class="form-control" type="text" placeholder="description" required>
          <div class="checkbox">
            <label>
              <input type="checkbox"> Remember me
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <div>
            <button @click="updateTodo()" type="submit" class="btn btn-primary btn-lg btn-block" data-dismiss="modal">Create</button>
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

export default {
  props: ['articleId'],
  data() {
    return {
      todoData: {
        date: '',
        title: '',
        description: ''
      },
      todoList: [],
      articleId: ''
    }
  },

  methods: {
    updateTodo() {
      console.log(`masuk update todo  frontend plus articleId: `+this.articleId);

      axios({
        method: `PUT`,
        url: `${config.port}/todo/update/${this.articleId} `,
        data: {
          date: this.todoData.date,
          title: this.todoData.title,
          description: this.todoData.description,
        },
        headers: {
          token: localStorage.getItem("token")
        }
      })
      .then(response => {
        response,
        console.log(`ini response update `+response);
        this.$emit('sendTodoData', this.todoList)
      })
      .catch(err => {
        err,
        console.log(`ini err update `+err);
      })
    },
    
  }
}
</script>
