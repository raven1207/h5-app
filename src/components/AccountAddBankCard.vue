<template>

<div class="account add-bank-card">

	<div class="header">
		<div class="header-left">
	    	<img class="head-icon" src="../assets/svg/arrow-left.svg" />
	    </div>
    	<h1>登录密码</h1>
    </div>

    <div class="account-container add-bank-card-container">
    <span class="reminder">为确保资金安全，只能添加“*苗霞”的银行卡!</span>
    <form>

    <ul class="add-bank-card-item1">
        <li>
            <label>开户名</label>
            <input type="text" name="Account Name" placeholder="*苗霞">
        </li>
        <li>
            <label>开户银行</label>
            <input type="text" name="Bank" placeholder="请选择银行" class="arrow-right">
        </li>
        <li>
            <label>开户所在省</label>
            <input type="text" name="Account Province" placeholder="请选择省" class="arrow-right">
        </li>
        <li>
            <label>开户所在市</label>
            <input type="text" name="Account City" placeholder="请选择市" class="arrow-right">
        </li>
        <li>
            <label>开户支行</label>
            <input type="text" name="Account Branch">
        </li>
    </ul>
    <ul class="add-bank-card-item2">
        <li>
            <label>银行卡号</label>
            <input type="text" name="Card Number" placeholder="*请输入银行卡号">
        </li>
        <li>
            <label>确认卡号</label>
            <input type="text" name="Confirm Card Number" placeholder="请再次确认银行卡号">
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
