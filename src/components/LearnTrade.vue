<template>

	<div class="beginners-guide learn-trade">
		<!-- START HEADER -->
        <div class="header">
            <div class="header-left">
                <a href="#/account-recharge-methods"><img class="head-icon" src="../assets/svg/arrow-left.svg" /></a>
            </div>
            <h1>新手引导</h1>
        </div>
        <!-- END HEADER -->

        <div class="list-category-tab">
            <ul>
                <li class=""><a href="#">1分钟了解操盘英雄</a></li>
                <li class="active"><a href="#/">1分钟学会操盘</a> </li>
            </ul>
        </div>

        <div class="learn-trade-banner">
			<img src="../assets/images/learn-trade-banner.png">
	    </div>

	    <div class="learn-trade-steps">
	    <img src="../assets/svg/learn-trade.svg">
	    </div>

       <div class="learn-trade-list simulation-find-list">
              <ul>
              <li>
              <accordion-item variant="Accordion__item--small">
                  <div slot="title">什么是操盘手</div>
                  <div slot="content">
                    <p>作为投资人的交易合作方，负责向投资人提供交易买卖指令的自然人。</p>
                  </div>
              </accordion-item>
              </li>
              <li>
              <accordion-item variant="Accordion__item--small">
                  <div slot="title">操盘手有什么好处？</div>
                  <div slot="content">
                    <p>作为投资人的交易合作方，负责向投资人提供交易买卖指令的自然人。</p>
                  </div>
              </accordion-item>
              </li>
              <li>
              <accordion-item variant="Accordion__item--small">
                  <div slot="title">什么是投资人？</div>
                  <div slot="content">
                    <p>作为投资人的交易合作方，负责向投资人提供交易买卖指令的自然人。</p>
                  </div>
              </accordion-item>
              </li>
              <li>
              <accordion-item variant="Accordion__item--small">
                  <div slot="title">合作交易流程</div>
                  <div slot="content">
                    <p>作为投资人的交易合作方，负责向投资人提供交易买卖指令的自然人。</p>
                  </div>
              </accordion-item>
              </li>
              </ul>
        </div>

        <div class="learn-trade-links">
            <a class="left" href="#">我要操盘</a>
            <a class="right" href="#">申请投资人</a>
        </div>
	</div>

</template>

<script>
import AccordionItem from '@nextindex/vue-simple-accordion'

export default {
  components: {
    AccordionItem
  }
}
</script>

<!-- Loads SCSS -->
<style lang="scss" scoped>
   @import "../assets/css/main.scss"
</style>

<style>
.learn-trade .simulation-find-list ul li:first-child > .Accordion__item .Accordion__heading .Accordion__title div:after{
    display: none;
}
.learn-trade .learn-trade-list .Accordion__content{
    padding: 1em;
    min-height: 130px;
}
.learn-trade .learn-trade-list .Accordion__content span{
    display: block;
    color: #cfac67;
    text-align: justify;
    text-indent: 2em;
    line-height: 1.7em;
    font-size: initial;
}
</style>
