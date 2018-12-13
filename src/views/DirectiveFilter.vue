<template>
  <div>
    <h3>Filter</h3>
    <div class="format">时间格式化：{{timestamp | dateFormat('yyyy-MM-dd hh:mm:ss')}}</div>
    <div class="format">书名格式化：{{bookName | bookNameFormat}}</div>
    <h3>Directive</h3>
    <img class="img" v-img="{
      width: 204,
      height: 170,
      src: 'https://s3.amazonaws.com/123rf-chrome/images/67028130_xl.jpg'
    }">
  </div>
</template>
<script>
export default {
  name: 'DirectiveFilter',
  data () {
    return {
      timestamp: (new Date()).getTime(),
      bookName: '小王子'
    }
  },
  filters: {
    bookNameFormat (value) {
      return `《${value}》`
    }
  }
}
</script>
<style scoped>
  .format {
    margin: 0 0 10px 0;
  }
</style>