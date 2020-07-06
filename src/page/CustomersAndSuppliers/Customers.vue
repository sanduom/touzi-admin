<template>
  <div class="fillcontain" ref="fillcontain">
    <div class="info_container" ref="info_container">
      <el-row class="info_row row" :gutter="10">
        <el-col :span="12">
          <div class="area">
            <p class="title">供应商信息登记</p>
            <el-form
              class="form"
              :model="infoForm"
              :rules="infoRules"
              ref="infoForm"
              label-width="100px"
            >
              <el-form-item label="供应商名称" prop="goodsName">
                <el-input v-model="infoForm.goodsName" size="mini" placeholder="请输入供应商名称"></el-input>
              </el-form-item>
              <el-form-item label="联系人" prop="supplier">
                <el-input v-model="infoForm.supplier" size="mini" placeholder="请输入联系人"></el-input>
              </el-form-item>
              <el-form-item label="地址" prop="address">
                <el-input v-model="infoForm.address" size="mini" placeholder="请输入地址"></el-input>
              </el-form-item>
              <el-form-item label="联系人电话" prop="supplierPhoneNumber">
                <el-input v-model="infoForm.supplierPhoneNumber" size="mini" placeholder="请输入联系人电话"></el-input>
              </el-form-item>
              <el-form-item label="开户银行" prop="OpenBank">
                <el-input v-model="infoForm.OpenBank" size="mini" placeholder="请输入开户银行"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('infoForm')">提交</el-button>
                <el-button @click="resetForm('infoForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>

        <el-col :span="12">
          <div class="area">
            <div class="pwdarea">
              <p class="title">客户信息登记</p>
              <el-form
                class="form"
                :model="pwdForm"
                :rules="pwdRules"
                ref="pwdForm"
                label-width="100px"
              >
                <el-form-item label="客户名称" prop="goodsName">
                  <el-input v-model="pwdForm.goodsName" size="mini" placeholder="请输入客户名称"></el-input>
                </el-form-item>
                <el-form-item label="联系人" prop="goodsQuantity">
                  <el-input v-model="pwdForm.goodsQuantity" size="mini" placeholder="请输入联系人"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" prop="operator">
                  <el-input v-model="pwdForm.operator" size="mini" placeholder="请输入联系电话"></el-input>
                </el-form-item>
                <el-form-item label="地址" prop="enterPosition">
                  <el-input v-model="pwdForm.enterPosition" size="mini" placeholder="请输入地址"></el-input>
                </el-form-item>
                <el-form-item label="开户银行" prop="enterTime">
                  <el-input v-model="pwdForm.enterTime" size="mini" placeholder="请输入开户银行"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('pwdForm')">提交</el-button>
                  <el-button @click="resetForm('pwdForm')">重置</el-button>
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
  inputCustomerOne,
  inputCustomerZero,
  inputEnterArticle,
  inputOutArticle,
  articleOfSelect
} from "@/api/user";

export default {
  data() {
    return {
      articleIdList: [],
      infoForm: {
        goodsName: "",
        supplier: "",
        address: "",
        supplierPhoneNumber: "",
        OpenBank: ""
      },
      pwdForm: {
        goodsName: "",
        goodsQuantity: "",
        operator: "",
        enterPosition: "",
        enterTime: "",
        unitPrice: "",
        totalPrice: "",
        remarks: ""
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
        totalPrice: ""
      },
      infoRules: {
        goodsName: [
          {
            required: true,
            message: "请输入物品名称",
            trigger: "blur"
          }
        ],
        supplier: [
          { required: true, message: "请输入供应商", trigger: "blur" }
          // { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
        ],
        supplierPhoneNumber: [
          { required: true, message: "请输入联系人电话", trigger: "blur" }
        ],
        address: [{ required: true, message: "请输入地址", trigger: "blur" }],
        OpenBank: [
          { required: true, message: "请输入开户银行", trigger: "blur" }
        ]
      },
      pwdRules: {
        goodsName: [
          {
            required: true,
            message: "请输入客户名称",
            trigger: "blur"
          }
        ],
        goodsQuantity: [
          {
            required: true,
            message: "请输入联系人",
            trigger: "blur"
          }
        ],
        operator: [
          { required: true, message: "请输入联系电话", trigger: "blur" }
        ],
        enterPosition: [
          {
            required: true,
            message: "请输入地址",
            trigger: "blur"
          }
        ],
        enterTime: [
          {
            required: true,
            message: "请输入开户银行",
            trigger: "blur"
          }
        ],
        goodsName: [
          {
            required: true,
            message: "请输入物品名称",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    articleOfSelect().then(res => {
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
        message: message
      });
    },
    showUsername() {
      let userinfo = mutils.getStore("userinfo");
      this.infoForm.username = userinfo.username;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (formName == "pwdForm") {
            let data = {
              name: "",
              cardBank: "",
              customerType: "1",
              phone: "",
              contacts: "",
              address: ""
            };
            data.name = this.pwdForm.goodsName + "";
            data.contacts = this.pwdForm.goodsQuantity;
            data.phone = this.pwdForm.operator;
            data.address = this.pwdForm.enterPosition;
            data.cardBank = this.pwdForm.enterTime;
            inputCustomerZero(data).then(res => {
              if (res.code == "0000") {
                this.$refs[formName].resetFields();
                this.$message({
                  type: "success",
                  message: "操作成功，商品数量录入完成"
                });
              }
            });
            return;
          } else if (formName == "infoForm") {
            let data = {
              name: "",
              cardBank: "",
              customerType: "0",
              phone: "",
              contacts: "",
              address: ""
            };
            data.name = this.infoForm.goodsName;
            data.contacts = this.infoForm.supplier;
            data.address = this.infoForm.address;
            data.phone = this.infoForm.supplierPhoneNumber;
            data.cardBank = this.infoForm.OpenBank;
            inputCustomerOne(data).then(res => {
              if (res.code == "0000") {
                this.$refs[formName].resetFields();
                this.$message({
                  type: "success",
                  message: "操作成功，商品数量录入完成"
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
              createTime: ""
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
            inputOutArticle(data).then(res => {
              if (res.code == "0000") {
                this.$refs[formName].resetFields();
                this.$message({
                  type: "success",
                  message: "操作成功，商品数量录入完成"
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
    }
  }
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


