<template>
  <div class="wrapper">
    <div class="flex-betwwen">
      <div class="flex-left">
        <div class="flex-left-up">
          <div class="title">整体概况</div>
          <div id="myChart1" style="width:100%;height:300px"></div>
        </div>
        <div class="flex-left-down">
          <div class="title">折线图</div>
          <div id="myChart2" style="width:100%;height:300px"></div>
        </div>
      </div>
      <div class="flex-right">
        <div class="title">来源</div>
        <!-- <div>排行榜</div> -->
        <el-table 
          :data="tableData"
          stripe
          style="width: 100%;margin-top:20px;padding:20px 20px 0">
          <el-table-column
            lable="排序"
            width="50">
            <template slot-scope="scope">
              <span style="display:inline-block;width:24px;text-align:center;border-radius:50%;color:#ffffff;"
                :style="{'background':scope.$index==0 ? '#F56C6C': scope.$index==1 ? '#E6A23C':'#909399'}">
                {{scope.$index+1}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="column1"
            label="直接访问">
          </el-table-column>
          <el-table-column
            prop="column2"
            label="邮件营销">
          </el-table-column>
          <el-table-column
            prop="column3"
            label="广告联盟">
          </el-table-column>
          <el-table-column
            prop="column4"
            label="视频广告">
          </el-table-column>
          <el-table-column
            prop="column5"
            label="搜索引擎">
          </el-table-column>
        </el-table>
        <div style="margin:20px;padding-top:20px;">
          <el-table 
            :data="tableData2"
            stripe
            style="width: 100%;">
            <el-table-column
              lable="排序"
              width="50">
              <template slot-scope="scope">
                <span style="display:inline-block;width:24px;text-align:center;border-radius:50%;color:#ffffff;"
                  :style="{'background':scope.$index==0 ? '#F56C6C': scope.$index==1 ? '#E6A23C':'#909399'}">
                  {{scope.$index+1}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="title"
              label=""
              width="150">
            </el-table-column>
            <el-table-column
              label="" width="">
              <template slot-scope="scope">
                <!-- {{scope.$index}} -->
                <el-progress v-if="!scope.$index" status="success" :stroke-width="10" :percentage="100" ></el-progress>
                <el-progress v-else :stroke-width="10" :percentage="70" ></el-progress>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="title">饼形图</div>
      <div id="myChart3" style="width:100%;height:700px"></div>
    </div>
  </div>
</template>
<script>
export default {
  name:'demo1',
  data(){
    return{
      myChartId:[],
      tableData: [{
        column1: '2123',
        column2: '1223',
        column3: '1223',
        column4: '1223',
        column5: '1223'
      }, {
        column1: '2123',
        column2: '1223',
        column3: '1223',
        column4: '1223',
        column5: '1223'
      }, {
        column1: '2123',
        column2: '1223',
        column3: '1223',
        column4: '1223',
        column5: '1223'
      }],
      tableData2:[{title:'直接访问'},{title:'邮件营销'},{title:'广告联盟'},{title:'视频广告'},{title:'搜索引擎'}]
    }
  },
  mounted(){
    this.myChart();
  },
  methods:{
    getMyChart(id,option){
      let myChart = this.$echarts.init(document.getElementById(id));
      if(this.myChartId.indexOf(id) == -1){
        this.myChartId.push(myChart)
      }
      myChart.setOption(option)
      let that = this
      setTimeout(function (){
        window.onresize = function () {
          that.myChartId.forEach(item=>{
            console.log(item)
            item.resize();
            
          })
        }
      },200)
      // setTimeout(function (){
      //   window.onresize = function () {
      //     myChart.resize();
      //   }
      // },200)
    },
    myChart(){
      let option1 = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            right: 10,
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 335, name: '直接访问'},
                    {value: 310, name: '邮件营销'},
                    {value: 234, name: '联盟广告'},
                    {value: 135, name: '视频广告'},
                    {value: 1548, name: '搜索引擎'}
                ]
            }
        ]
      }
      this.getMyChart("myChart1",option1);
      let option2 = {
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  label: {
                      backgroundColor: '#6a7985'
                  }
              }
          },
          legend: {
              data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis: [
              {
                  type: 'category',
                  boundaryGap: false,
                  data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
              }
          ],
          yAxis: [
              {
                  type: 'value'
              }
          ],
          series: [
              {
                  name: '邮件营销',
                  type: 'line',
                  stack: '总量',
                  areaStyle: {},
                  data: [120, 132, 101, 134, 90, 230, 210]
              },
              {
                  name: '联盟广告',
                  type: 'line',
                  stack: '总量',
                  areaStyle: {},
                  data: [220, 182, 191, 234, 290, 330, 310]
              },
              {
                  name: '视频广告',
                  type: 'line',
                  stack: '总量',
                  areaStyle: {},
                  data: [150, 232, 201, 154, 190, 330, 410]
              },
              {
                  name: '直接访问',
                  type: 'line',
                  stack: '总量',
                  areaStyle: {},
                  data: [320, 332, 301, 334, 390, 330, 320]
              },
              {
                  name: '搜索引擎',
                  type: 'line',
                  stack: '总量',
                  label: {
                      normal: {
                          show: true,
                          position: 'top'
                      }
                  },
                  areaStyle: {},
                  data: [820, 932, 901, 934, 1290, 1330, 1320]
              }
          ]
      }
      this.getMyChart("myChart2",option2);
      let option3 =  {
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data: ['蒸发量', '降水量']
          },
          toolbox: {
              show: true,
              feature: {
                  dataView: {show: true, readOnly: false},
                  magicType: {show: true, type: ['line', 'bar']},
                  restore: {show: true},
                  saveAsImage: {show: true}
              }
          },
          calculable: true,
          xAxis: [
              {
                  type: 'category',
                  data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
              }
          ],
          yAxis: [
              {
                  type: 'value'
              }
          ],
          series: [
              {
                  name: '蒸发量',
                  type: 'bar',
                  data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                  markPoint: {
                      data: [
                          {type: 'max', name: '最大值'},
                          {type: 'min', name: '最小值'}
                      ]
                  },
                  markLine: {
                      data: [
                          {type: 'average', name: '平均值'}
                      ]
                  }
              },
              {
                  name: '降水量',
                  type: 'bar',
                  data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                  markPoint: {
                      data: [
                          {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
                          {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
                      ]
                  },
                  markLine: {
                      data: [
                          {type: 'average', name: '平均值'}
                      ]
                  }
              }
          ]
      }
      this.getMyChart("myChart3",option3);
    }
  }
}
</script>
<style>
.wrapper{
  padding:20px; 
  min-width:1000px;
}
.flex-betwwen{
  display: flex;
  justify-content: space-between;
}
.flex-left-up,.flex-left-down,.flex-right,.bottom{
  border-radius: 5px;
  border:1px solid #dcdee2;
  padding:10px 20px;
}
.flex-left{
  width:60%;
  margin-right:10px;
}
.flex-right{
  width:40%;
  margin-left:10px;
  margin-right: 40px;
}
.flex-left-down{
  margin-top:20px;
}
.title{
  color:#515a6e;
}
.title:before{
  content: '';
  display: inline-block;
  width:3px;
  height: 12px;
  margin-right:10px;
  background: #ff9900;
}
.bottom{
  margin-top:20px;
  box-sizing: border-box;
}
</style>