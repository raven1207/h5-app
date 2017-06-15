<template>

<div class="account recharge-balance-alipay">

	<div class="header">
		<div class="header-left">
	    	<a href="#/account-recharge-methods"><img class="head-icon" src="../assets/svg/arrow-left.svg" /></a>
	    </div>
    	<h1>支付宝转账</h1>
        <div class="header-right">
            <a class="link-withdraw-list" href="#">完成</a>
        </div>
    </div>

    <div class="recharge-balance-alipay-info-content">
        <div class="recharge-balance-alipay-info-content-step1">
            <span class="title">第一步：手机打开支付宝APP</span>
            <div class="recharge-balance-alipay-info-content-step1-inner">
                <img src="../assets/images/step1.png" >
            </div>
        </div>
        <div class="recharge-balance-alipay-info-content-step2">
            <span class="title">第二步：输入支付宝账户，完成<span class="red">20.00</span>元转账</span>

            <div class="recharge-balance-alipay-info-content-step2-inner">
                <div class="icon-left"><img src="../assets/svg/logo.svg"></div>
                <div class="content-right">
                    <span class="line1">支付宝账号：cpyx911@163.com  <span class="yellow">复制</span></span>
                    <span class="line2">成都恒折态建筑设计有限公司</span>
                </div>
            </div>
        </div>
    </div>

    <div class="account-container recharge-balance-alipay-info-container">
    <form>
    <input class="submit" type="submit" name="submit" value="下一步">
    </form>
    <span>如不能正常打开，请按上面步骤手动转账<br>完成后，请返回操盘英雄</span>
    <p><span class="red">0手续费</span>, 到账时间<br/>08:30-次日01:00　(30分钟内到账)<br/>次日01:00以后 (次日09:00前到账)<br/>如需帮助，请<span class="yellow">联系客服</span></p>
    </div>

</div>

</template>

<!-- Loads SCSS -->
<style lang="scss" scoped>
   @import "../assets/css/main.scss"
</style>
