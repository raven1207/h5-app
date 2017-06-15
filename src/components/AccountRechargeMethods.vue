/<template>

<div class="account recharge-methods">

    <div class="header">
        <div class="header-left">
            <img class="head-icon" src="../assets/svg/arrow-left.svg" />
        </div>
        <h1>充值</h1>
        <div class="header-right">
            <a class="link-withdraw-list" href="#">充值记录</a>
        </div>
    </div>

    <div class="account-container2 recharge-methods-list">
    <ul>
    <li>
        <a href="#/account-recharge-alipay-transfer">
        <div class="left-icon"><span class="method-icon"><img src="../assets/svg/recharge-icon1.svg"></span></div>
        <div class="right-content">
            <span class="method-name">支付宝转账</span>
            <span class="method-content">收款账号变更为cpyx911@163.com，请注意</span>
        </div>
        </a>
    </li>
    <li>
        <a href="#/account-recharge-alipay">
        <div class="left-icon"><span class="method-icon"><img src="../assets/svg/recharge-icon1.svg"></span></div>
        <div class="right-content">
            <span class="method-name">支付宝小额快捷<span class="real-time">实时</span></span>
            <span class="method-content">0手续费，单笔2-2000元实时到账</span>
        </div>
        </a>
    </li>
    <li>
        <a href="#/account-recharge-merchant-bank-fast">
        <div class="left-icon"><span class="method-icon"><img src="../assets/svg/recharge-icon2.svg"></span></div>
        <div class="right-content">
            <span class="method-name">招行快捷</span>
            <span class="method-content">仅限招行，单笔2-5000元，每日充值无上限</span>
        </div>
        </a>
    </li>
    <li>
        <a href="#/account-recharge-bank">
        <div class="left-icon"><span class="method-icon"><img src="../assets/svg/recharge-icon3.svg"></span></div>
        <div class="right-content">
            <span class="method-name">银行转账</span>
            <span class="method-content">账号定期变更，请每次充值前重新获取收款账号</span>
        </div>
        </a>
    </li>
    </ul>
    <span class="help-link">如遇问题，请<span class="gold">联系客服</span></span>
    </div>
</div>

</template>

<!-- Loads SCSS -->
<style lang="scss" scoped>
   @import "../assets/css/main.scss"
</style>
