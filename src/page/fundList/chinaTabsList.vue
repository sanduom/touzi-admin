<template>
    <div class="fillcontain">
        <div class="tabContainer" ref="tabContainer">
            <div style="display:flex;height:80px">
                <div style="float:left;width:30%;margin-top:20px">
                    商品名称:<el-input v-model="productName" placeholder="请输入商品名称" style="width:60%;margin-left:10px" label="商品名称" size="small"></el-input>
                </div>
                <div style="float:right;width:30%;margin-top:20px">
                    商品分类:
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div style="float:left;width:30%;margin-top:20px">
                    日期
                    <el-date-picker
                        v-model="QuerydDate"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                </div>
                <div style="float:left;width:10%;margin-top:20px">
                    <el-button type="primary">查询</el-button>
                </div>
            </div>
            
            <el-tabs type="border-card">
                <el-tab-pane>
                    <span slot="label" @click="toggleTabs('eastChina')"><icon-svg icon-class="icondashboard" />物品库存清单</span>
                    <china-tabs-table :toggleData="toggleData"></china-tabs-table>
                </el-tab-pane>
            </el-tabs>
            <pagination :pageTotal="pageTotal"></pagination>
        </div>
    </div>
</template>

<script>
    import chinaTabsTable from './components/chinaTabsTable'
    import data from './data/chinaTabs.json';
    import Pagination from "@/components/pagination";

    export default {
        data(){
            return {
                toggleData:'',
                pageTotal:60,
                value:"",
                QuerydDate:'',
                productName:'',
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                    }, {
                    value: '选项2',
                    label: '双皮奶'
                    }, {
                    value: '选项3',
                    label: '蚵仔煎'
                    }, {
                    value: '选项4',
                    label: '龙须面'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                    }
                ],
            }
        },
        components: {
             chinaTabsTable,
             Pagination
        },
        mounted(){
            //  this.setTabHeight();
            //  window.onresize = () => {
            //     this.setTabHeight();
            //  }
            this.toggleTabs('eastChina');
        },
        methods: {
            setTabHeight(){
                this.$nextTick(() => {
                    this.$refs.tabContainer.style.height =  (document.body.clientHeight - 160)+'px'
                })
            },
            toggleTabs(item){
                this.toggleData = item;
            }
        }
    }
</script>

<style lang="less" scoped>
 
</style>


