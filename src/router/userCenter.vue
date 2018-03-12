<template>
  <div class="footer">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import $ from 'jquery'
// import part from './components/part/part.vue'
// import carousel from './components/carousel/carousel.vue'
export default {
  name: 'user',
  data () {
    return {
      msg: '这是用户中心！！！！！'
    }
  },
  components: {
    //   'v-part': part,
    //   'v-carousel': carousel,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>