<template>

<div class="account change-withdraw-passowrd">

	<div class="header">
		<div class="header-left">
	    	<img class="head-icon" src="../assets/svg/arrow-left.svg" />
	    </div>
    	<h1>登录密码</h1>
    </div>

    <div class="account-container">

    <form>

    <ul>
    <li>
    <label>旧密码</label>
    <input type="text" name="Old Password" placeholder="请输入旧密码">
    </li>
    <li>
    <label>新密码</label>
    <input type="text" name="New Password" placeholder="请输入新密码">
    </li>
    <li>
    <label>旧密码</label>
    <input type="text" name="Confirm New Password" placeholder="请再次确认新密码">
    </li>
    </ul>
    <input class="submit" type="submit" name="submit" value="确  定">
    </form>

    </div>
</div>

</template>

<!-- Loads SCSS -->
<style lang="scss" scoped>
   @import "../assets/css/main.scss";
</style>
