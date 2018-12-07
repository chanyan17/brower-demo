<template>
  <div>
    <el-row>
      <el-col :span="18"><div class="grid-content">
        <el-form :inline="true" :model="form" class="demo-form-inline">
          <el-form-item>
            <el-input v-model="form.account" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="searchAccount">查询</el-button>
          </el-form-item>
        </el-form>
      </div></el-col>
      <el-col :span="6"><div class="grid-content">
        <el-button type="primary" @click="createAccount">新建账号</el-button>
      </div></el-col>
    </el-row>
     <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="date"
        label="日期">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        account: ''
      },
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  methods: {
    handleClick (row) {
      console.log(row)
    },
    searchAccount () {
      console.log('submit!')
    },
    createAccount () {
      console.log('createAccount')
    }
  }
}
</script>