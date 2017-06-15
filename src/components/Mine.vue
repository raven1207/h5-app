<template>
	<div class="mine">

	<!-- START MINE BANNER -->
	<div class="mine-page-banner">

		<div class="mine-page-banner-nav">

			<div class="mine-page-banner-nav-left">
			<a href="#">晚上好，我是英雄!</a>
			</div>

			<div class="mine-page-banner-nav-right">
				<a href="#">&nbsp;</a>
			</div>
		</div>
		<h1>60.00</h1>
		<span class="banner-text">账户余额(元)</span>

		<div class="mine-page-banner-bottom">
			<div class="mine-page-banner-bottom-contain">
				<div class="mine-page-banner-bottom-contain-left">
					<span class="item-1">10060.00</span>
					<span class="item-2">今日返利(元)</span>
				</div>

				<div class="mine-page-banner-bottom-contain-right">
					<span class="item-1">1.24</span>
					<span class="item-2">今日胜率（%）</span>
				</div>
			</div>
		</div>

	</div>
	<!-- END MINE BANNER -->

	<!-- START MINE MIDDLE BUTTON -->
	<div class="mine-page-middle-button">

		<div class="mine-page-middle-button-left">
			<a href="">充值</a>
		</div>

		<div class="mine-page-middle-button-right">
			<a href="">提现</a>
		</div>

	</div>
	<!-- END MINE MIDDLE BUTTON -->

	<!-- START MINE MANE NAV -->
	<div class="mine-page-main-nav">

	<ul class="mine-page-main-nav-row1">
		<li class="mine-nav-icon1">
			<a href="#">账户设置</a>
		</li>
		<li class="mine-nav-icon2">
			<a href="#">我的交易</a>
		</li>
		<li class="mine-nav-icon3">
			<a href="#">资金明细</a>
		</li>
	</ul>

	<ul class="mine-page-main-nav-row2">
		<li class="mine-nav-icon4">
			<a href="#">推荐好友</a>
		</li>
		<li class="mine-nav-icon5">
			<a href="#">申请经纪人</a>
		</li>
		<li class="mine-nav-icon3">
			<a href="#">申请投资人</a>
		</li>
	</ul>

	</div>
	<!-- END MINE MINE MANE NAV-->

	<!-- START NAVIGATION -->
    <div class="nav-footer">
      <ul class="nav-items">
        <li class="nav-home"><a href="#/">首页</a></li>
        <li class="nav-news"><a href="#/news">资讯</a></li>
        <li class="nav-trading"><a href="#/trade">交易</a></li>
        <li class="nav-found"><a href="#/find">发现</a></li>
        <li class="nav-mine active"><a href="#/mine">我的</a></li>
      </ul>
    </div>
    <!-- END NAVIGATION -->

	</div>
</template>
<script>
import {mapGetters, mapActions, mapMutations, mapState} from 'vuex'

export default{
	mounted(){
      this.fetchUserData();
	},
	methods:{...mapActions(['fetchUserData'])
	}
}
</script>
<style lang="scss" scoped>
   @import "../assets/css/main.scss"
</style>
