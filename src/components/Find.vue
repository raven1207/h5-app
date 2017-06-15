<template>
  <div class="find">
    <!-- START HEADER -->
    <div class="header">
        <h1>发现</h1>
    </div>
    <!-- END HEADER -->
    <!-- START SIMULATION -->
    <div class="simulation simulation-find">
        <div class="simulation-left simulation-find-left">

            <div class="inner-left">
              <h2>活动专区</h2>
            </div>
            <div class="inner-right">
              
            </div>

        </div>

        <div class="simulation-right simulation-find-right">
            <div class="inner-left">
              <h2>盈利榜</h2>
            </div>
            <div class="inner-right">
            </div>
        </div>

    </div>
    <!-- END SIMULATION -->

    <!-- FIND LIST -->
    <div class="simulation-find-list">
      <div class="international-list-top">
        <span>公告</span>
      </div>
      <ul>
      <li>
      <accordion-item variant="Accordion__item--small">
          <div slot="title">美原油合约更换提醒</div>
          <div slot="content">
            <p>尊敬的用户：<br>根据纽约商业交易所（NYMES）的合约交易规则，美原油合约已更换为CL1707，原CL1706合约即将到期不再交易，请注意合约价格差异。</p>
            <span class="date-time">2017-05-05  16:53:31</span><!-- <span class="close">收起</span> -->
          </div>
      </accordion-item>
      </li>
      <li>
      <accordion-item variant="Accordion__item--small">
          <div slot="title">EIA预警提醒</div>
          <div slot="content">
            <p>尊敬的用户：<br>根据纽约商业交易所（NYMES）的合约交易规则，美原油合约已更换为CL1707，原CL1706合约即将到期不再交易，请注意合约价格差异。</p>
            <span class="date-time">2017-05-05  16:53:31</span><!-- <span class="close">收起</span> -->
          </div>
      </accordion-item>
      </li>
      <li>
      <accordion-item variant="Accordion__item--small">
          <div slot="title">EIA预警提醒</div>
          <div slot="content">
            <p>尊敬的用户：根据纽约商业交易所（NYMES）的合约交易规则，美原油合约已更换为CL1707，原CL1706合约即将到期不再交易，请注意合约价格差异。</p>
            <span class="date-time">2017-05-05  16:53:31</span><!-- <span class="close">收起</span> -->
          </div>
      </accordion-item>
      </li>
      <li>
      <accordion-item variant="Accordion__item--small">
          <div slot="title">重要通知</div>
          <div slot="content">
            <p>尊敬的用户：根据纽约商业交易所（NYMES）的合约交易规则，美原油合约已更换为CL1707，原CL1706合约即将到期不再交易，请注意合约价格差异。</p>
            <span class="date-time">2017-05-05  16:53:31</span><!-- <span class="close">收起</span> -->
          </div>
      </accordion-item>
      </li>
      </ul>
    </div>
    <!-- END FIND LIST --> 

    <!-- START NAVIGATION -->
    <div class="nav-footer">
      <ul class="nav-items">
        <li class="nav-home "><a href="/#">首页</a></li>
        <li class="nav-news "><a href="#/news">资讯</a></li>
        <li class="nav-trading "><a href="#/trade">交易</a></li>
        <li class="nav-found active"><a href="#/find">发现</a></li>
        <li class="nav-mine "><a href="#/mine">我的</a></li>
      </ul>
    </div>
    <!-- END NAVIGATION -->

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
<style lang="scss" scoped>
   @import "../assets/css/main.scss"
</style>

<style>
.Accordion__heading {
    display: block!important;
    padding: 1.5em;
    border-bottom: 1px solid #dddddd;
    position: relative;
    text-align: left;
}
.Accordion__icon:after{
    content: url('../assets/svg/arrow-down.svg');
    position: absolute;
    top: 21px;
    right: 24px;
}
.Accordion__icon.is-open:after{
    content: url('../assets/svg/arrow-up.svg');
    position: absolute;
    top: 21px;
    right: 24px;
}
.Accordion__content {
    max-height: 500px;
    opacity: 0;
    text-align: left;
    padding: 1.5em;
    border-bottom: 1px solid #dddddd;
}
.Accordion__content .date-time{
    float: left;
    color: #6e6e6f;
    font-size: .8em;
}

.Accordion__content .close{
    float: right;
    color: #cfac67;
    font-size: .8em;
}

.Accordion__content p{
  line-height: 2em;
}

.Accordion__content.is-open {
    visibility: visible;
    opacity: 1;
    animation: fade 1s;
    min-height: 155px;
}
.simulation-find-list ul li:first-child > .Accordion__item .Accordion__heading .Accordion__title div {
  position: relative;
}
.simulation-find-list ul li:first-child > .Accordion__item .Accordion__heading .Accordion__title div:after{
  content: 'NEW';
  background-color: #e6484f;
  border-radius: 4px;
  color: #ffffff;
  font-size: .6em;
  padding: 2px 4px;
  margin-left: 5px;
  position: absolute;
  top: 3px;
}
@keyframes fade {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>
