<template>
  <div class="app-container">

    <el-form :model="form" ref="form" label-width="140px" v-loading="formLoading" :rules="rules" size="mini">
      <el-form-item label="数据库类型"  prop="daqsite">
        <el-select v-model="form.site" placeholder="数据库类型" clearable>
          <el-option v-for="item in sitelist" :key="item.key" :value="item.key" :label="item.value"></el-option>
        </el-select>
      </el-form-item>
      <!-- <el-form-item label="">
        <el-checkbox v-model="csv">输出数据到CSV</el-checkbox>
      </el-form-item>
      <el-form-item label="">
        <el-checkbox v-model="protect">开启监护程序</el-checkbox>
      </el-form-item>
      <el-form-item label="">
        <el-radio-group v-model="form.dblink">
          <el-radio label="1">数据库连接</el-radio>
          <el-radio label="2">access数据库连接</el-radio>
        </el-radio-group> -->
        <!-- <el-radio v-model="radio" label="1">数据库连接</el-radio>
        <el-radio v-model="radio" label="2">access数据库连接</el-radio> 
      </el-form-item>-->
      <el-form-item label="数据库名称">
        <el-input v-model="form.dbname"></el-input>
      </el-form-item>
      <el-form-item label="数据库IP地址">
        <el-input v-model="form.ip"></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <!-- <el-form-item label="状态：">
        <el-select v-model="form.status" placeholder="状态">
          <el-option v-for="item in statusEnum" :key="item.key" :value="item.key" :label="item.value"></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'


export default {
  data () {
    return {
        // radio: '1',
         csv:true,
        // statusEnum:[],
         protect:true,
        sitelist:[],
        form: {
            site: '',
            dblink: '1',
            csv:true,
            protect:true,
            usernme: '',
            password: '',
            ip: '',
            dbname: '',
            
        // status: 1,
        
      },
      formLoading: false,
      rules: {
        
      }
    }
  },
  created () {
    // let id = this.$route.query.id
    // let _this = this
    // if (id && parseInt(id) !== 0) {
    //   _this.formLoading = true
    //   userApi.selectUser(id).then(re => {
    //     _this.form = re.response
    //     _this.formLoading = false
    //   })
    // }
  },
  methods: {
    submitForm () {
    //   let _this = this
    //   this.$refs.form.validate((valid) => {
    //     if (valid) {
    //       this.formLoading = true
    //       userApi.createUser(this.form).then(data => {
    //         if (data.code === 1) {
    //           _this.$message.success(data.message)
    //           _this.delCurrentView(_this).then(() => {
    //             _this.$router.push('/user/admin/list')
    //           })
    //         } else {
    //           _this.$message.error(data.message)
    //           _this.formLoading = false
    //         }
    //       }).catch(e => {
    //         _this.formLoading = false
    //       })
    //     } else {
    //       return false
    //     }
    //   })
    },
    resetForm () {
      let lastId = this.form.id
      this.$refs['form'].resetFields()
      this.form = {
            site: '',
            dblink: '1',
            csv:true,
            protect:true,
            usernme: '',
            password: '',
            ip: '',
            dbname: '',
      }
      this.form.id = lastId
    },
  },

}
</script>