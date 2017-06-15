
<template>
<div class="trade">
    <!-- START HEADER -->
    <div class="header">
      <div class="header-left">
       <a href="#/"><img class="head-icon" src="../assets/svg/arrow-left.svg" /></a>
      </div>
        <a class="header-button-left active" href="#/trade">实盘下单</a><a class="header-button-right" href="#/simulate-positions">实盘持仓</a>
      <div class="header-right">
        规则
      </div>
    </div>
    <!-- END HEADER -->

    <!-- START NAV GRAPH -->

    <div class="nav-graph">
    	<div class="nav-graph-left">
            <button id="show-modal-trade" @click="showModal = true">美原油 CL1706</button>
    <!-- use the modal component, pass in the prop -->
    <modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->

    <h3 slot="header"></h3>
    <div slot="body">
    <ul class="nav-graph-list">
    <li data-value="CL1707" data-code="CL">美原油</li>
    <li data-value="GC1706" data-code="GC">美黄金</li>
    <li data-value="SI1707" data-code="SI">美白银</li>
    <li data-value="HSI1705" data-code="HSI">恒指</li>
    <li data-value="MHI1705" data-code="MHI">小恒指</li>
    <li data-value="CN1705" data-code="CN">富时A50</li>
    <li data-value="DAX1706" data-code="DAX">德指</li>
    </ul>
    </div>

  </modal>
    	</div>

    	<div class="nav-graph-content-right">
    	<a href="#">47.73 -0.09 -0.19%</a>
    	</div>

    </div>

    <!-- END NAV GRAPH -->

    <!-- START TRADE GRAPH -->


    <!-- END TRADE GRAPH -->

    <!-- START FOOTER -->
    <div class="trade-footer">
    	    <!-- TRADE POSITION STATUS -->
    <div class="position-status">
    	<a class="button-status button-register">注册</a>
    	<a class="button-status button-login">登录</a>
    </div>
    <div class="position-status2">
    	<span class="status-red">30/47.73</span>
    	<span class="status-middle">买卖量</span>
    	<span class="status-green">47.74/28</span>
    </div>
    <!-- END TRADE POSITION STATUS -->
    <div class="bottom-buttom">
	    <div class="button-left">
	    	<a class="footer-button button-red" href="#">47.730   买  涨</a>
	    </div>
	    <div class="button-right">
	    	<a class="footer-button button-green" href="#">47.740   买  跌</a>
	    </div>
    </div>
    </div>
    <!-- END FOOTER -->
</div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      showModal: false
    }
  }
}

</script>

<!-- Loads SCSS -->
<style lang="scss" scoped>
   @import "../assets/css/main.scss";
</style>
