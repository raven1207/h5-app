<template>

<div class="account withdraw-bank-list modify-bank-card">

	<div class="header">
		<div class="header-left">
	    	<a href="#"><img class="head-icon" src="../assets/svg/arrow-left.svg" /></a>
	    </div>
    	<h1>提款银行卡</h1>
        <div class="header-right">
            <a href="#"><img class="head-icon" src="../assets/svg/addbank-icon1.svg" /></a>
        </div>
    </div>

    <div class="account-container withdraw-bank-list-container modify-bank-card-container">
        <ul>
            <li>
                <div class="bank-type card-type-2"> 
                    <div class="bank-type-left">
                        <img src="../assets/svg/bank-type1.svg" />
                    </div>
                    <div class="bank-type-right">
                        <span>中国银行</span>
                        <span>6008 **** **** 9003</span>
                        <div class="bank-type-right-bottom">
                        <a class="bank-type-right-bottom-left" href="#">默认卡片</a><a class="bank-type-right-bottom-right" href="#">删除卡片</a>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="bank-type card-type-1"> 
                    <div class="bank-type-left">
                        <img src="../assets/svg/bank-type1.svg" />
                    </div>
                    <div class="bank-type-right">
                        <span>交通银行</span>
                        <span>1109 **** **** 4423</span>
                        <div class="bank-type-right-bottom">
                            <a class="bank-type-right-bottom-left" href="#">默认卡片</a><a class="bank-type-right-bottom-right" href="#">删除卡片</a>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="bank-type card-type-1"> 
                    <div class="bank-type-left">
                        <img src="../assets/svg/bank-type1.svg" />
                    </div>
                    <div class="bank-type-right">
                        <span>民生银行</span>
                        <span>2014 **** **** 0817</span>
                        <div class="bank-type-right-bottom">
                            <a class="bank-type-right-bottom-left" href="#">默认卡片</a><a class="bank-type-right-bottom-right" href="#">删除卡片</a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>

    <div class="withdraw-bank-list-footer-botton">
        <a href="#" class="submit">我要提款</a>
    </div>
</div>

</template>

<!-- Loads SCSS -->
<style lang="scss" scoped>
   @import "../assets/css/main.scss"
</style>
