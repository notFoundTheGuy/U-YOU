<template>
  <div class="aside-right">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'c0',
  data () {
    return {
      msg: '这是右边的aside！！！！！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aside-right{
    background: gray;
}
</style>