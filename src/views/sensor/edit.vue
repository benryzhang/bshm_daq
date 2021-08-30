<template>
    <span>
        <el-form label-width="160px" class="demo-ruleForm" size="mini" :model="damageinfolist" :rules="formrules" ref="damageinfolist" :validate-on-rule-change="false">
        <!-- <el-divider content-position="left">基本信息</el-divider> -->
            <el-row :gutter="20">
                <el-col>
                    <div class="grid-content bg-purple">
                        <el-form-item label="传感器名称" prop="testdate">
                            <el-input v-model="damageinfolist.testdate"></el-input>
                            <!-- <el-date-picker
                                v-model="addTime.createDate"
                                value-format="yyyy-MM-dd HH:mm:ss"
                                type="datetime"
                                
                                placeholder="选择日期时间"
                                readonly = "true"
                                clearable="false">
                            </el-date-picker> -->
                        </el-form-item>
                    </div>
                </el-col>
                </el-row>
                <el-row :gutter="20">
                <el-col >
                    <div class="grid-content bg-purple">
                        <div class="grid-content bg-purple">
                            <el-form-item label="传感器编号" prop="blocktype">
                                <el-input v-model="damageinfolist.inspector"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                </el-col>
                </el-row>
                <el-row :gutter="20">
                <el-col>
                    <div class="grid-content bg-purple">
                        <el-form-item label="数据采集列数" prop="componentid">
                            <el-input v-model="damageinfolist.componentid"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                
                
            </el-row>
            <el-row :gutter="20">
                <el-col>
                    <div class="grid-content bg-purple">
                        <div class="grid-content bg-purple">
                            <el-form-item label="重采样频率" prop="damagetype">
                                <el-input v-model="damageinfolist.componentid"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                </el-col>
                </el-row>
                <el-row :gutter="20">
                <el-col>
                    <div class="grid-content bg-purple">
                        <div class="grid-content bg-purple">
                            <el-form-item label="采集设备编号" prop="scale">
                                <el-input v-model="damageinfolist.componentid"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                </el-col>
                </el-row>
                <el-row :gutter="20">
                <el-col>
                    <div class="grid-content bg-purple">
                        <el-form-item label="端口号" prop="inspector">
                            <el-input v-model="damageinfolist.inspector"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                
                
            </el-row>
            <el-row :gutter="20">
                <el-col>
                    <div class="grid-content bg-purple">
                        <el-form-item label="传感器状态" prop="qualitativedescription">
                            <el-input v-model="damageinfolist.inspector"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col >
                    <div class="grid-content bg-purple">
                        <el-form-item label="初始(修正)值" prop="quantitativedescription">
                            <el-input v-model="damageinfolist.inspector"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
        <h5 style="margin: 0px;padding: 0px;"></h5>
        
        </el-form>
         
                
    </span>
</template>
<script>
//import edit from './edit'
//import moment from 'moment'

  export default {
    name: "edit",
    data() {
      return {
          addTime:{},
          blocktypelist:[],
        //addTime:{createDate:this.$moment(new Date()).format('YYYY-MM-DD HH:mm:ss')},
        damageinfolist: {
            testdate:'',
            blocktype:'',
            componentid: '',
            damagetype:'',
            scale:'',
            qualitativedescription:'',
            quantitativedescription:'',
            damagelocation:'',
            damagedescription:'',
            inspector:'',
            damagepicture:'',
        },
        url:"sensor/ACC.png",
        imageUrl: '',

        formrules: {
           createDate: [
             { message: '请输入传感器编号' ,trigger: 'blur'}
           ],
          blocktype: [
            { message: '请选择构件类型', trigger: 'change' },
          ],
          componentid: [
            {  message: '请选择构件ID', trigger: 'change' }
          ],
          damagetype: [
            {   message: '请选择病害类型', trigger: 'change' }
          ],
          scale: [
            { message: '请选择病害标度', trigger: 'change' }
          ],
        //   qualitativedescription: [
        //     { message: '请选择工作状态', trigger: 'change' }
        //   ],
          quantitativedescription: [
            { min: 1, max: 200, message: '长度在 1 到 200 个字符', trigger: 'blur'}
          ],
          damagelocation: [
            { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur'}
          ],
          damagedescription: [
            { min: 1, max: 200, message: '长度在 1 到 200 个字符', trigger: 'blur'}
          ],
          inspector: [
            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur'}
          ]
         
        }
      };
    },
//      created(){
// 　　　　    //如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
//         //this.blockname = this.blocktypelist[0].typename;
//         //console.log(this.blockname + 'sd')
//     },
    mounted() {
          //this.getinfobykey();
          this.damageinfolist.testdate = this.addTime.createDate
                
    },
    //inject:['reload'],
    methods: {
        dataInit(data){
            if(data){
                this.damageinfolist = data;
                this.damageinfolist.testdate = this.addTime.createDate
                //console.log(this.addTime.createDate)
                console.log(this.damageinfolist);
            }
        },
        validataForm(formName) {
            console.log('sdsdsdsd')
            this.$refs[formName].validate((valid) => {
            if (valid) {
                const qs = require('qs');
                const prm = qs.stringify({type:'Info',data:JSON.stringify(this.damageinfolist),structure:this.GLOBAL.structure})
                 console.log(prm)
                 this.$axios.post(this.api.saveAddDamageDataInfo,prm).then(response => {
        //            // this.szgjbhlist = response
                    const result = JSON.parse(response)
                    console.log(result)
                   if(result.msg != '操作成功'){
                            this.$message({
                            message: '传感器信息保存失败',
                            center: true
                    });
                    }else{
                       this.damageinfolist = {}
                       this.$message({
                           
                            message: '传感器信息保存成功',
                            type: 'success',
                            center: true
                        });
                        this.closeDialog()
                    }
                    
                 })
                 .catch(err => {
	
                 })
             } else {
                this.$message({
                    message: '请完善传感器基本信息',
                    center: true
                    });
                return false;
                }
            });
        },
        onSubmit(formName){
            console.log('zi')
             
        },
        UploadUrl(){
            console.log('upload')
        },
        upStart() {
            //创建input
            const upload = document.createElement("input");
            //设置type为file
            upload.type = "file";
            //类型
            upload.accept = "image/png, image/jpeg";
            //添加onchange事件
            upload.onchange = this.setFile;
            //模拟点击
            upload.click();
        },
        setFile(e) {
            //获取文件
            const file = e.path[0].files[0];
            console.log(e.target.files[0])
            console.log(file)
            //将其放入formdata中方便上传
            const formData = new FormData();
            formData.append("imgFile", file);
            console.log(formData)
            const ImgUrl = window.URL.createObjectURL(file);
            //构建Image对象方便获取其宽高
            const img = new Image();
            img.src = ImgUrl;
            console.log(ImgUrl)
            img.onload = () => {
                //只有在图片完成加载的时候才能拿到图片的宽高
                this.userDetail.upAva.imgSize = img.width;
            };
            this.userDetail.upAva.url = ImgUrl;
        },
      
        handleAvatarSuccess(res, file) {
            console.log('shangchuanchenggong')
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
      
         }
  }
</script>
<style>
.abow_dialog {
    display: flex;
    justify-content: center;
    align-items: Center;
    overflow: hidden;}
.el-dialog {
    margin: 0px auto !important;
    height: 78%;
    overflow: hidden;}
.el-dialog__body {
    /* position: absolute;
    left: 40;
    top: 44px;
    bottom: 0;
    right: 40;
    padding: 60;
    z-index: 1;
    overflow: hidden;
    overflow-y: auto; */
    height: 82%;
  overflow: auto;
}
.el-dialog-div {
  height: 78%;
  overflow: auto;
}
/* .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{margin-bottom:4px;}    */
.dialog-footer{position:relative;margin-right:0;margin-bottom:0}
.el-input__inner{ padding: 0 8px;}
input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type="number"]{
        -moz-appearance: textfield;
    }
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
  .avatar {
    width: 120px;
    height: 120px;
    display: block;
  }
</style>