<template>

<div class="account account-id-verification">

	<div class="header">
		<div class="header-left">
	    	<img class="head-icon" src="../assets/svg/arrow-left.svg" />
	    </div>
    	<h1>实名认证</h1>
    </div>

    <div class="account-container">

        <form>
        <ul>
            <li>
                <label>真实姓名</label>
                <input type="text" name="Old Password" placeholder="*苗霞">
            </li>
            <li>
                <label>身份证号</label>
                <input type="text" name="New Password" placeholder="4101251966***6069">
            </li>
        </ul>
            <input class="submit disable" type="submit" name="submit" value="您已认证">
        </form>
        <p style="color: #9c9b9b;">如遇问题，请<a href="#" style="color: #caa45a; text-decoration: none;">联系客服</a></p>

    </div>
</div>

</template>

<!-- Loads SCSS -->
<style lang="scss" scoped>
   @import "../assets/css/main.scss";
</style>
