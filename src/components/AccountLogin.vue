<template>
  <div class="account-login">
    <div class="account-login-header-nav">
      <a href="#/"><img class="head-icon" src="../assets/svg/arrow-left-grey.svg"/></a>
    </div>
    <div class="account-login-header">
      <img src="../assets/svg/logo.svg">
    </div>

    <div class="account-login-form">
      <form @submit.prevent="handleSubmit">
        <div class="account-login-form-fields account-login-form-phonenumber">
          <label>手机</label>
          <input type="tel" v-model="tel" name="tel" placeholder="请输入手机号">
        </div>

        <div class="account-login-form-fields account-login-form-user-pass">
          <label>密码</label>
          <input type="password" v-model="password" name="Phone Numbers" placeholder="请输入登录密码">
        </div>
        <ul>
          <li style="color: red;" v-for="err in errors" v-text="err"></li>
        </ul>

        <div class="account-login-form-submit">
          <input class="submit" type="submit" name="submit" :disabled="invalid" value="登   录">
        </div>

        <div class="account-login-form-register">
          <a class="register" href="#/account-registration">注 册</a>
        </div>
      </form>
    </div>

    <div class="account-login-other-links">
      <a class="account-login-other-links-left" href="#/account-registration">忘记密码?</a>
      <a class="account-login-other-links-right" href="#">联系客服</a>
    </div>
  </div>
</template>
<script>
  import config from '../app-config/config.json'
  export default {
    data () {
      return {
        tel: '',
        password: ''
      }
    },

    vuerify: {
      tel: {
        test: /^1[2034578]\d{9}$/,
        message: '手机号错误'
      },
      password: {
        test: /\w{6,}/,
        message: '至少六位字符密码'
      }
    },

    computed: {
      errors () {
        return this.$vuerify.$errors
      },
      invalid () {
        return this.$vuerify.invalid
      }
    },

    methods: {
      handleSubmit () {
        if (this.$vuerify.check()) {

          let query = `?entrance=/trade/&mobile=${this.tel}&password=${this.password}`;
          this.$http.post(`${config.host}/sso/user_login_check${query}`).then((data) => {
            console.log(this.$route, data);
          });
        }
      }
    }
  }
</script>

<!-- Loads SCSS -->
<style lang="scss" scoped>
  @import "../assets/css/main.scss";
</style>
