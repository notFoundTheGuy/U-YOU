<template>
  <section id="app">
    <v-header></v-header>
    <v-menu></v-menu>
    <section class="center">
      <article class="carousel-box">
        <v-carousel>阿斯顿</v-carousel>
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
  import menu from './components/menu/menu.vue'
  import header from './components/header/header'
  import footer from './components/footer/footer'
  import part from './components/part/part.vue'
  import carousel from './components/carousel/carousel.vue'
  import elheader from './components/el-header/el-header.vue'
  
  export default {
    name: 'app',
    components: {
      'v-header': header,
      'v-footer': footer,
      'v-part': part,
      'v-menu': menu,
      'v-carousel': carousel,
      'v-elheader':elheader
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
