<template>
  <div class="login">
    <div class="login-box">
      <div class="login-logo"><b>Z</b> Admin</div>
      <div class="login-card">
        <p>Sign in</p>
        <b-form @submit.prevent="handleLogin">
          <!-- 账号 -->
          <b-form-group id="input-group-1">
            <b-form-input
              id="input-username"
              v-model="loginForm.username"
              type="text"
              required
              placeholder="username / email"
              autocomplete="off"
            ></b-form-input>
          </b-form-group>
          <!-- 密码 -->
          <b-form-group id="input-group-2">
            <b-form-input
              id="input-password"
              v-model="loginForm.password"
              type="password"
              required
              placeholder="password"
            ></b-form-input>
          </b-form-group>
          <!-- 提交按钮 -->
          <b-button v-if="logging" block disabled variant="primary">
            Logging...
          </b-button>
          <b-button v-else block type="submit" variant="primary">
            Submit
          </b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      logging: false,
      msg: null
    };
  },
  methods: {
    handleLogin() {
      this.logging = true;
      // this.$store
      //   .dispatch("login", this.loginForm)
      //   .then(() => this.$router.push("/"))
      //   .catch(error => {
      //     this.msg = error;
      //     alert(this.msg);
      //   })
      //   .finally(() => (this.logging = false));
      setTimeout(() => {
        if (
          this.loginForm.username === "test" &&
          this.loginForm.password === "123"
        ) {
          this.$router.push("/");
        } else {
          alert("賬號或密碼錯誤");
          this.logging = false;
        }
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  // position
  position: relative;
  // style
  min-height: 100vh;
  background-color: #f0f0f0;
  // display
  display: flex;
  justify-content: center;
  align-items: center;
  .login-box {
    // position
    position: absolute;
    top: 15%;
    // style
    min-width: 350px;
    // display
    display: flex;
    flex-direction: column;
    text-align: center;
    .login-logo {
      margin-bottom: 15px;
      font-size: 24px;
    }
    .login-card {
      padding: 20px;
      background-color: #ffffff;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.125), 0 1px 3px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
