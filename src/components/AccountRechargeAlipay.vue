<template>

<div class="account recharge-balance-alipay">

	<div class="header">
		<div class="header-left">
	    	<a href="#/account-recharge-methods"><img class="head-icon" src="../assets/svg/arrow-left.svg" /></a>
	    </div>
    	<h1>支付宝转账</h1>
    </div>
    <div class="recharge-balance-alipay-info-heading">
    账户余额  
    <h2>60.00</h2>
    </div>
    <br>
    <div class="account-container recharge-balance-alipay-info-container">
    <form>
    <ul class=" recharge-balance-alipay">
        <li>
            <label>充值金额</label>
            <input type="text" name="Amount" placeholder="请输入金额">
        </li>
    </ul>
    <input class="submit" type="submit" name="submit" value="下一步">
    </form>
    <p><span class="red">0手续费</span>, 到账时间<br/>如需帮助，请<span class="yellow">联系客服</span></p>
    </div>
</div>

</template>

<!-- Loads SCSS -->
<style lang="scss" scoped>
   @import "../assets/css/main.scss"
</style>
