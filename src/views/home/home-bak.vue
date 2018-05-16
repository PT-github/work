<template>
  <div>
    <div class="content">{{ msg }}</div>
    <el-button type="primary" size="small" @click="test">测试发请求</el-button>
  </div>
</template>
<script>
  import {getList} from '@/api/test'
  export default {
    name: 'home',
    data () {
      return {
        msg: '首页'
      }
    },
    methods: {
      test() {
        getList('id','name').then(res => {
          console.log(res)
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
