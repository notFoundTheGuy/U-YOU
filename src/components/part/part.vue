<template>
  <div class="part">
    <p class="title-nav" :style="{ background : bgcolor }">{{activity}}</p>
    <div class="content">电影内容</div>
  </div>
</template>

<script>
export default {
  name: 'c0',
  props: ['bgcolor', 'activity'],
  data () {
    return {
      // dColor: '#b35e59',  // 控制头部的颜色
      // dActivity: '看电影'
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.part {
  margin: 60px auto;
  width: 70%;
  border-radius: 10px;
  overflow: hidden;
}
.part .title-nav {
  height: 50px;
  line-height: 50px;
  text-align: left;
  padding-left: 10px;
}
.part .content {
    border: 1px solid gray;
    border-top: none;
    min-height: 500px;
}
</style>