<template>
  <div>
    <el-row>
      <el-col :span="18"><div class="grid-content">
        <el-form :inline="true" :model="searchForm" class="demo-form-inline">
          <el-form-item>
            <el-input v-model="searchForm.account" placeholder="账号" @keyup.enter.native="handleSearchAccount"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSearchAccount">查询</el-button>
          </el-form-item>
        </el-form>
      </div></el-col>
      <el-col :span="6">
        <div class="grid-content tr">
          <el-button type="primary" @click="handleCreateAccount">新建账号</el-button>
        </div>
      </el-col>
    </el-row>
     <el-table
      :data="accountList"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="mobile"
        label="账号">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button @click="handleModify(scope.row)" type="text" size="small">编辑</el-button>
          <el-button type="text" size="small" @click="handleDelete(deleteAccount, scope.row, scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block tc">
      <pagination
        v-if="paginationShow"
        :config="paginationConfig"
        @currentChange="handleCurrentChange"
        @showError="showErrorMsg"></pagination>
    </div>
    <el-dialog :title="mode_text" :visible.sync="dialogFormVisible">
      <el-form :model="handlerForm">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="handlerForm.name" autocomplete="off" v-if="mode === 'create'"></el-input>
          <span v-else>{{handlerForm.name}}</span>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="handlerForm.mobile" autocomplete="off" v-if="mode === 'create'">></el-input>
          <span v-else>{{handlerForm.mobile}}</span>
        </el-form-item>
        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-checkbox-group v-model="handlerForm.checkedRoles" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="role in roles" :label="role" :key="role.id">{{role.name}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">{{action_text}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination'
export default {
  components: {
    // 局部注册
    Pagination
  },
  data () {
    return {
      searchForm: {
        account: ''
      },
      handlerForm: {
        name: '',
        mobile: '',
        checkedRoles: []
      },
      mode: '',
      roles: [
        {id: 'admin', name: '管理员'},
        {id: 'student', name: '学生'},
        {id: 'teacher', name: '老师'},
        {id: 'classTeacher', name: '班主任'}
      ],
      formLabelWidth: '120px',
      dialogFormVisible: false,
      paginationConfig: {
        limit: 10,
        currentPage: 1
      },
      paginationShow: false,
      currentPage: 1,
      createForm: {
        name: '',
        mobile: '',
        checkedCities: []
      },
      accountList: [{
        mobile: '13560123456',
        name: '王小虎',
        roles: ['admin']
      }, {
        mobile: '13560123457',
        name: '王小虎',
        roles: ['student']
      }, {
        mobile: '13560123458',
        name: '王小虎',
        roles: ['teacher']
      }, {
        mobile: '13560123459',
        name: '王小虎',
        roles: ['classTeacher']
      }]
    }
  },
  computed: {
    mode_text () {
      if (!this.mode) return ''
      return (this.mode === 'create') ? '新建账号' : '编辑账号'
    },
    action_text () {
      if (!this.mode) return ''
      return (this.mode === 'create') ? '新 建' : '保 存'
    }
  },
  methods: {
    handleSearchAccount () {
      if (!this.form.account) {
        return false
      }
      this.search()
    },
    handleCreateAccount () {
      this.mode = 'create'
      this.handlerForm = {
        name: '',
        mobile: '',
        checkedRoles: []
      }
      this.dialogFormVisible = true
    },
    handleModify (row) {
      console.log(row)
      this.handlerForm = {
        name: row.name,
        mobile: row.mobile,
        checkedRoles: []
      }
      this.mode = 'modify'
      this.dialogFormVisible = true
    },
    handleDelete (done, item, index) {
      this.$confirm('确认删除？')
        .then(_ => {
          done(item, index)
        })
        .catch(_ => {})
    },
    handleCurrentChange () {
      this.search()
    },
    showErrorMsg (msg) {
      this.$message({
        message: msg,
        type: 'warning'
      })
    },
    search () {
      console.log({
        keyword: this.form.account,
        perPage: this.paginationConfig.limit,
        page: this.paginationConfig.currentPage
      })
    },
    createAccount () {
      console.log('createAccount')
    },
    deleteAccount (account, index) {
      this.accountList.splice(index, 1)
    },
    handleCheckedCitiesChange () {
      console.log(this.handlerForm)
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