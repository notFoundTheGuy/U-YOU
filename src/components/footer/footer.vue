<template>
  <div class="footer">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'c0',
  data () {
    return {
      msg: '这是一个FOOTER！！！！！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
    background: burlywood;
}
</style>