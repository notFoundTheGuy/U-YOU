<template>
  <div class="aside-left">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'c0',
  data () {
    return {
      msg: '这是左边的aside！！！！！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aside-left{
    background: gray;
}
</style>