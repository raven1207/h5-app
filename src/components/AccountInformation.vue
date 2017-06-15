<template>
	<div class="account account-information">
		<div class="header">
			<div class="header-left">
		    	<img class="head-icon" src="../assets/svg/arrow-left.svg" />
		    </div>
	    	<h1>个人信息</h1>
    	</div>

    	<div class="account-information-banner">

    	<div class="account-information-banner-security-level">
	    	<vue-easy-pie-chart :percent="pieChart"></vue-easy-pie-chart>
	    </div>
    	<div class="account-information-banner-background">&nbsp;</div>
    	<div class="account-information-banner-bottom">&nbsp;</div>
    	</div>

    	<div class="account-information-container">
    	<ul>
    		<li class="account-information-container-verify">
	    		<a href="#">
	    			<span class="items item-left">实名认证</span> <span class="items item-right arrow-right">*测试</span>
	    		</a>
    		</li>
    		<li class="account-information-container-withdraw">
	    		<a href="#">
	    			<span class="items item-left">提款银行卡</span> <span class="items item-right arrow-right">2张</span>
	    		</a>
    		</li>
    		<li class="account-information-container-phone-bind">
	    		<a href="#">
	    			<span class="items item-left">手机绑定</span> <span class="items item-right arrow-right">132 **** 2009 修改</span>
	    		</a>
    		</li>
    	</ul>
    	<ul>
    		<li class="account-information-container-account-password">
	    		<a href="#">
	    			<span class="items item-left">登录密码</span> <span class="items item-right arrow-right">已设置</span>
	    		</a>
    		</li>
    		<li class="account-information-container-withdraw-password">
	    		<a href="#">
	    			<span class="items item-left">提款密码</span> <span class="items item-right arrow-right">未设置</span>
	    		</a>
    		</li>
    	</ul>
    	</div>
	</div>
</template>

<script>
import VueEasyPieChart from 'vue-easy-pie-chart'
// import 'vue-easy-pie-chart/dist/vue-easy-pie-chart.css'

export default {
  components: { VueEasyPieChart },
  data () {
    return { pieChart: 70 }
  }
}
</script>

<!-- Loads SCSS -->
<style lang="scss" scoped>
   @import "../assets/css/main.scss";
</style>

<style>
.vue-easy-pie-chart[data-v-8087077e] {
  position: relative;
  text-align: center;
}
.vue-easy-pie-chart .inner-text[data-v-8087077e] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  display: block;
  color: #ffe38f;
  text-shadow: 2px 2px 2px #4b4b4b;
  font-size: .5em;
}

.vue-easy-pie-chart .inner-text[data-v-8087077e]:after{
	content: '安全级别';
	display: block;
	color: #c7edff;
	font-size: .4em;
	position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-shadow: initial;
}
</style>
