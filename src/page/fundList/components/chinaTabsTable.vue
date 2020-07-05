<template>
  <div class="chinaTabsTable">
    <el-table :data="tableDataQuery" style="width: 100%" align="center">
      <el-table-column prop="ID" label="序号" align="center" width="80">
        <template slot-scope="scope">{{scope.$index+1}}</template>
      </el-table-column>
      <el-table-column prop="articleName" label="商品名称" align="center" width="140"></el-table-column>
      <el-table-column prop="supplier" label="供应商" align="center" width="120" sortable>
        <!-- <template slot-scope="scope">
          <span style="color:#CC0033">{{ scope.row.orderMoney }}</span>
        </template>-->
      </el-table-column>
      <el-table-column prop="id" label="物品编号" align="center" width="120" sortable>
        <!-- <template slot-scope="scope">
          <span style="color:#00d053;">+{{ scope.row.incomeMoney }}</span>
        </template>-->
      </el-table-column>
      <el-table-column prop="articleNum" label="库存数量" align="center" width="120">
        <!-- <template slot-scope="scope">
          <el-tag type="info" close-transition>{{scope.row.payType}}</el-tag>
        </template>-->
      </el-table-column>
      <el-table-column prop="createTime" label="日期" align="center" width="160"></el-table-column>
      <el-table-column prop="articleType" label="分类" align="center" width="120"></el-table-column>

      <el-table-column prop="remark" label="备注" align="left">
        <!-- <template slot-scope="scope">
          <span style="color:#3366CC">{{scope.row.remarks}}</span>
        </template>-->
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import data from "../data/chinaTabs.json";
import { articleOfSelect, queryEnter, queryStock } from "@/api/user";

export default {
  data() {
    return {
      tableData: [],
      tableHeight: 0
    };
  },
  created() {},
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
