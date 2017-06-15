<template>
	<div class="profit-only">
			<!-- START HEADER -->
        <div class="header">
            <div class="header-left">
                <a href="#/account-recharge-methods"><img class="head-icon" src="../assets/svg/arrow-left.svg" /></a>
            </div>
            <h1>止盈止损</h1>
        </div>
        <!-- END HEADER -->

        <div class="profit-only-container">
        	<div class="profit-only-container-top">
	        	<div class="left">
	        		<span>美原油 (最新价50.34)</span>
	        	</div>
	        	 <div class="middle">
	        		<span>买涨3手</span>
	        	</div>
	        	<div class="right">
	        		<span>+648</span>
	        	</div>
        	</div>
        	<div class="profit-only-container-bottom">
	        	<ul class="list">
	        		<li>
	        			<div class="list-item">
		        			<ul>
		        				<li>
		        					盈利金额
		        				</li>
		        				<li>
		        					<input type="text" class="input-number">
		        				</li>
		        				<li>
		        					元时，触发卖出
		        				</li>
		        			</ul>
	        			</div>
	        		</li>
	        		<li>
	        			<div class="list-item">
	        				<ul>
		        				<li>
		        					亏损金额
		        				</li>
		        				<li>
		        					<input type="text" class="input-number">
		        				</li>
		        				<li>
		        					元时，触发卖出
		        				</li>
		        			</ul>
	        			</div>
	        		</li>
	        	</ul>
        	</div>
        </div>

	</div>
</template>

<!-- Loads SCSS -->
<style lang="scss" scoped>
   @import "../assets/css/main.scss"
</style>

<style>
