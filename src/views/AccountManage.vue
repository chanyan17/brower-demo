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
      <el-col :span="6">
        <div class="grid-content tr">
          <el-button type="primary" @click="createAccount">新建账号</el-button>
        </div>
      </el-col>
    </el-row>
     <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="account"
        label="账号">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button @click="handleModify(scope.row)" type="text" size="small">编辑</el-button>
          <el-button type="text" size="small" @click="handleDelete(deleteAccount, scope.row.account)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block tc">
      <pagination v-if="paginationShow" :config="paginationConfig"></pagination>
    </div>
    <el-dialog title="新建账号" :visible.sync="dialogFormVisible">
      <el-form :model="createForm">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="createForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="createForm.mobile" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-checkbox-group v-model="createForm.checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">新 建</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination'
export default {
  components: {
    Pagination
  },
  data () {
    return {
      cities: ['上海', '北京', '广州', '深圳'],
      checkedCities: [],
      formLabelWidth: '120px',
      dialogFormVisible: false,
      paginationConfig: {
        limit: 10,
        currentPage: 1
      },
      paginationShow: false,
      currentPage: 1,
      form: {
        account: ''
      },
      createForm: {
        name: '',
        mobile: '',
        checkedCities: []
      },
      tableData: [{
        account: '13560123456',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        account: '13560123457',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        account: '13560123458',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        account: '13560123459',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  methods: {
    handleModify (row) {
      this.dialogFormVisible = true
    },
    handleSizeChange () {
      console.log('handleSizeChange')
    },
    handleCurrentChange () {
      console.log('handleCurrentChange')
    },
    showErrorMsg (msg) {
      console.log(msg)
    },
    searchAccount () {
      if (!this.form.account) {
        return false
      }
      console.log(this.form.account)
    },
    createAccount () {
      console.log('createAccount')
    },
    deleteAccount (account) {
      console.log(account)
    },
    handleDelete (done, account) {
      this.$confirm('确认删除？')
        .then(_ => {
          done(account)
        })
        .catch(_ => {})
    },
    handleCheckedCitiesChange () {
      console.log(this.createForm)
    }
  },
  created () {
    setTimeout(() => {
      this.paginationConfig.maxentries = 20
      this.paginationShow = true
    }, 1000)
  }
}
</script>
<style lang="less" scoped>
.block {
  margin-top: 20px;
}
</style>