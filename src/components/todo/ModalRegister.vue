<template>
  <div class="modal fade" id="regis_access" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header" align="center">
            <img class="img-circle" id="img_logo" src="">
            <button type="button" class="close" id="close_regis" data-dismiss="modal" aria-label="Close">
              <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </button>
          </div>
          
          <!-- Begin # DIV Form -->
          <div id="div-forms">            
            <!-- Begin | Register Form -->
            <form id="register-form" >
              <div class="modal-body">
                <div id="div-register-msg">
                  <div id="icon-register-msg" class="glyphicon glyphicon-chevron-right"></div>
                  <span id="text-register-msg">Please register an account.</span>
                </div>
                <input v-model="userData.name" id="regis_name" class="form-control" type="text" placeholder="Name" required>
                <input v-model="userData.email" id="regis_email" class="form-control" type="text" placeholder="Email" required>
                <input v-model="userData.password" id="regis_password" class="form-control" type="password" placeholder="Password" required>
              </div>
              <div class="modal-footer">
                <div>
                  <button type="submit" class="btn btn-primary btn-lg btn-block" @click="register" data-dismiss="modal">Register</button>
                </div>
                <div>
                  <button id="register_login_btn" type="button" class="btn btn-link" data-toggle="modal" data-target="#login_access" data-dismiss="modal">Log In</button>
                  <!-- <button id="register_lost_btn" type="button" class="btn btn-link">Lost Password?</button> -->
                </div>
              </div>
            </form>
            <!-- End | Register Form -->
              
          </div>
          <!-- End # DIV Form -->
            <!-- {{ responseRegister }} -->
        </div>
      </div>
  </div>
</template>

<script>
import config from '@/config.js'

export default {
  data() {
    return {
      userData: {
        name: '',
        email: '',
        password: ''
      },
      isLogin: false,
      responseRegister: []
    }
  },
  methods: {
    register: function() {
      axios({
        method: `POST`,
        url: `${config.port}/user/register`,
        data: {
          name: this.userData.name,
          email: this.userData.email,
          password: this.userData.password,
        }
      })
      .then((response) => {
        response,
        this.responseRegister = response,
        console.log(`this is response `+JSON.stringify(response.data.token)),
        console.log(`Registered successed`),
        localStorage.setItem('userId', response.data.id)
        localStorage.setItem('token', response.data.token)
        this.isLogin = true,
        this.$emit('sendIsLogin', this.isLogin)
        this.$emit('sendUserData', this.userData)
      })
      .catch((err) => {
        err
        console.log(`Registration failed`);
      })
    },
  },
  watch() {
    this.isLogin
  }
}
</script>
