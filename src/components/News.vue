<template>
  <div class="news">

    <div class="header">
      <h1>资讯</h1>
    </div>

    <!-- NEWS CAT TABS -->
    <div class="list-category-tab">
      <ul>
        <li class="active"><a href="#">资讯直播</a></li>
        <li class=""><a href="#/oil">原油</a></li>
        <li class=""><a href="#">金银</a></li>
      </ul>
    </div>
    <!-- END NEWS CAT TABS -->

    <!-- ITEM LIST -->

    <div class="article-news-list">
      <span class="date"><span class="date-top">04</span><br/><span class="date-bottom">05月</span></span>
      <ul class="article-news-list-items">
        <li class="article-news-list-item">
          <a>
            出席据GMS民调：德国总理默克尔所在保守党派料将以36%的支持率击败支持率为29%的社会民主党赢得大选。
            <span class="article-time">16:53:31</span>
          </a>
        </li class="article-news-list-item">
        <li>
          <a>
            【股市资金流向图】今日沪深两市主力资金净流出220.29亿元，占比5.01%；小单资金净流入205.01亿元，占比4.66%。
            <span class="article-time">16:53:31</span>
          </a>
        </li>
        <li class="article-news-list-item">
          <a class="red">
            国土部：中央对地方土地利用规划权没有新的举措；国土资源部反对投机炒作土地，也不希望地方发展依赖土地财政。
            <span class="article-time">16:53:31</span>
          </a>
        </li>
        <li class="article-news-list-item">
          <a class="red">
            大连商品交易所：2017年5月5日（周五）期货主力合约行情。 <img src="../assets/images/item-image1.png">
            <span class="article-time">16:53:31</span>
          </a>
        </li>
        <li class="article-news-list-item">
          <a>
            国土部：中央对地方土地利用规划权没有新的举措；国土资源部反对投机炒作土地，也不希望地方发展依赖土地财政。
            <span class="article-time">16:53:31</span>
          </a>
        </li>
        <li class="article-news-list-item">
          <a>
            国土部：中央对地方土地利用规划权没有新的举措；国土资源部反对投机炒作土地，也不希望地方发展依赖土地财政。
            <span class="article-time">16:53:31</span>
          </a>
        </li>
      </ul>

    </div>

    <!-- END ITEM LIST -->

    <!-- START NAVIGATION -->
    <div class="nav-footer">
      <ul class="nav-items">
        <li class="nav-home"><a href="#/">首页</a></li>
        <li class="nav-news active"><a href="#/news">资讯</a></li>
        <li class="nav-trading"><a href="#/trade">交易</a></li>
        <li class="nav-found"><a href="#/find">发现</a></li>
        <li class="nav-mine"><a href="#/mine">我的</a></li>
      </ul>
    </div>
    <!-- END NAVIGATION -->

  </div>


</template>

<script>
  import config from '../app-config/config.json'

  export default {
    created(){
      this.$http.get(`${config.host}/news/expressList.htm?maxId=0`).then((data) => this.parseData(data.body.newsList));
    },
    methods: {
      parseData: (data) => {

      }
    },
    data () {
      return {
        newsList: []
      }
    }
  }

</script>

<!-- Loads SCSS -->
<style lang="scss" scoped>
  @import "../assets/css/main.scss"
</style>
