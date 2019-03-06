<template>
  <!-- Modal: Login -->
  <div class="modal fade" id="login_access" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
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
      <form id="login-form" >
        <div class="modal-body">
          <div id="div-login-msg">
            <div id="icon-login-msg" class="glyphicon glyphicon-chevron-right"></div>
            <span id="text-login-msg">Type your username and password.</span>
          </div>
          <input v-model="userData.email" id="login_email" class="form-control" type="text" placeholder="Email" required>
          <input v-model="userData.password" id="login_password" class="form-control" type="password" placeholder="Password" required>
          <div class="checkbox">
            <label>
              <input type="checkbox"> Remember me
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <div>
            <button @click="login" v-on:click="aksesDataLogin" type="submit" class="btn btn-primary btn-lg btn-block" data-dismiss="modal">Login</button>
          </div>
          <div>
            <!-- <button id="login_lost_btn" type="button" class="btn btn-link" data-toggle="modal" data-target="#lost-form">Lost Password?</button> -->
            <button id="login_register_btn" type="button" class="btn btn-link" data-toggle="modal" data-target="#regis_access" data-dismiss="modal">Register</button>
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
  components: {

  },
  data() {
    return {
      userData: {
        email: '',
        password: ''
      },
      isLogin: false,
    }
  },
  methods: {
    login: function() {
      axios({
        method: `POST`,
        url: `${config.port}/user/login`,
        data: {
          email: this.userData.email,
          password: this.userData.password
        }
      })
      .then((response) => {
        response,
        console.log(`Login successed `+JSON.stringify(response));
        localStorage.setItem('userId', response.data.id)
        localStorage.setItem('token', response.data.token)
        this.isLogin = true
        this.$emit('sendIsLogin', this.isLogin)
        this.$emit('sendUserData', this.userData)
      })
      .catch((err) => {
        err,
        console.log(`Login failed `+JSON.stringify(err))
      })
    },
    watch() {
      this.isLogin
    }
  }
}
</script>
