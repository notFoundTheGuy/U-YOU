<template>
  <section id="app">
    <v-header class="header"></v-header>
    <section class="center">
      <article class="carousel-box">
        <div id="myCarousel" class="carousel slide">
          <!-- 轮播图控制-指标 -->
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
          </ol>
          <!-- 轮播内容 -->
          <div class="carousel-inner">
            <div class="item active">
              <div class="carousel-caption">标题 1</div>
              <img src="./assets/img/car.jpg" alt="car">
            </div>
            <div class="item">
              <div class="carousel-caption">标题 2</div>
              <img src="./assets/img/vicky.jpg" alt="vicky">
            </div>
            <div class="item">
              <div class="carousel-caption">标题 3</div>
              <img src="./assets/img/road.jpg" alt="car">
            </div>
            <div class="item">
              <div class="carousel-caption">标题 4</div>
              <img src="./assets/img/colorful.jpg" alt="car">
            </div>
            <!-- 轮播图控制 -导航-->
            <!-- <a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
    	        <a class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a> -->
          </div>
        </div>
        <!-- <div class="list"></div> -->
      </article>
      <v-part class="part1" bgcolor="#b35e59" activity="猜你喜欢"></v-part>
      <v-part class="part2" bgcolor="#8a7e94" activity="看电影"></v-part>
      <v-part class="part3" bgcolor="#d4bb9c" activity="找美味"></v-part>
      <v-part class="part4" bgcolor="#f1c4be" activity="逛商场"></v-part>
      <v-part class="part5" bgcolor="#edd094" activity="周边游"></v-part>
      <v-part class="part6" bgcolor="#a7ab86" activity="其他。。。"></v-part>
      <v-part class="part7" bgcolor="#b8d3ca" activity="其他。。。"></v-part>
      <v-part class="part8" bgcolor="#93816d" activity="其他。。。"></v-part>
    </section>
    <!-- <v-footer class="footer"></v-footer> -->
  </section>
</template>

<script>
  import $ from 'jquery'
  import header from './components/header/header'
  import footer from './components/footer/footer'
  import part from './components/part/part.vue'
  
  export default {
    name: 'app',
    components: {
      'v-header': header,
      'v-footer': footer,
      'v-part': part
    }
  }
  $(document).ready(function () {
    $('#myCarousel').carousel({
      interval: 3000
    })
  })
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }
  
  h1,
  h2,
  h3 {
    padding: 0;
    margin: 0;
  }
  
  body {
    background: -webkit-linear-gradient(top, rgba(174, 172, 172, 0.4), #fff) no-repeat;
    /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient( bottom, rgba(174, 172, 172, 0.4), #fff);
    /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient( bottom, rgba(174, 172, 172, 0.4), #fff);
    /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom, rgba(105, 85, 107, 0.25), #fff) no-repeat;
    /* 标准的语法 */
    background-size: auto 500px;
  }
  
  .header {
    box-shadow: 0px 6px 10px rgba(174, 172, 172, 0.9);
    position: fixed;
    z-index: 999;
    top: 0;
  }
    
  .center {
    height: 300px;
  }
  
  .center .carousel-box {
    width: 70%;
    height: 500px;
    margin: 150px auto;
    border-radius: 7px;
    box-shadow: 4px 4px 30px gray;
  }
  
  .center .carousel-box .item {
    height: 500px;
  }

  .footer {
    width: 80%;
    margin: 0 auto;
  }
</style>
