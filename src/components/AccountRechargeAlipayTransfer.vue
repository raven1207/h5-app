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
    <div class="recharge-balance-alipay-info-content">
        <span class="info-1"><span class="info-name">收款账号变更为 : </span><span class="info-name2">cpyx911@163.com</span></span>
        <span class="info-1"><span class="info-name">转账时若需补全企业名称 : </span><span class="info-name2">成都恒折态建筑设计有限公司</span></span>
    </div>
    <div class="account-container recharge-balance-alipay-info-container">
    <form>
    <ul class=" recharge-balance-alipay">
        <li>
            <label>支付宝实名</label>
            <input type="text" name="Alipay Name" placeholder="*苗霞" >
        </li>
        <li>
            <label>支付宝账号</label>
            <input type="text" name="Alipay Account Number" placeholder="18987865476" >
        </li>
        <li>
            <label>充值金额</label>
            <input type="text" name="Account Province" placeholder="请输入(您今天还可充值50,000元)">
        </li>
    </ul>
    <input class="submit" type="submit" name="submit" value="下一步">
    </form>
    <p><span class="red">0手续费</span>, 到账时间<br/>08:30-次日01:00　(30分钟内到账)<br/>次日01:00以后 (次日09:00前到账)<br/>如需帮助，请<span class="yellow">联系客服</span></p>
    </div>
</div>

</template>

<!-- Loads SCSS -->
<style lang="scss" scoped>
   @import "../assets/css/main.scss"
</style>
