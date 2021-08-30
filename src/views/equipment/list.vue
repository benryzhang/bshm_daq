<template>
  <div id="sensorinfo">

    <!-- 右侧卡片区域 -->
    <!-- 用户列表卡片区 -->
    <el-card class="box-card">
      <el-form size="mini" :inline="true" :model="queryMap" class="demo-form-inline">
        <!-- <el-form-item label="传感器类型">
          <el-input v-model="queryMap.username" placeholder="请输入传感器类型查询"></el-input>
        </el-form-item>
        <el-form-item label="传感器名称">
          <el-input v-model="queryMap.ip" placeholder="请输入传感器名称查询"></el-input>
        </el-form-item>
        <el-form-item label="信息显示">
          <el-input v-model="queryMap.location" placeholder="请输入信息显示查询"></el-input>
        </el-form-item> -->
        <!-- <el-form-item label="传感器类型查询">
        <el-select clearable
            @change="searchinfobytype"
            @clear="searchinfobytype"
            v-model="queryMap.sensortype"
            placeholder="请选择传感器类型">
          <el-option
            v-for="sensortypecode in sensortypelist"
              :label="sensortypecode.text"
              :key="sensortypecode.id"
              :value="sensortypecode.id"
              >
              <span style="float: left">{{ sensortypecode.text }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ sensortypecode.id }}</span>
          </el-option>
        </el-select>
        </el-form-item> -->
        <el-form-item>
          <el-button  icon="el-icon-plus" @click="addPannel" type="primary">添加</el-button>
        </el-form-item>
        <el-form-item>
          <el-button  icon="el-icon-refresh" @click="getcgqbytandp('refresh')" type="primary">刷新</el-button>
        </el-form-item>
        <!-- 
        <el-form-item>
          <el-button  
            icon="el-icon-plus"
            type="primary" 
            @click="addoredit('')">添加</el-button>
        </el-form-item>
        <el-form-item>
          <download-excel
              class = "export-excel-wrapper"
              :data = "itemList"
              :fields = "json_fields"
              name = "传感器信息.xls"> -->
              <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
              <!-- <el-button icon="el-icon-download" type="primary">下载</el-button>
        </download-excel> -->
          <!-- <el-button  icon="el-icon-download" @click="search" type="primary">下载</el-button> -->
        <!-- </el-form-item>
        <el-form-item>
          <el-button  icon="el-icon-printer" @click="search" type="primary">打印</el-button>
        </el-form-item> -->
        <!-- <el-form-item>
          <el-button @click="deleteFileOrDirectory(sels)" icon="el-icon-delete"  :disabled="this.sels.length === 0">批量</el-button>
        </el-form-item> -->
      </el-form>
      <!-- 表格区域 -->
      <template>
        <el-table 
        id="typecode"
          border
          stripe
          align="center"
          size="mini"
          :data="itemList"
          style="width: 100%;"
          :height="Height"
          max-height="872"
          >
          <el-table-column :index="indexMethod" type="index" fixed label="序号" width="50" align="center"></el-table-column>
          <el-table-column prop="sensortypecode" label="设备编号" fixed sortable width="200" align="center"  ></el-table-column>
          <el-table-column prop="sensorcode" label="设备名称" width="200" align="center"></el-table-column>
          <el-table-column prop="sensorname" label="设备通道数" width="200" align="center"></el-table-column>
          <el-table-column prop="monitpara" label="采样周期（s）" width="" align="center"></el-table-column>
          <el-table-column prop="monitpara" label="采样频率" width="" align="center"></el-table-column>
          <el-table-column prop="monitpara" label="工作模式" width="" align="center"></el-table-column>
          <el-table-column prop="monitpara" label="采集站" width="" align="center"></el-table-column>
          
          <el-table-column
      fixed="right"
      align="center"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button  @click="edit(scope.row)" type="text" size="small" >编辑</el-button>
        <!-- <el-button  @click="addoreditchannel(scope.row)" type="text" size="small" >通道</el-button> -->
        <el-button type="text" size="small"  @click="del(scope.$index,scope.row)">删除</el-button>
      </template>
    </el-table-column>
          <!-- <el-table-column label="操作" width="100px;">
            <template slot-scope="scope">
              <el-button
               v-hasPermission="'loginLog:delete'"
                type="text"
                size="mini"
                icon="el-icon-delete"
                @click="del(scope.row.id)"
              >删除</el-button>
            </template>
          </el-table-column> -->
        </el-table>
      </template>
      <!-- 分页 -->
      <el-pagination
        style="margin-top:10px;"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="this.queryMap.pageNumber"
        :page-sizes="[ 10, 20, 50, 100]"
        :page-size="this.queryMap.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>
     <!--弹框组件开始-----------------------start-->
      <transition name="dialog-fade">
<el-dialog  :title="dialogTitle" :visible.sync="dialogFormVisible" append-to-body width="60%" class="abow_dialog"  v-if="dialogFormVisible" @close="closeDialog('damageinfolist')">
    <edit-page
      v-if="dialogFormVisible"
      ref="edit"
      :dialog-title="dialogTitle"
      :item-info="tableItem"
      @closeDialog="closeDialog"
    ></edit-page>
    <!-- 确定按钮 -->
        <span slot="footer" class="dialog-footer">
          <el-button @click="closeDialog">取 消</el-button>
          <el-button type="primary" @click="onSubmit('damageinfolist')" >保 存</el-button>
        </span>
    </el-dialog>
    
</transition>
    <!-- <el-dialog  :visible.sync="dialogFormVisible" append-to-body style="width:100%"> -->
    <!-- <equipmentEdit-page v-if="dialogFormVisible" ref="equipmentEdit"></equipmentEdit-page> -->
    <!-- <jcxtChannel-page v-if="dialogChannel" ref="jcxtChannel"></jcxtChannel-page> -->
    
  </div>
  
</template>

<script>
import axios from "axios";
//import equipmentEdit from './views/equipmentEdit'
// import jcxtChannel from './jcxtChannel'

//import jcxtAddorEdit from "@/jcxtAddorEdit.vue"

export default {
  data() {
    return {
      sels: [], //选中的值显示
      total: 0, //总共多少条数据
      itemList: [],
      Height:0,
      //filterList: [],
      btnLoading: false,
      btnDisabled: false,
      addDialogVisible: false, //添加弹框是否显示
      structure:{structure:this.GLOBAL.structure},
      sensortypelist: [],
      //queryMap: { pageNum: 1, pageSize: 10, location: "" } 
      queryMap:{monitparatype:'',monitpara:'',sensortype:'',pageNumber:1,pageSize:20,structure:this.GLOBAL.structure },//查询对象
        components: {
            //edit
    //     jcxtChannel
        },
      dialogFormVisible: false,
      dialogChannel:false,
      tableItem: {
        testdate:'',
        blocktype: '',
        componentid:'',
        damagetype: '',
        scale: '',
        qualitativedescription: '',
        quantitativedescription: '',
        damagelocation: '',
        damagedescription: '',
        inspector: '',
        damagepicture:''
      },
      json_fields: {
		          "类型": "sensortypecode",
		          "编号": "sensorcode",
		          "名称": "sensorname", 
		          "监测参数": "monitpara", 
		          "具体位置": "position",
		          "工作温度": "worktemp",
		          "抗潮湿指标": "antimois", 
              "抗干扰能力": "antiinterference",
              "抗冲振要求": "impactvibration",
              "方向": "orientation",
              "电源要求": "powerreq",
              "寿命": "sensorlife",
              "工作状态": "sensorstatus"
            },
            json_meta: [
		          [
		            {
		              " key ": " charset ",
		              " value ": " utf- 8 "
		            }
		          ]
            ],
      //addRuleForm: {}, //添加表单数据
      //editRuleForm: {}, //修改表单数据

    };
  },
  mounted() {
          //this.getcgqbytandp();
          //this.getMapWarnType();
          //this.getallsensors();
          this.$nextTick(() => {
            this.Height = window.innerHeight - 240;
            //后面100一般是根据你上下导航栏的高度来减掉即可。
          })
          //this.$refs.dialog.open()
         // getfilterlist();
             
         },
  inject:['reload'],
  methods: {
    //搜索
    search() {
      // this.queryMap.pageNumber = 1;
      // this.getcgqbytandp();
      // this.filterHandler();
    },
    filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      
    // async getMapWarnType() {
    //   await this.$axios.get(this.api.getMapWarnType,{params:this.structure}).then(response => {
    //     const jsonb = response.replace(/type/g,'value')
    //     const jsonc =  JSON.parse(jsonb.replace(/name/g,'text'))
    //     let arr = []
    //     for(let i in jsonc){
    //       arr.push(jsonc[i])
    //     }
    //     this.filterList = jsonc
    //     //console.log(this.filterList)
    //   });  
    //   },
    //加载传感器信息列表
    async getcgqbytandp(re) {
      //this.handleCurrentChange('1');
      await this.$axios.get(this.api.getcgqbytandp,
        {
          params: this.queryMap
         },
      ).then(response => {
        if( re === 'refresh'){
            this.reload();
        }
         
        this.total = JSON.parse(response).total;
        //this.itemList = ''
        this.itemList = JSON.parse(response).rows;
        //console.log(this.itemList)
        //console.log(this.itemList)
        //var filtersList[];
        //  for (let i=0; i<this.itemList.length; i++){
        // //   //console.log(unique(this.itemList[i].sensortypecode));
        //    let filtersList = this.itemList[i].sensortypecode;
        //    console.log(filterlist);
        //    console.log(this.unique(filterlist));
        //    }
        //console.log(this.itemList[i].sensortypecode)()
      });

    },
    /**
     * 加载所有传感器用于按传感器信息查询
     */
    async getallsensors() {
      await this.$axios.get(this.api.getcgqlx,{params:this.GLOBAL.structure}).then(response => {
        //const sensortype = JSON.parse(response)
        this.sensortypelist = response
      });
    },
    /**
     * 搜索传感器信息by 类型
     */
    searchinfobytype() {
      this.queryMap.pageNumber = 1;
      this.getcgqbytandp();
    },
    editPannel(index, row) {
        this.dialogFormVisible = true;
        this.addOperate = false;
        this.dialogTitle = "编辑设备信息";
        this.$nextTick(()=>{
          this.$refs.detectionPanel.dataInit(row);
        });
    },
    addPannel(){
        this.dialogTitle = "添加设备信息";
        this.dialogFormVisible = true;
        this.addOperate = true;
    },

    eidt(row){
        ///let roleId = id;
        this.dialogFormVisible = true
        //if(JSON.stringify(row) != "{}"){
        //    alert('sd')
          //console.log(row.sensorcode)
        //   this.$axios.get(this.api.getinfobykey,{params:{datatype:"cgq",code:row.sensorcode,structure:this.GLOBAL.structure}}).then(response => {
        //     //const sensortype = JSON.parse(response)
        //     this.$refs.equipmentEdit.getinfobykey(JSON.parse(response))
            
        //     //this.sensorinfolist = response
        //     //console.log(this.sensorinfolist)
        //     this.$nextTick(()=>{
        //         this.$refs.equipmentEdit.init();
        //     })
          //});
        // }
        // else{

        // }
 
    },
    closeDialog() {
        
        //his.dialogFormVisible = false
        //this.$refs.damageinfolist.resetFields();
        //this.reload()
        //this.$refs["damageinfolist"].resetFields();
        this.dialogFormVisible = false;
        //this.$emit("closeDialog", flag);
    },
    // addoreditchannel(row){
    //     //let roleId = id;
    //     this.dialogChannel = true
    //     if(JSON.stringify(row) != "{}"){
    //       //console.log(row.sensorcode)
    //       this.$axios.get(this.api.getinfobykey,{params:{datatype:"cgq",code:row.sensorcode,structure:this.GLOBAL.structure}}).then(response => {
    //         //const sensortypecode = response.sensortypecode
    //         //console.log('jcxt传值')
    //         this.$refs.jcxtChannel.getinfobykey(response)
          
    //         //this.sensorinfolist = response
            
    //          this.$nextTick(()=>{
    //              this.$refs.jcxtChannel.init();
    //          })
    //       });
    //     }
    //     else{

    //     }
    // },
    //改变页码
    handleSizeChange(newSize) {
      this.queryMap.pageSize = newSize;
      this.getcgqbytandp();
    },
    //翻页
    handleCurrentChange(current) {
      this.queryMap.pageNumber = current;
      this.getcgqbytandp();
    },
 
    
    handleProgress(event, file, fileList) {
      this.loading = true;  //  上传时执行loading事件
    },
    indexMethod(index){
       return (this.queryMap.pageNumber-1)*this.queryMap.pageSize+index+1;
    },
    created () {
    let that = this
    let heightStyle = that.$refs.tableCot.offsetHeight
    that.Height = heightStyle
  }
  }
};
</script>
<style scoped>
.el-dialog {width:80%}
</style>
