<template>
  <div id="contentTodo">
    <div class="container">

      <table id="tabs">
        <tbody>
          <tr>
            <th>
              <a>Date
                <p>
                  (YYY, MM, DD)
                </p>
              </a>
            </th>
            <th>Title</th>
            <th>Description</th>
            <!-- <th>Checklist</th> -->
            <th>Time Done</th>
            <th>Status</th>
            <th>Add or remove</th>
            <th>Update</th>
          </tr>
          <tr :key="index" v-for="(todo, index) in todoList">
            <td>{{ todo.date }}</td>
            <td>{{ todo.title }}</td>
            <td>{{ todo.description }}</td>
            <td>done time</td>
            <!-- <td>{{ todo.checklist }}</td> -->
            <td><button>Done</button></td>
            <td><button @click="removeTodo(todo._id)">remove</button></td>
            <td><button @click="getArticleId(todo._id)" data-toggle="modal" data-target="#update_content_access">Edit</button></td>
          </tr>
          <tr>
            <td>Empty</td>
            <td>Empty</td>
            <td>Empty</td>
            <td>Empty</td>
            <td>Empty</td>
              <td v-if="isLogin === true"><button data-toggle="modal" data-target="#content_access">add</button></td>
              <td v-if="isLogin !== true" ><button data-toggle="modal" data-target="#regis_access">add</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <modal-fill-content :todoList="todolist" @sendTodoData="statusUpdateContent">
    </modal-fill-content>
    <modal-update-content :articleId="articleId" @sendTodoData="statusUpdateContent" >
    </modal-update-content>
  </div>
</template>

<script>
import config from '@/config.js'
import ModalFillContent from '@/components/todo/ModalFillContent'
import ModalUpdateContent from '@/components/todo/ModalUpdateContent'

export default {
  components: {
    ModalFillContent,
    ModalUpdateContent
  },
  data() {
    return {
      articleId: '',
      todoData: '',
      isLogin: false,
      listCheck: false,
      todoList: [],
      tesdata: [
        {
          tes1: 'halo',
          tes2: 'halo 2',
          tes3: 'halo 3',
          tes4: 'halo 4'
        },
        {
          tes1: 'halo',
          tes2: 'halo 2',
          tes3: 'halo 3',
          tes4: 'halo 4'
        },
      ]
    }
  },
  methods: {
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
          this.$emit(`sendTodoList`, this.todoList)
      })
      .catch(err => {
        console.log(`todolist err `+todoList);
        
          console.log(err)
          console.log(`error to get todo lists`);
              
      })
    },
    
    removeTodo: function(val) {
      console.log(`ini val `+val);
      axios({
        method: `DELETE`,
        url: `${config.port}/todo/remove/${val} `,
        headers: {
          token: localStorage.getItem("token")
        }
      })
      .then(response => {
        this.getTodoList()
        response,
        console.log(`ini response remove `+response);
      })
      .catch(err => {
        err,
        console.log(`ini err remove `+err);
      })
    },

    statusLogin() {
      console.log("ini local storage",localStorage);           
      if ( localStorage.getItem('token') ) {
          this.isLogin = true
      } else {
          this.isLogin = false
      }
    },

    statusUpdateContent() {
      this.getTodoList()
    },

    // sendUpdateData: function() {
    //   this.$emit(`contentValue` ,this.todoData)
    // },

    getContentData(todos) {
      this.todoList.push(todos)
    },

    getArticleId(val) {
      this.articleId = val
      console.log(`ini article Id nya `+this.articleId);
    }
  },
  created() {
    this.getTodoList()
    this.statusLogin()
  },
  // mounted() {
  //   this.getTodoList()
  // },
  // update() {
  //   this.getTodoList()
  // }
}
</script>

<style scoped>
#tabs {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 200px;
}

#tabs td, #tabs th {
  border: 1px solid #ddd;
  padding: 8px;
}

#tabs tr:nth-child(even){background-color: #f2f2f2;}

#tabs tr:hover {background-color: #ddd;}

#tabs th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: aqua;
  color: black;
}
</style>
