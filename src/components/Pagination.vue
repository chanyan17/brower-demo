<template>
  <div class="pagination">
    <button type="button" @click="prev">{{config.prevText}}</button>
    <div class="pager-wrapper">
        <span class="current-page">{{config.currentPage}}</span> / <span class="page-count">{{config.totalPage}}</span>
    </div>
    <button type="button" @click="next">{{config.nextText}}</button>
    <div class="jump-wrapper">
      跳到第 <input type="type" v-model="config.jumpPage" @keyup.enter="turnPageTo(config.jumpPage)"> 页
    </div>
    <button type="button" @click="turnPageTo(config.jumpPage)">跳页</button>
  </div>
</template>
<script>
export default {
  data () {
    /* config: {
     *   maxentries: '总数，必选参数，整数',
     *   currentPage: '当前页，可选参数，默认是 1',
     *   limit: '每页条数，可选参数，默认是 10',
     *   prevText: ' “前一页” 分页按钮上显示的文字，可选参数，默认是 上一页',
     *   nextText: ' “后一页” 分页按钮上显示的文字，可选参数，默认是 下一页'
     * }
     */

    return {
      defaultConfig: {
        currentPage: 1,
        limit: 10,
        prevText: '上一页',
        nextText: '下一页'
      },
      page_list: []
    }
  },
  props: ['config', 'show'],
  computed: {
    maxentries () {
      return this.config.maxentries
    }
  },
  watch: {
    // maxentries (newVal, oldVal) {
    //   if (newVal || newVal === 0) {
    //     if (this.config.totalPage === 0) {
    //       return false
    //     }

    //     // 在删除完最后一页所有数据后自动跳至上一页并更新页码
    //     if (this.config.currentPage > this.config.totalPage) {
    //       this.turnPageTo(this.config.totalPage)
    //     }

    //     if (this.config.currentPage < 1) {
    //       this.turnPageTo(1)
    //     }
    //   }
    // },
    config: {
      handler (newVal, oldVal) {
        console.log(newVal)
        if (newVal && newVal.maxentries !== 0) {
          console.log(newVal.maxentries)
          this.numPages()
        }
      },
      immediate: true,
      deep: true
    }
  },
  created () {
    console.log(this.config)
    for (var k in this.defaultConfig) {
      if (this.defaultConfig.hasOwnProperty(k)) {
        this.config[k] = this.config[k] || this.defaultConfig[k]
      }
    }

    // this.numPages()
  },
  methods: {
    handleBtn () {
      this.$emit('currentChange')
    },
    prev () {
      this.config.currentPage--
      this.$emit('currentChange')
    },
    next () {
      this.config.currentPage++
      this.$emit('currentChange')
    },
    numPages () {
      this.config.maxentries = this.config.maxentries || 0
      this.config.totalPage = Math.ceil(
        this.config.maxentries / this.config.limit
      )
      console.log(this.config.totalPage)
    },
    turnPageTo (page) {
      const pageInput = parseInt(page, 10)

      if (this.config.currentPage === pageInput) {
        return false
      }

      if (pageInput <= this.config.totalPage && pageInput >= 1) {
        this.config.currentPage = pageInput
        this.config.type === 0 && this.getPageList()
        this.$emit('currentChange')
      } else {
        this.$emit('showError', '不存在该页')
      }

      this.config.jumpPage = ''
    }
  }
}
</script>
<style lang="less" thisd>
.pagination {
  .pager-wrapper,
  .jump-wrapper {
    display: inline-block;
    color: #606266;
  }
  button {
    padding: 5px 10px;
    font-size: 14px;
    border-radius: 4px;
    border: none;
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    cursor: pointer;
  }
  input {
    width: 50px;
    height: 22px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    text-align: center;
    color: #606266;
  }
}
</style>