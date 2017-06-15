<template>

<div class="account-registration account-registration-phone-verification">
    <!-- START HEADER -->
    <div class="header">
      <div class="header-left">
       <a href="#/account-login"><img class="head-icon" src="../assets/svg/arrow-left.svg" /></a>
      </div>
        <h1>免费注册</h1>
      <div class="header-right">
        登录
      </div>
    </div>
    <!-- END HEADER -->

    <!-- ACCOUNT REGISTRATION -->
    <div class="account-registration-form account-registration-phone-verification-form">
    	<form @submit.prevent="handleSubmit">
			<div class="account-registration-form-fields account-registration-form-mobile">
				<label>手机号</label>
				<input type="text" name="Phone Number" v-model="mobile" placeholder="请输入手机号">
			</div>
     
			<div class="account-registration-form-fields account-registration-form-mobile-verification">
				<label>验证码</label>
				<input type="password" name="Phone Verification Code" v-model="verifyCode" placeholder="请输入短信验证码">
        <a  @click="handleVerifyCode">获取验证码</a>
			</div>
      
      <div class="account-registration-form-service-agreement">
      <input type="checkbox" name="service agreement"> 我已阅读并同意<span>操盘英雄服务协议</span>
      </div>
     <ul>
          <li style="color: red;" v-for="err in errors" v-text="err"></li>
        </ul>
     	<div class="account-registration-form-submit account-registration-form-mobile-submit">

				<input class="submit" type="submit" name="submit" value="注   册">
			</div>
    	</form>
    </div>
    <!-- END ACCOUNT REGISTRATION -->
</div>
</template>
<script>
import {mapGetters, mapActions, mapMutations, mapState} from 'vuex'
  export default{
    data(){
      return {
        mobile:'',
        verifyCode:''
      }
    },
    vuerify: {
      mobile: {
        test: /^1[2034578]\d{9}$/,
        message: '手机号错误'
      }
    },
    computed:{
      errors () {
        return this.$vuerify.$errors
      }
    },
    methods:{
      ...mapActions([
        'fetchVerifyCode',
        'fetchUserRegister'
       ]),
      handleVerifyCode(){
           let params={
          mobile:this.mobile
        }
         this.fetchVerifyCode(params);
      },
      handleSubmit(){
        let params={
          verifyCode:this.verifyCode
         }
      this.fetchUserRegister(params);
      }
    }
  }
</script>
<style lang="scss" scoped>
   @import "../assets/css/main.scss"

</style>
