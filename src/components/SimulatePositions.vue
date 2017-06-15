<template>
	<div class="simulate-positions">
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
    		<li class="active"><a href="#">持仓<span class="item-count">2</span></a></li>
    		<li class=""><a href="#/simulate-positions-settlement">结算</a> </li>
    		<li class=""><a href="#">流单</a></li>
    	</ul>
    	</div>
 	<!-- END NEWS CAT TABS -->

 	<!-- LIST POSISTIONS AVAILABLE -->
 	    <div class="list-available-position">
    	<ul>
    		<li class="list-available-position-item list-available-position-item-1">
    		
    		<div class="list-available-position-item-head">
    		<span class="list-available-position-item-head-left">美原油(CL1706) <span class="item-id">ID5504888</span></span>

    		<span class="list-available-position-item-head-right"><a href="#">设置止盈止损</a></span>
    		</div>
    		
    		<div class="list-available-position-item-bottom">
    			
    			<div class="list-available-position-item-bottom-left">
    			<ul>
				<li><span class="item-left red">买涨5手</span><span class="item-right"><span class="green">-720</span> ($-100)</span></li>
				<li><span class="item-left">止盈576000</span><span class="item-right">买入46.16</span></li>
				<li><span class="item-left">止损-115200</span><span class="item-right">当前46.14</span></li>
    			</ul>
    			</div>
    			
    			<div class="list-available-position-item-bottom-right">
    			<a href="#">卖 出</a>
    			</div>

    		</div>
			</li>
			<li class="list-available-position-item list-available-position-item-1">
    		
    		<div class="list-available-position-item-head">
    		<span class="list-available-position-item-head-left">美原油(CL1706) <span class="item-id">ID5504888</span></span>

    		<span class="list-available-position-item-head-right"><a href="#">设置止盈止损</a></span>
    		</div>
    		
    		<div class="list-available-position-item-bottom">
    			
    			<div class="list-available-position-item-bottom-left">
    			<ul>
				<li><span class="item-left green">买涨5手</span><span class="item-right"><span class="red">-720</span> ($-100)</span></li>
				<li><span class="item-left">止盈576000</span><span class="item-right">买入46.16</span></li>
				<li><span class="item-left">止损-115200</span><span class="item-right">当前46.14</span></li>
    			</ul>
    			</div>
    			
    			<div class="list-available-position-item-bottom-right">
    			<a href="#">卖 出</a>
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
