<template>
  <section id="app">
    <v-header></v-header>
    <v-menu></v-menu>
    <transition name="fade">    
      <router-view></router-view>
    </transition>
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
    overflow-y: scroll;
    background: -webkit-linear-gradient(top, rgba(174, 172, 172, 0.4), #fff) no-repeat;
    /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient( bottom, rgba(174, 172, 172, 0.4), #fff);
    /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient( bottom, rgba(174, 172, 172, 0.4), #fff);
    /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom, rgba(105, 85, 107, 0.25), #fff) no-repeat;
    /* 标准的语法 */
    background-size: 100% 500px;
  }
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
} */
</style>
