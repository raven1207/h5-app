<template>
  <div class="index">
    <!-- START HEADER -->
    <div class="header">
      <div class="header-left">
        <img class="head-icon" src="../assets/svg/head.svg"/>
      </div>
      <h1>操盘英雄</h1>
      <a href="#/beginners-guide-learn-trade" class="header-right">
        <img class="head-icon" src="../assets/svg/question.svg"/>
      </a>
    </div>
    <!-- END HEADER -->

    <!-- START BANNER -->
    <div class="banner">
      <h1>无需开户 注册送现金</h1>
    </div>
    <!-- END BANNER -->

    <!-- START ANNOUNCEMENT -->
    <div class="announcement">
      <div class="announcement-left">
        <span class="title">公告</span>
      </div>
      <div class="announcement-right">
        <span class="content">专业理财师倾情为您理财方案量身定制理财身定制</span>
      </div>
    </div>
    <!-- END ANNOUNCEMENT -->


    <!-- START SIMULATION -->
    <div class="simulation">
      <a href="#/trade" class="simulation-left">

        <div class="inner-left">
          <h2>模拟练习</h2>
          <p>交易1次送10元</p>
        </div>
        <div class="inner-right">

        </div>

      </a>

      <a href="#/popular-activities" class="simulation-right">
        <div class="inner-left">
          <h2>领红包</h2>
          <p>惊！现金折扣卡</p>
        </div>
        <div class="inner-right">
        </div>
      </a>

    </div>
    <!-- END SIMULATION -->

    <!-- START International LIST -->
    <div class="international-list">
      <div class="international-list-top">
        <span>国际期货</span>
      </div>
      <div class="international-list-item">
        <ul>
          <li v-for="item in foreignCommds">
            <a href="#/trade">
              <ul v-bind:class="iconmap[item.name]" class="icon-list">
                <li class="list-main">
                  <span class="main-title">{{item.name}}</span>
                  <span class="main-content">{{item.description}}</span>
                </li>
                <li class="list-info1">
                  <span v-bind:class="{'info-red':item.isup,'info-green':!item.isup}" class="info-numbers ">{{item.upStart}}</span>
                </li>
                <li class="list-info2">
                  <span v-bind:class="{'info-red':item.isup,'info-green':!item.isup}" class="info-numbers">{{item.isup ? '+':'-'}}{{item.persentcount}}%</span>
                </li>
              </ul>
            </a>
          </li>
        </ul>
      </div>
      <div class="international-list-button">
        <ul>
          <li><a href="#/investment-security">安全保障</a></li>
          <li><a href="#/guiderisk">风险告知</a></li>
          <li><a href="#/about-us">关于我们</a></li>
        </ul>
      </div>
    </div>
    <!-- END International LIST -->
    <!-- START NAVIGATION -->
    <div class="nav-footer">
      <ul class="nav-items">
        <li class="nav-home active"><a href="/#">首页</a></li>
        <li class="nav-news "><a href="#/news">资讯</a></li>
        <li class="nav-trading "><a href="#/trade">交易</a></li>
        <li class="nav-found "><a href="#/find">发现</a></li>
        <li class="nav-mine "><a href="#/mine">我的</a></li>
      </ul>
    </div>
    <!-- END NAVIGATION -->
  </div>
</template>

<script>
  import config from '../app-config/config.json'
  import store from '../store/home-store';

  export default {
    created(){
      this.$http.get(`${config.host}/index.htm`).then((data) => {
        data.body.foreignCommds.forEach((v) => {
          v.isup = false;
          v.upStart = 0;
          v.persentcount = 0;
        });

        this.foreignCommds = data.body.foreignCommds;
        this.quotequerystring = JSON.parse(data.body.contracts).join(',');
        this.getQuote();
        if (!store.hasgetQuote) {
          store.hasgetQuote = true;
          setInterval(() => {
          this.getQuote();
          }, 1000);
        }
      });
    },
    methods: {
      dealquot(data){
        let text = data.body.match(/data:'([\s\S]+)'/);
        let body = text[1].split(';');
        body.forEach((v, k, arr) => {
          arr[k] = v.split(',');
          arr[k][1] = Number(arr[k][1]) > 0;
        });
        this.foreignCommds.forEach((v) => {
          let rg = new RegExp(`${v.code}\\d+`);
          for (let vv of body) {
            if (rg.test(vv[0])) {
              v.isup = vv[1];
              v.upStart = vv[2];
              v.persentcount = this.quotePersent(v.isup, +vv[2], +vv[3]);
              break;
            }
          }
        });
      },
      quotePersent(isup, up, end){
        if (isup) {
          return (((up - end) / end) * 100).toFixed(2);
        } else {
          return (((end - up ) / up) * 100).toFixed(2);
        }

      },
      getQuote: function () {
        let url = `${config.quotehost}/quote.jsp?callback=parsejson&code=${encodeURIComponent(this.quotequerystring)}&simple=true&t=1493706082886&_=1493706079516`;
        this.$http.get(url).then((data) => this.dealquot(data));
      }
    },
    data () {
      return {
        iconmap: {
          '美原油': 'icon-oil',
          '美黄金': 'icon-gold',
          '美白银': 'icon-silver',
          '恒指': 'icon-HSI',
          '小恒指': 'icon-HSI',
          '富时A50': 'icon-ftse',
          '德指': 'icon-germany'
        },
        foreignCommds: [],
        quotequerystring: ''
      }
    }
  };
</script>

<!-- Loads SCSS -->
<style lang="scss" scoped>
  @import "../assets/css/main.scss";
</style>
