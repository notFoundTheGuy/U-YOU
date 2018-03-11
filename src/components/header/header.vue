<template>
  <div class="header " id="header">
    <div class="nav-content">
      <div class="user" id='user'>
          <i class="fa fa-user-circle user-icon" style="font-size:22px;color:#b8d3ca"></i>
      </div>
      <span> <i class="fa fa-search search-icon" id="search" style="font-size:16px;color:#a7ab86"></i></span>
      <div><input type="text" class="search-input">  </div>
      <ul class="nav-bar">
         <li class="item">关于我们</li>
         <li class="item">网址导航</li>
         <li class="item">地图</li>
         <li class="item">首页</li>
       </ul>
    </div>
    
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: '',
  data () {
    return {
      
    }
  }
}

$(document).ready(function () {
  //用户详情弹出
  $('#user').mouseenter(function () {
    $('#user-block').css({
      'height': '150px'
    })
    $('#user-block ul').fadeIn()
    $('#tra').css('opacity', '1')
  })
  //用户详情闭合
  $('#user').mouseleave(function () {
    $('#user-block').css({
      'height': '0px'
    })
    $('#user-block ul').fadeOut()
    $('#tra').css('opacity', '0')
  })
  // 滚轮滚动事件
  $(window).scroll(function (e) {
    console.log($(document).scrollTop());
    if ($(document).scrollTop() >= 400) {
      $('#header').addClass('headerScroll');
    }else {
      $('#header').removeClass('headerScroll');
    }
  })
   //搜索框弹出
  $('#search').mouseenter(function () {
    // $('.nav-bar').addClass('search-input-show');
  })
  //搜索框隐藏
  $('.search-input,#search').mouseleave(function () {
    // $('.nav-bar').removeClass('search-input-show');
  })
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
.header{
  height: 70px; /*控制header的高度*/
  width: 100%;
  background: #fff;
  display: table;
  box-shadow: 0px 6px 10px rgba(174, 172, 172, 0.9);
  position: fixed;
  z-index: 999;
  top: 0;
  transition: all 0.5s;
}
.headerScroll {
  height: 50px;
  box-shadow: 0px 6px 10px rgba(174, 172, 172, 0.3);
  background: #faf9f9;
}
.nav-content{
  display: table-cell;
  vertical-align: middle;
  padding-right: 5%;
}
.nav-content .nav-bar{
    padding-right: 50px;
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: row-reverse;
    /* position: relative; */
    /* left: 150px; */
    transition: all 0.5s;
}
.nav-content .nav-bar li {
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* transition: all 0.1s; */
    border-bottom: 5px solid rgba(104, 104, 243,0);
}
.nav-content .nav-bar li:hover {
  border-bottom: 5px solid rgb(104, 104, 243);
  /* transition: all 0.1s; */
  cursor: pointer;
}
.nav-content .user {
  position: relative;
  left: 50px;
}
.nav-content .tra {
  width:0;
  height:0;
  border: 10px solid transparent;
  border-bottom-color: rgb(223, 220, 220);
  position: relative;
  top: 15px;
  left: -20px; 
  opacity: 0;
  -webkit-transition: all  0.5s;
  -moz-transition: all  0.5s;
  transition: all  0.5s;
}
.nav-content :nth-child(2),.nav-content :nth-child(3),.nav-content :nth-child(1){
  float: right;
  display: flex;
  align-items: center;
  height: 100%;
}

.nav-content .search-input {
  border: none;
  padding-left: 8px;
  padding-bottom: 2px;
  outline: none;
  background: none;
  height: 40%;
  transition: all 0.4s;
  border-bottom: 1px solid gray !important;
  /* width: 0; */
}
.search-input-show {
  position: relative;
  left:0 !important;
}
.nav-content .search-icon {
  position: relative;
  right: 20px;
  bottom: 3px;
  cursor: pointer;
  transition: all 0.2s;
}
.nav-content .search-icon:hover {
  transform: scale(1.3);
}
.user-block {
  position: fixed;
  top: 55px;
  right: 5px;
  width: 150px;
  height: 0px;
  background:rgb(223, 220, 220);
  border-radius: 5px;
  -webkit-transition:all 0.3s ;
  -moz-transition:all 0.3s ;
  transition: all 0.3s;
  overflow: hidden;
}
.user-block ul {
  padding-top: 20px;
  display: none; 
}
.user-block li {
  letter-spacing: 2px;
  height: 28px;
  line-height: 28px;
  cursor:pointer;
  width: 150px;
}
.user-block li:hover {
  background: #b35e59;
}
.location {
  background: gray;
  width: 100px;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
</style>