<template>

<div class="account withdraw-balance">

	<div class="header">
		<div class="header-left">
	    	<img class="head-icon" src="../assets/svg/arrow-left.svg" />
	    </div>
    	<h1>提款</h1>
        <div class="header-right">
            <a class="link-withdraw-list" href="#">提款记录</a>
        </div>
    </div>

    <div class="account-container withdraw-balance-container">
    <form>
    <ul class="withdraw-balance-form">
        <li>
            <label>提款银行卡</label>
            <input type="text" name="Account Name" placeholder="农业银行34567890123***8901" class="arrow-right">
        </li>
        <li>
            <label>提款金额</label>
            <input type="text" name="Bank" placeholder="请输入金额" >
        </li>
        <li>
            <label>账户余额</label>
            <input type="text" name="Account Province" placeholder="¥ 60.00" disabled>
        </li>
    </ul>
    <input class="submit" type="submit" name="submit" value="确  定">
    </form>
    <p>每日提现次数上限2次<br/>提现处理时间为 9:00-20:00<br/>到账时间以银行为准，节假日延后处理</p>
    </div>
</div>

</template>

<!-- Loads SCSS -->
<style lang="scss" scoped>
   @import "../assets/css/main.scss";
</style>
