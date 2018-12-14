<template>
  <div>
    <el-row>
      <el-col :span="6"><div class="grid-content">选择角色：</div></el-col>
      <el-col :span="18">
        <div class="grid-content">
          <el-select v-model="form.currentRole" placeholder="请选择角色">
            <el-option label="管理员" value="admin"></el-option>
            <el-option label="学生" value="student"></el-option>
            <el-option label="老师" value="teacher"></el-option>
            <el-option label="家长" value="parent"></el-option>
            </el-select>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div class="grid-content">权限配置：</div></el-col>
      <el-col :span="18">
        <div class="grid-content">
          <div class="block">
            <el-checkbox v-model="accountManage">账号管理</el-checkbox>
            <div class="group">
              <el-checkbox v-model="creatAccount">新建账号</el-checkbox>
              <el-checkbox v-model="editAccount">编辑账号</el-checkbox>
             </div>
          </div>
          <div class="block">
            <el-checkbox v-model="accountManage">账号管理</el-checkbox>
            <div class="group">
              <el-checkbox v-model="creatAccount">新建账号</el-checkbox>
              <el-checkbox v-model="editAccount">编辑账号</el-checkbox>
             </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div class="grid-content" style="height: 40px;"></div></el-col>
      <el-col :span="18">
        <div class="grid-content">
          <el-button type="primary" @click="saveConfig">保存</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      accountManage: true,
      creatAccount: true,
      editAccount: false,
      form: {
        currentRole: 'admin'
      }
    }
  },
  methods: {
    saveConfig () {
      console.log('saveConfig')
    }
  }
}
</script>
<style lang="less" scoped>
  .el-row {
    margin-bottom: 10px;
    line-height: 40px;
  }
  .block {
    margin-top: 20px;
    &:first-child {
      margin: 0;
    }
  }
  .group {
    border-top: 1px solid #e1e1e1;
  }
</style>