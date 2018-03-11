<template>
  <div class="menuContainer">
    <div id="flag" class="flag">
        +
    </div>
    <div class="menu" id="menu">
       <p class="menuItem openItem1 closeItem1">1</p>
       <p class="menuItem openItem2 closeItem2">2</p>
       <p class="menuItem openItem3 closeItem3">3</p>
       <p class="menuItem openItem4 closeItem4">4</p>
    </div>
  </div>
</template>

<script>
import $ from "jquery"
export default {
  name: "c0",
  data() {
    return {
      msg: "这是一个menu！！！！！"
    }
  }
}

$(document).ready(function() {
  var flag = document.getElementById("flag")
  var menu = document.getElementById("menu")
  var openFlag = true
  flag.addEventListener("click", function(params) {
    if (openFlag) {
      menu.classList.add("open")
      menu.classList.remove("menuClose")
      flag.classList.add("flagR")
      openFlag = false
    } else {
      menu.classList.add("menuClose")
      menu.classList.remove("open")
      flag.classList.remove("flagR")
      openFlag = true
    }
  })
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.menuContainer {
    position: fixed;
    top: 0;
    z-index: 999;
}
.menu {
  border-radius: 100px;
  width: 80px;
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menuItem {
  background: rgb(180, 179, 182);
  width: 60px;
  height: 60px;
  border-radius: 100px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}
.menuItem:hover {
  cursor: pointer;
  width: 75px;
  height: 75px;
  transition: all 0.3s;
}
.flag {
  background: blue;
  border-radius: 100px;
  width: 80px;
  height: 80px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  transition: all 0.3s;
  cursor: pointer;
}
.flag:hover {
}
.flagR {
  transform: rotate(135deg);
}
.open .openItem1 {
  animation: openItem1 0.5s ease-in-out 0s forwards;
}
.open .openItem2 {
  animation: openItem2 0.5s ease-in-out 50ms forwards;
}
.open .openItem3 {
  animation: openItem3 0.5s ease-in-out 100ms forwards;
}
.open .openItem4 {
  animation: openItem4 0.5s ease-in-out 150ms forwards;
}
.menuClose .closeItem1 {
  animation: closeItem1 700ms ease-in-out 0ms forwards;
}
.menuClose .closeItem2 {
  animation: closeItem2 650ms ease-in-out 0ms forwards;
}
.menuClose .closeItem3 {
  animation: closeItem3 600ms ease-in-out 0ms forwards;
}
.menuClose .closeItem4 {
  animation: closeItem4 550ms ease-in-out 0ms forwards;
}
@keyframes openItem1 {
  0% {
    transform: scale(0.3);
  }
  70% {
    transform: scale(1);
    transform: translate(170px);
  }
  100% {
    transform: scale(1);
    transform: translate(150px);
  }
}
@keyframes openItem2 {
  0% {
    transform: scale(0.3);
  }
  70% {
    transform: scale(1);
    transform: translate(150px, 77px);
  }
  100% {
    transform: scale(1);
    transform: translate(129px, 75px);
  }
}
@keyframes openItem3 {
  0% {
    transform: scale(0.3);
  }
  70% {
    transform: scale(1);
    transform: translate(86px, 145px);
  }
  100% {
    transform: scale(1);
    transform: translate(75px, 129px);
  }
}
@keyframes openItem4 {
  0% {
    transform: scale(0.3);
  }
  70% {
    transform: scale(1);
    transform: translate(0, 165px);
  }
  100% {
    transform: scale(1);
    transform: translate(0, 150px);
  }
}
@keyframes closeItem1 {
  0% {
    transform: translate(150px);
  }
  60% {
    transform: translate(150px);
  }
  100% {
    transform: scale(0);
    transform: translate(0);
  }
}
@keyframes closeItem2 {
  0% {
    transform: translate(129px, 75px);
  }
  45% {
    transform: translate(129px, 75px);
  }
  100% {
    transform: translate(0);
  }
}
@keyframes closeItem3 {
  0% {
    transform: translate(75px, 129px);
  }
  30% {
    transform: translate(75px, 129px);
  }
  100% {
    transform: scale(0);
    transform: translate(0);
  }
}
@keyframes closeItem4 {
  0% {
    transform: translate(0, 150px);
  }
  15% {
    transform: translate(0, 150px);
  }
  100% {
    transform: scale(0);
    transform: translate(0);
  }
}
</style>