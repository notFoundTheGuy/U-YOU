<template>
  <div>
    <div class="nav-content">
      <div class="user" id='user'>
        <p id="tra" class="tra"></p>
          <div class="user-block" id="user-block">
            <ul>
              <li>我的消息</li>
              <li>个人中心</li>
              <li>注销登录</li>
            </ul>
          </div>
          <i class="fa fa-user-circle user-icon" style="font-size:22px;color:#b8d3ca"></i>
      </div>
      <span> <i class="fa fa-search search-icon" style="font-size:16px;color:#a7ab86"></i></span>
      <input type="text" class="search-input">  
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
      msg: '这是一个HEADER！！！！！'
    }
  }
}

$(document).ready(function () {
  $('#user').mouseenter(function () {
    $('#user-block').css({
      'height': '150px'
    })
    $('#user-block ul').fadeIn()
    $('#tra').css('opacity', '1')
  })
  $('#user').mouseleave(function () {
    $('#user-block').css({
      'height': '0px'
    })
    $('#user-block ul').fadeOut()
    $('#tra').css('opacity', '0')
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
}
.nav-content{
  display: table-cell;
  vertical-align: middle;
  padding-right: 5%;
}
.nav-content .nav-bar{
  float: right;
  margin-right: 20px;
}
.nav-content .nav-bar li {
  float: right;
  width: 100px;
  -webkit-transition: transform 0.3s;
  -moz-transition: transform 0.3s;
  transition: transform 0.3s;
}
.nav-content .nav-bar li:hover {
  color:#b35e59;
  transform:scale(1.1);
  transform:translateY(-2px);
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
}

.nav-content .search-input {
  border: none;
  padding-left: 8px;
  padding-bottom: 2px;
  border-bottom: 1px solid gray;
  outline: none;
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