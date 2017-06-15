<template>
    <div class="recommend-friends-promotion">
        <!-- START HEADER -->
        <div class="header">
            <div class="header-left">
                <a href="#/account-recharge-methods"><img class="head-icon" src="../assets/svg/arrow-left.svg" /></a>
            </div>
            <h1>推荐好友</h1>
        </div>
        <!-- END HEADER -->

        <div class="list-category-tab">
            <ul>
                <li class="active"><a href="#">推广详情</a></li>
                <li class=""><a href="#/">我的用户</a> </li>
            </ul>
        </div>

        <div class="recommend-friends-promotion-content">

            <div class="recommend-friends-promotion-content-top-1col">
                <span>可提佣金</span>
                <h2>1060.00</h2>
                <span class="design">提 取</span>
            </div>

            <div class="recommend-friends-promotion-content-top-2col">
                <div class="recommend-friends-promotion-content-top-2col-left">
                    <span class="commission">佣金比例</span>
                    <span class="number">5%</span>
                    <span class="gen-pro">普通推广员</span>
                </div>
                
                <div class="recommend-friends-promotion-content-top-2col-right">
                    <span>我的用户</span>
                    <span class="number">0</span>
                    <span>交易0人</span>
                </div>
            </div>

        </div>

        <div class="recommend-friends-promotion-content-middle">
            <div class="recommend-friends-promotion-content-middle-top">
                <div class="recommend-friends-promotion-content-middle-top-left">
                    <span>复制推广链接发给朋友 <span class="grey">（已访问4次）</span></span>
                    <span class="link">https://www.6006.com/801660 </span>
                </div>
                <div class="recommend-friends-promotion-content-middle-top-right">
                    <span class="design">复 制</span>
                </div>
            </div>
        </div>

        <div class="recommend-friends-promotion-content-banner">
            <span>推荐朋友扫码，成为你的用户</span>
            <div class="qr-code-container">
                <img src="../assets/images/qr-code.png" >
            </div>
            <img src="../assets/images/promotion-banner.png">                    
        </div>

        <div class="recommend-friends-promotion-content-bottom">
            <div class="international-list-top">
                <span>推广员级别</span>
            </div>
            <div class="recommend-friends-promotion-content-header">
                <ul>
                    <li>级别</li>
                    <li>下线交易<br>用户数量</li>
                    <li>交易提成<br>佣金比例</li>
                    <li>下线<br>有效期</li>
                </ul>
            </div>
            <div class="recommend-friends-promotion-content-listing">
                <ul>
                    <li class="light-blue">
                        <ul>
                            <li>普通推广员</li>
                            <li class="number"><=9人</li>
                            <li class="number">5%</li>
                            <li>半年</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>金牌推广员</li>
                            <li class="number">10-49人</li>
                            <li class="number">15%</li>
                            <li>一年</li>
                        </ul>
                    </li>
                    <li class="light-blue">
                        <ul>
                            <li>金牌推广员</li>
                            <li class="number">>=50人</li>
                            <li class="number">30%</li>
                            <li>两年</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
   @import "../assets/css/main.scss"
</style>
