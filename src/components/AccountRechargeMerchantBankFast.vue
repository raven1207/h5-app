<template>

<div class="account recharge-balance-bank">

	<div class="header">
		<div class="header-left">
	    	<a href="#/account-recharge-methods"><img class="head-icon" src="../assets/svg/arrow-left.svg" /></a>
	    </div>
    	<h1>招行快捷</h1>
    </div>
    <div class="recharge-balance-bank-info-heading">
    账户余额
    <h2>60.00</h2>
    </div>
    <div class="recharge-balance-bank-info-content">
        <span class="info-1"><span class="info-name2">充值金额和银行转账金额必须一致，否则充值无法到账</span></span>
    </div>
    <div class="account-container recharge-balance-bank-info-container">
    <form>
    <ul class=" recharge-balance-bank">
        <li>
            <label>充值银行</label>
            <input type="text" name="Choose Bank" placeholder="请选择您的充值银行" class="arrow-right">
        </li>
        <li>
            <label>充值金额</label>
            <input type="text" name="Recharge Amount" placeholder="请输入金额">
        </li>
    </ul>
    <input class="submit" type="submit" name="submit" value="下一步">
    </form>
    <p>温馨提示：<br>* 点击下一步后，将跳转到第三方支付界面<br>* <span class="red">0手续费</span>，付款成功后预计5分钟到账<br>* 如需帮助，请 <span class="yellow">联系客服</span></p>
    </div>
</div>

</template>

<!-- Loads SCSS -->
<style lang="scss" scoped>
   @import "../assets/css/main.scss"
</style>
