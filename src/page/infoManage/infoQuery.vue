<template>
  <div class="fillcontain">
    <div class="tabContainer" ref="tabContainer">
      <div style="display:flex;height:80px">
        <!-- <audio src="../../statics/bye.mp3" type="audio/mpeg"></audio> -->
        <div style="float:left;width:30%;margin-top:20px">
          商品名称:
          <el-select v-model="productName" clearable size="mini" placeholder="请选择物品名称">
            <el-option
              v-for="(item,index) in articleList"
              :key="index"
              :label="item.value"
              :value="item.value"
            ></el-option>
          </el-select>
          <!-- <el-input v-model="productName" placeholder="请输入商品名称" style="width:60%;margin-left:10px" label="商品名称" size="small"></el-input> -->
        </div>
        <div style="float:right;width:30%;margin-top:20px">
          商品分类:
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div style="float:left;width:30%;margin-top:20px">
          日期
          <el-date-picker
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            v-model="QuerydDate"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </div>
        <div style="float:left;width:10%;margin-top:20px">
          <el-button type="primary" @click="QueryStockData">查询</el-button>
          <!-- <el-button type="primary" @click="openDialog">播放</el-button> -->
        </div>
      </div>

      <el-dialog title="播放" :visible.sync="dialogShow" width="30%" :before-close="handleClose">
        <span>正在播放提示音乐...</span>
        <span>点击确认按钮关闭音乐</span>
        <span slot="footer" class="dialog-footer">
          <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
          <el-button type="primary" @click="dialogVisible">确 定</el-button>
        </span>
      </el-dialog>

      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label" @click="toggleTabs('eastChina')">
            <icon-svg icon-class="icondashboard" />物品库存清单
          </span>
          <china-tabs-table :toggleData="toggleData" :tableDataQuery="tableDataQuery"></china-tabs-table>
        </el-tab-pane>
      </el-tabs>

      <pagination :pageTotal="pageTotal" @handleCurrentChange="handleCurrentChange"></pagination>
      <!-- <div class="pagination">
        <el-pagination
          v-if="pageTotal > 0"
          background
          :page-sizes="paginations.pageSizes"
          :page-size="paginations.pageSize"
          :layout="paginations.layout"
          :total="pageTotal"
          :current-page="paginations.pageIndex"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        ></el-pagination>
      </div>-->
    </div>
  </div>
</template>

<script>
// import chinaTabsTable from '/components/chinaTabsTable'
import chinaTabsTable from "../fundList/components/chinaTabsTable";
// import data from './data/chinaTabs.json';
import { articleOfSelect, queryEnter, queryStock } from "@/api/user";
import data from "../fundList/data/chinaTabs.json";
import Pagination from "@/components/pagination";

export default {
  data() {
    return {
      dialogShow: false,
      play: false,
      tableDataQuery: [],
      toggleData: "",
      pageTotal: 0,
      value: "",
      QuerydDate: "",
      productName: "",
      articleList: [],
      paginations: {
        pageIndex: 1, // 当前位于哪页
        pageSize: 10, // 1页显示多少条
        pageSizes: [5, 10, 15, 20], //每页显示多少条
        layout: "total, prev, pager, next, jumper" // 翻页属性
      },
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
    Pagination
  },
  created() {
    articleOfSelect().then(res => {
      this.articleList = res.data;
    });
    let data = {
      // articleName: this.productName,
      // articleType: this.value,
      // currentDate: this.QuerydDate,
      pageNum: "1",
      pageSize: "10"
    };
    queryStock(data).then(res => {
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
    handleClose(done) {
      this.pauseAudio();
      this.dialogShow = false;
    },
    dialogVisible() {
      this.pauseAudio();
      this.dialogShow = false;
    },
    openDialog() {
      this.playAudio();
      this.dialogShow = true;
    },
    handleCurrentChange(page) {
      let data = {
        articleName: this.productName,
        articleType: this.value,
        currentDate: this.QuerydDate,
        pageNum: page + "",
        pageSize: "10"
      };
      queryStock(data).then(res => {
        console.log(res);
        this.tableDataQuery = res.data.list;
        this.pageTotal = res.data.total;
      });
    },
    QueryStockData() {
      let data = {
        articleName: this.productName,
        articleType: this.value,
        currentDate: this.QuerydDate,
        pageNum: "1",
        pageSize: "10"
      };
      queryStock(data).then(res => {
        console.log(res);
        this.tableDataQuery = res.data.list;
        this.pageTotal = res.data.total;
      });
      // 播放音乐的demo
      // if (!this.play) {
      //   this.pauseAudio();
      //   this.play = !this.play;
      // } else {
      //   this.playAudio();
      //   this.play = !this.play;
      // }
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
.pagination {
  text-align: right;
  padding: 10px 18px;
}
</style>


