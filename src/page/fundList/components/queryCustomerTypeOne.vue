<template>
  <div class="chinaTabsTable">
    <el-table :data="tableDataQuery" style="width: 100%" align="center">
      <el-table-column prop="ID" label="序号" align="center" width="80">
        <template slot-scope="scope">{{scope.$index+1}}</template>
      </el-table-column>
      <el-table-column prop="name" label="客户名称" align="center"></el-table-column>
      <el-table-column prop="contacts" label="联系人" align="center" sortable></el-table-column>
      <el-table-column prop="phone" label="联系电话" align="center" sortable>
        <!-- <template slot-scope="scope">
          <span style="color:#00d053;">+{{ scope.row.incomeMoney }}</span>
        </template>-->
      </el-table-column>
      <el-table-column prop="address" label="地址" align="center">
        <!-- <template slot-scope="scope">
          <el-tag type="info" close-transition>{{scope.row.payType}}</el-tag>
        </template>-->
      </el-table-column>
      <!-- <el-table-column prop="createTime" label="日期" align="center" width="160"></el-table-column>
      <el-table-column
        prop="articleType"
        label="分类"
        :formatter="formatterId"
        align="center"
        width="120"
      ></el-table-column>-->

      <el-table-column prop="cardBank" label="开户银行" align="left">
        <!-- <template slot-scope="scope">
          <span style="color:#3366CC">{{scope.row.remarks}}</span>
        </template>-->
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import data from "../data/chinaTabs.json";

export default {
  data() {
    return {
      tableData: [],
      tableHeight: 0,
    };
  },
  created() {},
  props: {
    toggleData: [String],
    tableDataQuery: [Array],
  },
  mounted() {
    this.setTableHeight();
    window.onresize = () => {
      this.setTableHeight();
    };
  },
  methods: {
    setTableHeight() {
      this.$nextTick(() => {
        this.tableHeight = document.body.clientHeight - 280;
      });
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
    },
  },
  watch: {
    // 监听属性的变化，可以接收参数;
    toggleData(v) {
      this.showTableData(v);
    },
  },
};
</script>

<style lang="less">
</style>
