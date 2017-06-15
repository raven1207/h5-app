<template>
    <div class="information-details">
        <!-- START HEADER -->
        <div class="header">
            <div class="header-left">
                <a href="javascript:history.back()"><img class="head-icon" src="../assets/svg/arrow-left.svg" /></a>
            </div>
            <h1>资讯详情</h1>
        </div>
        <!-- END HEADER -->

        <div class="information-details-title">
	        <h2>{{news.title}}</h2>
	        <span class="date-time">{{news.date}}</span>
        </div>

        <div class="information-details-content" v-html="news.content"></div>
    </div>
</template>

<script>
  import config from '../app-config/config.json'

  export default {
    created(){
      this.$http.get(`${config.host}/news/newsDetail.htm?id=${this.$route.query.id}`).then((data) => {
        this.news = data.body.news;
      });
    },
    data () {
      return {
        news:{}
      }
    }
  }
</script>
<style lang="scss" scoped>
   @import "../assets/css/main.scss"
</style>
