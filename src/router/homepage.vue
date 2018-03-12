<template>
  <div class="homepage">
    <h1>{{ msg }}</h1>
    <v-carousel></v-carousel>
    <v-part class="part1" bgcolor="#b35e59" activity="猜你喜欢"></v-part>
    <v-part class="part2" bgcolor="#8a7e94" activity="看电影"></v-part>
    <v-part class="part3" bgcolor="#d4bb9c" activity="找美味"></v-part>
    <v-part class="part4" bgcolor="#f1c4be" activity="逛商场"></v-part>
    <v-part class="part5" bgcolor="#edd094" activity="周边游"></v-part>
    <v-part class="part6" bgcolor="#a7ab86" activity="其他。。。"></v-part>
    <v-part class="part7" bgcolor="#b8d3ca" activity="其他。。。"></v-part>
    <v-part class="part8" bgcolor="#93816d" activity="其他。。。"></v-part>
  </div>
</template>

<script>
import $ from 'jquery'
import part from '../components/part/part.vue'
import carousel from '../components/carousel/carousel.vue'
export default {
  name: 'homepage',
  data () {
    return {
      msg: '这是首页！！！！！'
    }
  },
  components: {
      'v-part': part,
      'v-carousel': carousel,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homepage {
    width: 80%;
    margin: 150px auto;
    border-radius: 7px;
    box-shadow: 4px 4px 30px gray;
}

</style>