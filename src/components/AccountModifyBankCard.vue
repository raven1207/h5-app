<template>

<div class="account modify-bank-card">

	<div class="header">
		<div class="header-left">
	    	<img class="head-icon" src="../assets/svg/arrow-left.svg" />
	    </div>
    	<h1>修改银行卡</h1>
    </div>

    <div class="account-container modify-bank-card-container">
    <div class="bank-type card-type-2">
    <div class="bank-type-left">
    <img src="../assets/svg/bank-type1.svg" />
    </div>
    <div class="bank-type-right">
    <span>民生银行</span>
    <span>2014 **** **** 0817</span>
    </div>

    </div>
    <form>

    <ul class="add-bank-card-item1">
        <li>
            <label>开户名</label>
            <input type="text" name="Account Name" placeholder="*苗霞">
        </li>
        <li>
            <label>开户所在省</label>
            <input type="text" name="Bank" placeholder="甘肃" class="arrow-right">
        </li>
        <li>
            <label>开户所在市</label>
            <input type="text" name="Account Province" placeholder="武威" class="arrow-right">
        </li>
        <li>
            <label>开户支行</label>
            <input type="text" name="Account City">
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
