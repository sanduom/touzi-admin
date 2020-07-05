<template>
  <div class="fillcontain">
    <div class="tabContainer" ref="tabContainer">
      <div style="display:flex;height:80px">
        <div style="float:left;width:30%;margin-top:20px">
          商品名称:
          <el-select v-model="productName" clearable size="mini" placeholder="请选择物品名称">
            <el-option
              v-for="(item,index) in articleList"
              :key="index"
              :label="item.value"
              :value="item.key"
            ></el-option>
          </el-select>
          <!-- <el-input v-model="productName" placeholder="请输入商品名称" style="width:60%;margin-left:10px" label="商品名称" size="small"></el-input> -->
        </div>
        <div style="float:right;width:30%;margin-top:20px">
          经办人:
          <!-- <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>-->
          <el-input v-model="createUser" clearable placeholder="请输入经办人" style="width:50%"></el-input>
        </div>
        <div style="float:left;width:30%;margin-top:20px">
          日期
          <el-date-picker
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            v-model="QuerydDate"
            type="date"
            placeholder="选择日期"
            @change="changeDate"
          ></el-date-picker>
        </div>
        <div style="float:left;width:10%;margin-top:20px">
          <el-button type="primary" @click="QueryStockData">查询</el-button>
        </div>
      </div>

      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label" @click="toggleTabs('eastChina')">
            <icon-svg icon-class="icondashboard" />物品库存清单
          </span>
          <enter-Table :toggleData="toggleData" :tableDataQuery="tableDataQuery"></enter-Table>
        </el-tab-pane>
      </el-tabs>
      <pagination :pageTotal="pageTotal" @handleCurrentChange="handleCurrentChange"></pagination>
    </div>
  </div>
</template>

<script>
// import chinaTabsTable from '/components/chinaTabsTable'
import chinaTabsTable from "../fundList/components/chinaTabsTable";
import enterTable from "../fundList/components/queryEnterTable";
// import data from './data/chinaTabs.json';
import { articleOfSelect, queryEnter, queryOut } from "@/api/user";
import data from "../fundList/data/chinaTabs.json";
import Pagination from "@/components/pagination";

export default {
  data() {
    return {
      createUser: "",
      tableDataQuery: [],
      toggleData: "",
      pageTotal: 0,
      value: "",
      QuerydDate: "",
      productName: "",
      articleList: [],
      options: [
        {
          value: "1",
          label: "零件"
        },
        {
          value: "2",
          label: "半成品"
        },
        {
          value: "3",
          label: "成品"
        }
      ]
    };
  },
  components: {
    chinaTabsTable,
    enterTable,
    Pagination
  },
  created() {
    articleOfSelect().then(res => {
      this.articleList = res.data;
    });
    let data = {
      pageNum: "1",
      pageSize: "10"
    };
    queryEnter(data).then(res => {
      console.log(res);
      this.tableDataQuery = res.data.list;
      this.pageTotal = res.data.total;
    });
  },
  mounted() {
    //  this.setTabHeight();
    //  window.onresize = () => {
    //     this.setTabHeight();
    //  }
    this.toggleTabs("eastChina");
  },
  methods: {
    changeDate() {
      if (this.QuerydDate) {
        return;
      } else {
        this.QuerydDate = "";
      }
    },
    handleCurrentChange(page) {
      let data = {
        articleName: this.productName,
        articleType: this.value,
        currentDate: this.QuerydDate,
        pageNum: page + "",
        pageSize: "10"
      };
      queryEnter(data).then(res => {
        console.log(res);
        this.tableDataQuery = res.data.list;
        this.pageTotal = res.data.total;
      });
    },
    QueryStockData() {
      console.log(this.QuerydDate);
      let data = {
        articleId: this.productName,
        createUser: this.createUser,
        createDate: this.QuerydDate,
        pageNum: "1",
        pageSize: "10"
      };
      queryEnter(data).then(res => {
        console.log(res);
        this.tableDataQuery = res.data.list;
        this.pageTotal = res.data.total;
      });
    },
    setTabHeight() {
      this.$nextTick(() => {
        this.$refs.tabContainer.style.height =
          document.body.clientHeight - 160 + "px";
      });
    },
    toggleTabs(item) {
      this.toggleData = item;
    }
  }
};
</script>

<style lang="less" scoped>
</style>


