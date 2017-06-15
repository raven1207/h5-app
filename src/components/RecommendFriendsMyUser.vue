<template>
    <div class="recommend-friends-my-user">
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
                <li class=""><a href="#">推广详情</a></li>
                <li class="active"><a href="#/">我的用户</a> </li>
            </ul>
        </div>

        <div class="recommend-friends-my-user-content">
            <div class="recommend-friends-my-user-content-header">
                <ul>
                    <li>用户</li>
                    <li>交易手数</li>
                    <li>交易金额</li>
                    <li>产生佣金</li>
                    <li>注册时间</li>
                </ul>
            </div>
            <div class="recommend-friends-my-user-content-listing">
                <ul>
                    <li class="light-blue">
                        <ul>
                            <li>我是英雄</li>
                            <li class="number">0</li>
                            <li class="number">0</li>
                            <li class="number">0</li>
                            <li>2017-03-03</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>张三123</li>
                            <li class="number">0</li>
                            <li class="number">0</li>
                            <li class="number">0</li>
                            <li>2017-03-03</li>
                        </ul>
                    </li>
                    <li class="light-blue">
                        <ul>
                            <li>赵倩qoe</li>
                            <li class="number">0</li>
                            <li class="number">0</li>
                            <li class="number">0</li>
                            <li>2017-03-03</li>
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
