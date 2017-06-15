<template>
	<div class="simulate-positions-settlement">
    <!-- START HEADER -->
	    <div class="header">
	      <div class="header-left">
	       <a href="#/"><img class="head-icon" src="../assets/svg/arrow-left.svg" /></a>
	      </div>
	        <a class="header-button-left" href="#/trade">实盘下单</a><a class="header-button-right active" href="#/simulate-positions">实盘持仓</a>
	      <div class="header-right">
	        规则
	      </div>
	    </div>
    <!-- END HEADER -->

    <!-- NEWS CAT TABS -->
    	<div class="list-category-tab">
    	<ul>
    		<li class=""><a href="#/simulate-positions">持仓<span class="item-count">2</span></a></li>
    		<li class="active"><a href="#/simulate-positions-settlement">结算</a> </li>
    		<li class=""><a href="#">流单</a></li>
    	</ul>
    	</div>
 	<!-- END NEWS CAT TABS -->

 	<!-- LIST POSISTIONS AVAILABLE -->
 	    <div class="list-available-position-settlement">
    	<ul>
    		<li class="list-available-position-settlement-item list-available-position-item-1">
    		
    		<div class="list-available-position-settlement-item-head">
    		<span class="list-available-position-settlement-item-head-left">恒指(HSI1705) <span class="item-id">ID5473051</span></span>

    		<span class="list-available-position-settlement-item-head-right">04-28 23:40:04</span>
    		</div>
    		
    		<div class="list-available-position-settlement-item-middle">
    			
    			<div class="list-available-position-settlement-item-middle-left">
    			<ul>
				<li><span class="item-left red">买涨5手</span><span class="item-right"><span class="green">-720</span> (HK$-650)</span></li>
				<li><span class="item-left">止盈17600</span><span class="item-right">买入24559</span></li>
				<li><span class="item-left">止损-3520</span><span class="item-right">卖出24546</span></li>
    			</ul>
    			</div>
    			
    			<div class="list-available-position-settlement-item-middle-right">
    			<a href="#">结算成功</a>
    			</div>

    		</div>
            <div class="list-available-position-settlement-item-bottom">
                <span>触发平仓时间</span>
            </div>
			</li>
            <li class="list-available-position-settlement-item list-available-position-item-1">
            
            <div class="list-available-position-settlement-item-head">
            <span class="list-available-position-settlement-item-head-left">恒指(HSI1705) <span class="item-id">ID5473051</span></span>

            <span class="list-available-position-settlement-item-head-right">04-28 23:40:04</span>
            </div>
            
            <div class="list-available-position-settlement-item-middle">
                
                <div class="list-available-position-settlement-item-middle-left">
                <ul>
                <li><span class="item-left red">买涨5手</span><span class="item-right"><span class="green">-720</span> (HK$-650)</span></li>
                <li><span class="item-left">止盈17600</span><span class="item-right">买入24559</span></li>
                <li><span class="item-left">止损-3520</span><span class="item-right">卖出24546</span></li>
                </ul>
                </div>
                
                <div class="list-available-position-settlement-item-middle-right">
                <a href="#">结算成功</a>
                </div>

            </div>
            </li>
            <li class="list-available-position-settlement-item list-available-position-item-1">
            
            <div class="list-available-position-settlement-item-head">
            <span class="list-available-position-settlement-item-head-left">恒指(HSI1705) <span class="item-id">ID5473051</span></span>

            <span class="list-available-position-settlement-item-head-right">04-28 23:40:04</span>
            </div>
            
            <div class="list-available-position-settlement-item-middle">
                
                <div class="list-available-position-settlement-item-middle-left">
                <ul>
                <li><span class="item-left red">买涨5手</span><span class="item-right"><span class="green">-720</span> (HK$-650)</span></li>
                <li><span class="item-left">止盈17600</span><span class="item-right">买入24559</span></li>
                <li><span class="item-left">止损-3520</span><span class="item-right">卖出24546</span></li>
                </ul>
                </div>
                
                <div class="list-available-position-settlement-item-middle-right">
                <a href="#">结算成功</a>
                </div>

            </div>

            </li>
    	</ul>
    	</div>
 	<!-- END LIST POSISTIONS AVAILABLE -->
    </div>
</template>

<!-- Loads SCSS -->
<style lang="scss" scoped>
   @import "../assets/css/main.scss"
</style>
