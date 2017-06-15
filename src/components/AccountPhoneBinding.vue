<template>

	<div class="phone-binding">

		<div class="header">
		<div class="header-left">
	    	<img class="head-icon" src="../assets/svg/arrow-left.svg" />
	    </div>
    	<h1>手机绑定</h1>
    	</div>

    	<div class="phone-binding-container" >
    		<form>
    			<ul>
    				<li>
	    				<label>手机号</label>
	    				<input type="text" name="Phone Numbers" placeholder="132****2009">
    				</li>

	    			<li>
	    				<label>短信验证码</label>
	    				<input type="text" name="Phone Numbers" placeholder="请输入验证码">
	    				<button>获取验证码</button>
	    			</li>
    			</ul>
    			<input class="submit disable" type="submit" name="submit" value="下一步">
    		</form>
    		<p style="color: #9c9b9b;">如遇问题，请<a href="#" style="color: #caa45a; text-decoration: none;">联系客服</a></p>
    	</div>
	</div>

</template>

<!-- Loads SCSS -->
<style lang="scss" scoped>
   @import "../assets/css/main.scss";
</style>
