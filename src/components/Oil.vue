
<template>
	<div class="oil">

    <div class="header">
    	<h1>资讯</h1>
    </div>

    <!-- NEWS CAT TABS -->
    	<div class="list-category-tab">
    	<ul>
    		<li class=""><a href="#/news">资讯直播</a></li>
    		<li class="active"><a href="#/oil">原油</a> </li>
    		<li class=""><a href="#/gold">金银</a></li>
    	</ul>
    	</div>
 	<!-- END NEWS CAT TABS -->

 	<!-- OIL ARTICLE ITEM LIST -->
 	<div class="article-oil-list">
 		<ul class="article-oil-list-items">
      <li class="article-oil-list-item" v-for="item in newsList">
        <a v-bind:href="'#/information-details?id='+item.id">
          <span class="item-intro-text">
            {{item.title}}
            <span class="item-date-time">{{item.date}}</span>
          </span>
          <span class="item-image"><img v-bind:src="item.thumb"/> </span>
        </a>
      </li>
 		</ul>
 	</div>
	<!-- END OIL ARTICLE ITEM LIST -->

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
      this.$http.get(`${config.host}/news/newsList.htm?type=0`).then((data) => {
        this.newsList = data.body.newsList;
      });
    },
    data () {
      return {
        newsList:[]
      }
    }
  }
</script>

<style lang="scss" scoped>
   @import "../assets/css/main.scss"
</style>
