<template>
  <div class="fillcontain" ref="fillcontain">
    <div class="info_container" ref="info_container">
      <el-row class="info_row row" :gutter="10">
        <el-col :span="8">
          <div class="area">
            <p class="title">入库物品种类登记</p>
            <el-form
              class="form"
              :model="infoForm"
              :rules="infoRules"
              ref="infoForm"
              label-width="80px"
            >
              <el-form-item label="物品名称" prop="goodsName">
                <el-input v-model="infoForm.goodsName" size="mini" placeholder="请输入物品名称"></el-input>
              </el-form-item>
              <el-form-item label="供应商" prop="supplier">
                <!-- <el-input v-model="infoForm.supplier" size="mini" placeholder="请输入供应商"></el-input> -->
                <el-select v-model="infoForm.supplier">
                  <el-option
                    v-for="item in itemList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="物品类别" prop="goodsType">
                <el-select v-model="infoForm.goodsType" size="mini" placeholder="请选择物品类别">
                  <el-option label="零件" value="1"></el-option>
                  <el-option label="半成品" value="2"></el-option>
                  <el-option label="成品" value="3"></el-option>
                  <el-option label="其他" value="4"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="物品信息" prop="goodsInfo">
                <el-input v-model="infoForm.goodsInfo" size="mini" placeholder="请输入物品信息"></el-input>
              </el-form-item>
              <el-form-item label="数量单位" prop="goodsUnit">
                <el-input v-model="infoForm.goodsUnit" size="mini" placeholder="请输入物品数量单位"></el-input>
              </el-form-item>
              <el-form-item label="物品编号" prop="goodsNo">
                <el-input v-model="infoForm.goodsNo" size="mini" placeholder="请输入物品编号"></el-input>
              </el-form-item>
              <!-- <el-form-item label="物品图片" prop="productionImg">
                        <el-input v-model="infoForm.productionImg" size="mini" type="file" ></el-input>
              </el-form-item>-->
              <el-form-item>
                <el-button type="primary" @click="submitForm('infoForm')">提交</el-button>
                <el-button @click="resetForm('infoForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="area">
            <div class="pwdarea">
              <p class="title">入库物品数量登记</p>
              <el-form
                class="form"
                :model="pwdForm"
                :rules="pwdRules"
                ref="pwdForm"
                label-width="100px"
              >
                <el-form-item label="物品名称" prop="goodsName">
                  <!-- <el-input v-model="pwdForm.goodsName"  size="mini" placeholder="请输入物品名称"></el-input> -->
                  <el-select v-model="pwdForm.goodsName" size="mini" placeholder="请输入物品名称">
                    <el-option
                      v-for="(item,index) in articleIdList"
                      :key="index"
                      :label="item.value"
                      :value="item.key"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="入库数量" prop="goodsQuantity">
                  <el-input v-model="pwdForm.goodsQuantity" size="mini" placeholder="请输入物品入库数量"></el-input>
                </el-form-item>
                <el-form-item label="经办人" prop="operator">
                  <el-input v-model="pwdForm.operator" size="mini" placeholder="请输入经办人"></el-input>
                </el-form-item>
                <el-form-item label="入库位置" prop="enterPosition">
                  <el-select v-model="pwdForm.enterPosition" size="mini" placeholder="请选择入库位置">
                    <el-option label="楼上货架" value="1"></el-option>
                    <el-option label="楼下货架" value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="入库时间" prop="enterTime">
                  <el-date-picker
                    v-model="pwdForm.enterTime"
                    format="yyyy-MM-dd HH:mm:ss"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    type="datetime"
                    placeholder="请选择入库日期"
                  ></el-date-picker>
                </el-form-item>
                <el-form-item label="单价" prop="unitPrice">
                  <el-input v-model="pwdForm.unitPrice" size="mini" placeholder="请输入单价"></el-input>
                </el-form-item>
                <el-form-item label="总价" prop="totalPrice">
                  <el-input v-model="pwdForm.totalPrice" size="mini" placeholder="请输入总价"></el-input>
                </el-form-item>
                <el-form-item label="备注" prop="remarks">
                  <el-input
                    type="textarea"
                    v-model="pwdForm.remarks"
                    resize="none"
                    size="mini"
                    placeholder="请输入备注"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('pwdForm')">提交</el-button>
                  <el-button @click="resetForm('pwdForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="area">
            <div class="phonearea">
              <p class="title">物品出库数量登记</p>
              <el-form
                class="form"
                :model="phoneForm"
                :rules="phoneRules"
                ref="phoneForm"
                label-width="110px"
              >
                <el-form-item label="物品名称" prop="goodsName">
                  <!-- <el-input v-model="phoneForm.goodsName"  size="mini" placeholder="请输入物品名称"></el-input> -->
                  <el-select v-model="phoneForm.goodsName" size="mini" placeholder="请输入物品名称">
                    <el-option
                      v-for="(item,index) in articleIdList"
                      :key="index"
                      :label="item.value"
                      :value="item.key"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="出库数量" prop="goodsQuantity">
                  <el-input v-model="phoneForm.goodsQuantity" size="mini" placeholder="请输入物品入库数量"></el-input>
                </el-form-item>
                <el-form-item label="经办人" prop="operator">
                  <el-input v-model="phoneForm.operator" size="mini" placeholder="请输入经办人"></el-input>
                </el-form-item>
                <el-form-item label="出库位置" prop="outPosition">
                  <el-select v-model="phoneForm.outPosition" size="mini" placeholder="请选择入库位置">
                    <el-option label="楼上货架" value="1"></el-option>
                    <el-option label="楼下货架" value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="出库用途" prop="outUsage">
                  <el-select v-model="phoneForm.outUsage" size="mini" placeholder="请选择出库用途">
                    <el-option label="自用" value="1"></el-option>
                    <el-option label="出售" value="2"></el-option>
                    <el-option label="调货" value="3"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="物品类别" prop="goodsKind">
                  <el-select v-model="phoneForm.goodsKind" size="mini" placeholder="请选择物品类别">
                    <el-option label="零件" value="1"></el-option>
                    <el-option label="半成品" value="2"></el-option>
                    <el-option label="成品" value="3"></el-option>
                    <el-option label="其他" value="4"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="结算方式" prop="settleType">
                  <el-select v-model="phoneForm.settleType" size="mini" placeholder="请选择物品类别">
                    <el-option label="月结" value="1"></el-option>
                    <el-option label="现金" value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="出库时间" prop="outTime">
                  <el-date-picker
                    format="yyyy-MM-dd HH:mm:ss"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    v-model="phoneForm.outTime"
                    type="datetime"
                    placeholder="请选择出库日期"
                  ></el-date-picker>
                </el-form-item>
                <el-form-item label="单价" prop="unitPrice">
                  <el-input v-model="phoneForm.unitPrice" size="mini" placeholder="请输入单价"></el-input>
                </el-form-item>
                <el-form-item label="总价" prop="totalPrice">
                  <el-input v-model="phoneForm.totalPrice" size="mini" placeholder="请输入总价"></el-input>
                </el-form-item>
                <el-form-item label="备注" prop="remarks">
                  <el-input
                    type="textarea"
                    v-model="phoneForm.remarks"
                    resize="none"
                    size="mini"
                    placeholder="请输入备注"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('phoneForm')">提交</el-button>
                  <el-button @click="resetForm('phoneForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import * as mutils from "@/utils/mUtils";
import { Message, MessageBox } from "element-ui";
import {
  inputArticle,
  inputEnterArticle,
  inputOutArticle,
  articleOfSelect,
  queryCustomerType,
} from "@/api/user";

export default {
  data() {
    return {
      articleIdList: [],
      infoForm: {
        goodsName: "",
        supplier: "",
        goodsType: "",
        goodsInfo: "",
        goodsNo: "",
        goodsUnit: "",
        productionImg: "",
      },
      pwdForm: {
        goodsName: "",
        goodsQuantity: "",
        operator: "",
        enterPosition: "",
        enterTime: "",
        unitPrice: "",
        totalPrice: "",
        remarks: "",
      },
      phoneForm: {
        goodsName: "",
        goodsQuantity: "",
        operator: "",
        outPosition: "",
        outTime: "",
        outUsage: "",
        goodsKind: "",
        unitPrice: "",
        totalPrice: "",
      },
      infoRules: {
        goodsName: [
          {
            required: true,
            message: "请输入物品名称",
            trigger: "blur",
          },
        ],
        goodsUnit: [
          {
            required: true,
            message: "请输入物品数量",
            trigger: "blur",
          },
        ],
        supplier: [
          { required: true, message: "请输入供应商", trigger: "blur" },
          // { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
        ],
        goodsType: [
          {
            required: true,
            message: "请选择物品类别",
            trigger: "change",
          },
        ],
        goodsInfo: [
          {
            required: true,
            message: "请选择物品信息",
            trigger: "blur",
          },
        ],
        goodsNo: [
          {
            required: true,
            message: "请输入物品编号",
            trigger: "blur",
          },
        ],
      },
      pwdRules: {
        goodsName: [
          {
            required: true,
            message: "请输入物品名称",
            trigger: "blur",
          },
        ],
        goodsQuantity: [
          {
            required: true,
            message: "请输入物品数量",
            trigger: "blur",
          },
        ],
        operator: [
          { required: true, message: "请输入经办人", trigger: "blur" },
        ],
        enterPosition: [
          {
            required: true,
            message: "请选择入库位置",
            trigger: "blur",
          },
        ],
        enterTime: [
          {
            required: true,
            message: "请选择入库时间",
            trigger: "blur",
          },
        ],
        goodsName: [
          {
            required: true,
            message: "请输入物品名称",
            trigger: "blur",
          },
        ],
      },
      phoneRules: {
        goodsName: [
          {
            required: true,
            message: "请输入物品名称",
            trigger: "blur",
          },
        ],
        goodsQuantity: [
          {
            required: true,
            message: "请输入物品数量",
            trigger: "blur",
          },
        ],
        operator: [
          { required: true, message: "请输入经办人", trigger: "blur" },
        ],
        outPosition: [
          {
            required: true,
            message: "请选择出库位置",
            trigger: "blur",
          },
        ],
        outTime: [
          {
            required: true,
            message: "请选择出库时间",
            trigger: "blur",
          },
        ],
        outUsage: [
          {
            required: true,
            message: "请选择出库用途",
            trigger: "blur",
          },
        ],
        goodsKind: [
          {
            required: true,
            message: "请输入物品类别",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    let Type = {
      customerType: "0", //查询供应商信息的type为0
      pageNum: "1",
      pageSize: "10",
    };
    queryCustomerType(Type).then((res) => {
      this.itemList = res.data.list;
      this.pageTotal = res.data.total;
    });
    articleOfSelect().then((res) => {
      this.articleIdList = res.data;
    });
  },
  mounted() {
    // mutils.setContentHeight(this,this.$refs.fillcontain,170);
  },
  methods: {
    showMessage(type, message) {
      this.$message({
        type: type,
        message: message,
      });
    },
    showUsername() {
      let userinfo = mutils.getStore("userinfo");
      this.infoForm.username = userinfo.username;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (formName == "pwdForm") {
            let data = {
              articleId: "",
              articleCount: "",
              articleType: "",
              position: "",
              remark: "",
              price: "",
              totalPrice: "",
              createUser: "",
              createTime: "",
            };
            console.log(this.pwdForm.enterTime);
            data.articleId = this.pwdForm.goodsName + "";
            data.articleCount = this.pwdForm.goodsQuantity;
            data.createUser = this.pwdForm.operator;
            data.position = this.pwdForm.enterPosition;
            data.createTime = this.pwdForm.enterTime;
            data.price = this.pwdForm.unitPrice;
            data.totalPrice = this.pwdForm.totalPrice;
            data.remark = this.pwdForm.remarks;
            data.articleType = "1";
            inputEnterArticle(data).then((res) => {
              if (res.code == "0000") {
                this.$refs[formName].resetFields();
                this.$message({
                  type: "success",
                  message: "操作成功，商品数量录入完成",
                });
              }
            });
            return;
          } else if (formName == "infoForm") {
            let data = {
              articleName: "",
              supplier: "",
              articleType: "",
              articleInfo: "",
              articleNo: "",
            };
            data.articleName = this.infoForm.goodsName;
            data.supplier = this.infoForm.supplier;
            data.articleType = this.infoForm.goodsType;
            data.articleInfo = this.infoForm.goodsInfo;
            data.articleNo = this.infoForm.goodsNo;
            data.unit = this.infoForm.goodsUnit;
            inputArticle(data).then((res) => {
              if (res.code == "0000") {
                this.$refs[formName].resetFields();
                this.$message({
                  type: "success",
                  message: "操作成功，商品数量录入完成",
                });
              }
            });
            return;
          } else if (formName == "phoneForm") {
            let data = {
              articleId: "",
              articleCount: "",
              articleType: "",
              position: "",
              outType: "",
              price: "",
              totalPrice: "",
              createUser: "",
              createTime: "",
            };
            data.articleId = this.phoneForm.goodsName;
            data.articleCount = this.phoneForm.goodsQuantity;
            data.articleType = this.phoneForm.goodsKind;
            data.position = this.phoneForm.outPosition;
            data.outType = this.phoneForm.outUsage;
            data.price = this.phoneForm.unitPrice;
            data.totalPrice = this.phoneForm.totalPrice;
            data.createUser = this.phoneForm.operator;
            data.createTime = this.phoneForm.outTime;
            inputOutArticle(data).then((res) => {
              if (res.code == "0000") {
                this.$refs[formName].resetFields();
                this.$message({
                  type: "success",
                  message: "操作成功，商品数量录入完成",
                });
              }
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.info_container {
  padding: 20px;
  background: #fff;
  box-sizing: border-box;
  overflow: auto;
}
.title {
  text-align: center;
  width: 100%;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  background-color: #3bc5ff;
  border: 1px solid #3bc5ff;
  color: white;
  display: block;
}
.info_row {
  .area {
    border: 1px solid #dfdfdf;
    height: 100%;
    font-size: 14px;
    padding: 10px;
    .form {
      width: 90%;
      margin-top: 20px;
    }
  }
}
</style>


