<template>
 <!-- START HEADER -->
<div class="account-registration">
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
    <div class="account-registration-form">
    	<form @submit.prevent="handleSubmit">
			<div class="account-registration-form-fields account-registration-form-name">
				<label>昵称</label>
				<input type="text" name="Nick Name" v-model="nickName" placeholder="取个响亮的名字吧">
			</div>

			<div class="account-registration-form-fields account-registration-form-verification">
				<label>验证码</label>
				<input type="password" name="Verification Code" v-model="verificationCode" placeholder="字母和数字组合">
			</div>
           <ul>
          <li style="color: red;" v-for="err in errors" v-text="err"></li>
        </ul>
			<div class="account-registration-form-submit">
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
        nickName:'',
        verificationCode:''
      }
    },
    vuerify: {
      nickName: {
        test: /^1[2034578]\d{9}$/,
        message: '手机号错误'
      },
     verificationCode: {
        test: /\w{6,}/,
        message: '至少六位字符密码'
      }
    },
    computed:{
        errors () {
        return this.$vuerify.$errors
      },
     ...mapActions([
        'fetchUserRegister'
       ])
    },
    methods:{
      handleSubmit(){
        // this.fetchUserRegister();
        // alert(this.nickName+this.verificationCode)
      }
    }
  }
</script>
<style lang="scss" scoped>
   @import "../assets/css/main.scss"
</style>
