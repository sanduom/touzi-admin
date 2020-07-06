<template>
  <div class="chinaTabsTable">
    <el-table :data="tableDataQuery" style="width: 100%" align="center">
      <el-table-column prop="ID" label="序号" align="center" width="80">
        <template slot-scope="scope">{{scope.$index+1}}</template>
      </el-table-column>
      <el-table-column
        prop="articleId"
        :formatter="formatterId"
        label="分类"
        align="center"
        width="140"
      ></el-table-column>
      <el-table-column prop="articleCount" label="数量" align="center" width="120" sortable></el-table-column>
      <el-table-column prop="articleName" label="名称" align="center" width="120" sortable>
        <!-- <template slot-scope="scope">
          <span style="color:#CC0033">{{ scope.row.orderMoney }}</span>
        </template>-->
      </el-table-column>
      <el-table-column prop="createTime" label="日期" align="center" width="160" sortable>
        <!-- <template slot-scope="scope">
          <span style="color:#00d053;">+{{ scope.row.incomeMoney }}</span>
        </template>-->
      </el-table-column>
      <el-table-column prop="createUser" label="经办人" align="center" width="120">
        <!-- <template slot-scope="scope">
          <el-tag type="info" close-transition>{{scope.row.payType}}</el-tag>
        </template>-->
      </el-table-column>
      <el-table-column
        prop="position"
        label="出库位置"
        :formatter="formatterPosition"
        align="center"
        width="120"
      ></el-table-column>
      <el-table-column
        prop="outType"
        :formatter="formatterOutType"
        label="出库类型"
        align="center"
        width="120"
      ></el-table-column>
      <el-table-column prop="price" label="单价" align="center" width="120"></el-table-column>
      <el-table-column prop="totalPrice" label="总价" align="center" width="120"></el-table-column>

      <el-table-column prop="remark" label="备注" align="left">
        <template slot-scope="scope">
          <span style="color:#3366CC">{{scope.row.remarks}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import data from "../data/chinaTabs.json";
import { articleOfSelect, queryOut } from "@/api/user";

export default {
  data() {
    return {
      tableData: [],
      tableHeight: 0
    };
  },
  created() {
    // let data = {
    //   pageNum: "1",
    //   pageSize: "10"
    // };
    // queryOut(data).then(res => {
    //   console.log(res);
    //   this.tableData = res.data.list;
    // });
  },
  props: {
    toggleData: [String],
    tableDataQuery: [Array]
  },
  mounted() {
    this.setTableHeight();
    window.onresize = () => {
      this.setTableHeight();
    };
  },
  methods: {
    formatterOutType(row, column) {
      switch (row.outType) {
        case "1":
          return "自用";
          break;
        case "2":
          return "出售";
          break;
        case "3":
          return "调货";
          break;
      }
    },
    formatterPosition(row, column) {
      console.log(row);
      switch (row.position) {
        case "1":
          return "楼上货架";
          break;
        case "2":
          return "楼下货架";
          break;
      }
    },
    formatterId(row, column) {
      switch (row.articleType) {
        case "1":
          return "零件";
          break;
        case "2":
          return "半成品";
          break;
        case "3":
          return "成品";
          break;
        case "4":
          return "其他";
          break;
      }
    },
    setTableHeight() {
      this.$nextTick(() => {
        this.tableHeight = document.body.clientHeight - 280;
      });
    },
    showTableData(item) {
      switch (item) {
        case "eastChina":
          this.tableData = data.china.eastChina;
          break;
        case "southChina":
          this.tableData = data.china.southChina;
          break;
        case "centralChina":
          this.tableData = data.china.centralChina;
          break;
        case "northChina":
          this.tableData = data.china.northChina;
          break;
        case "northwestChina":
          this.tableData = data.china.northwestChina;
          break;
        case "southwestChina":
          this.tableData = data.china.southwestChina;
          break;
        case "northeastChina":
          this.tableData = data.china.northeastChina;
          break;
        case "specialareaChina":
          this.tableData = data.china.specialareaChina;
          break;
      }
    }
  },
  watch: {
    // 监听属性的变化，可以接收参数;
    toggleData(v) {
      this.showTableData(v);
    }
  }
};
</script>

<style lang="less">
</style>
