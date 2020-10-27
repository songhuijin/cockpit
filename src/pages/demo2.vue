<template>
  <div class="wrapper">
    <div class="flex-between">
      <div style="width:25%">
        <div class="border">
          <div class="border-left-top"></div>
          <div class="border-right-top"></div>
          <div class="border-left-bottom"></div>
          <div class="border-right-bottom"></div>
          <div id="myChart1" style="height:300px;width:100%;"></div>
        </div>
        <div class="border" style="margin-top:20px">
          <div class="border-left-top"></div>
          <div class="border-right-top"></div>
          <div class="border-left-bottom"></div>
          <div class="border-right-bottom"></div>
          <div id='myChart2' style="height:300px"></div>
        </div>
      </div>
      <div style="width:50%;margin:0 20px"  class="border">
        <div class="border-left-top"></div>
        <div class="border-right-top"></div>
        <div class="border-left-bottom"></div>
        <div class="border-right-bottom"></div>
        <div id='myChart3' style="height:600px"></div>
      </div>
      <div style="width:25%">
        <div class="border">
          <div class="border-left-top"></div>
          <div class="border-right-top"></div>
          <div class="border-left-bottom"></div>
          <div class="border-right-bottom"></div>
          <div id='myChart4' style="height:300px"></div>
        </div>
        <div class="border" style="margin-top:20px">
          <div class="border-left-top"></div>
          <div class="border-right-top"></div>
          <div class="border-left-bottom"></div>
          <div class="border-right-bottom"></div>
          <div id='myChart5' style="height:300px"></div>
        </div>
      </div>
    </div>
    <div class="flex-between">
      <div style="width:25%">
        <div class="border">
          <div class="border-left-top"></div>
          <div class="border-right-top"></div>
          <div class="border-left-bottom"></div>
          <div class="border-right-bottom"></div>
          <div id="myChart1" style="height:300px;width:100%;"></div>
        </div>
      </div>
      <div style="width:25%;margin-left:20px">
        <div class="border">
          <div class="border-left-top"></div>
          <div class="border-right-top"></div>
          <div class="border-left-bottom"></div>
          <div class="border-right-bottom"></div>
          <div id="myChart1" style="height:300px;width:100%;"></div>
        </div>
      </div>
      <div style="width:25%;margin-left:20px">
        <div class="border">
          <div class="border-left-top"></div>
          <div class="border-right-top"></div>
          <div class="border-left-bottom"></div>
          <div class="border-right-bottom"></div>
          <div id="myChart1" style="height:300px;width:100%;"></div>
        </div>
      </div>
      <div style="width:25%;margin-left:20px">
        <div class="border">
          <div class="border-left-top"></div>
          <div class="border-right-top"></div>
          <div class="border-left-bottom"></div>
          <div class="border-right-bottom"></div>
          <div id="myChart1" style="height:300px;width:100%;"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'demo2',
  data(){
    return{
      myChartId:[],
      
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
    },
    myChart(){
      let option1 = {
          tooltip: {},
          color:['#ed4014','#ff9900'],
          legend: {
              data: ['预算分配', '实际开销'], 
              orient: 'vertical',
              right: 0,
              textStyle:{
                color: '#fff'
              }
          },
          radar: {
              // shape: 'circle',
              name: {
                  textStyle: {
                      color: '#fff',
                      backgroundColor: '#999',
                      borderRadius: 3,
                      padding: [3, 5]
                  }
              },
              indicator: [
                  { name: '销售', max: 6500},
                  { name: '管理', max: 16000},
                  { name: '信息技术', max: 30000},
                  { name: '客服', max: 38000},
                  { name: '研发', max: 52000},
                  { name: '市场', max: 25000}
              ]
          },
          series: [{
              name: '预算 vs 开销',
              type: 'radar',
              // areaStyle: {normal: {}},
              data: [
                  {
                      value: [4300, 10000, 28000, 35000, 50000, 19000],
                      name: '预算分配'
                  },
                  {
                      value: [5000, 14000, 28000, 31000, 42000, 21000],
                      name: '实际开销'
                  }
              ]
          }]
      }
      this.getMyChart("myChart1",option1);
      let option2 = {
          color:['#19B3BE','#dd6b66','#759aa0'],
          legend: {
            textStyle:{
              color: '#fff'
            }
          },
          tooltip: {},
          dataset: {
              source: [
                  ['product', '2015', '2016', '2017'],
                  ['Matcha Latte', 43.3, 85.8, 93.7],
                  ['Milk Tea', 83.1, 73.4, 55.1],
                  ['Cheese Cocoa', 86.4, 65.2, 82.5],
                  ['Walnut Brownie', 72.4, 53.9, 39.1]
              ]
          },
          
          xAxis: {type: 'category',
            axisLabel: {
              show: true,
                textStyle: {
                  color: '#fff',  //更改坐标轴文字颜色
                }
            },
          },
          yAxis: {
            axisLabel: {
              show: true,
                textStyle: {
                  color: '#fff',  //更改坐标轴文字颜色
                }
            },
          },
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [
              {type: 'bar'},
              {type: 'bar'},
              {type: 'bar'}
          ]
      };
      this.getMyChart("myChart2",option2);
      let option3 = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            left: 'center',
            data: ['某软件', '某主食手机', '某水果手机', '降水量', '蒸发量'],
            textStyle:{
              color: '#fff'
            }
        },
        radar: [
            {
                indicator: [
                    {text: '品牌', max: 100},
                    {text: '内容', max: 100},
                    {text: '可用性', max: 100},
                    {text: '功能', max: 100}
                ],
                center: ['25%', '40%'],
                radius: 80
            },
            {
                indicator: [
                    {text: '外观', max: 100},
                    {text: '拍照', max: 100},
                    {text: '系统', max: 100},
                    {text: '性能', max: 100},
                    {text: '屏幕', max: 100}
                ],
                radius: 80,
                center: ['50%', '60%'],
            },
            {
                indicator: (function (){
                    var res = [];
                    for (var i = 1; i <= 12; i++) {
                        res.push({text: i + '月', max: 100});
                    }
                    return res;
                })(),
                center: ['75%', '40%'],
                radius: 80
            }
        ],
        series: [
            {
                type: 'radar',
                tooltip: {
                    trigger: 'item'
                },
                areaStyle: {},
                data: [
                    {
                        value: [60, 73, 85, 40],
                        name: '某软件'
                    }
                ]
            },
            {
                type: 'radar',
                radarIndex: 1,
                areaStyle: {},
                data: [
                    {
                        value: [85, 90, 90, 95, 95],
                        name: '某主食手机'
                    },
                    {
                        value: [95, 80, 95, 90, 93],
                        name: '某水果手机'
                    }
                ]
            },
            {
                type: 'radar',
                radarIndex: 2,
                areaStyle: {},
                data: [
                    {
                        name: '降水量',
                        value: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3],
                    },
                    {
                        name: '蒸发量',
                        value: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3]
                    }
                ]
            }
        ]
    };
      this.getMyChart("myChart3",option3);
      
      let option4 = {
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
              textStyle:{
                color: '#fff'
              },
              // orient: 'vertical',
              left: 0,
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
              axisLabel: {
                show: true,
                  textStyle: {
                    color: '#fff',  //更改坐标轴文字颜色
                  }
              },
          },
          yAxis: {
              type: 'value',
              axisLabel: {
                show: true,
                  textStyle: {
                    color: '#fff',  //更改坐标轴文字颜色
                  }
              },
          },
          series: [
              {
                  name: '邮件营销',
                  type: 'line',
                  stack: '总量',
                  data: [120, 132, 101, 134, 90, 230, 210]
              },
              {
                  name: '联盟广告',
                  type: 'line',
                  stack: '总量',
                  data: [220, 182, 191, 234, 290, 330, 310]
              },
              {
                  name: '视频广告',
                  type: 'line',
                  stack: '总量',
                  data: [150, 232, 201, 154, 190, 330, 410]
              },
              {
                  name: '直接访问',
                  type: 'line',
                  stack: '总量',
                  data: [320, 332, 301, 334, 390, 330, 320]
              },
              {
                  name: '搜索引擎',
                  type: 'line',
                  stack: '总量',
                  data: [820, 932, 901, 934, 1290, 1330, 1320]
              }
          ]
      };
      this.getMyChart("myChart4",option4);
      let option5 = {
          tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
              orient: 'vertical',
              left: 'left',
              data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
              textStyle:{
                color: '#fff'
              },
          },
          series: [
              {
                  name: '访问来源',
                  type: 'pie',
                  radius: '55%',
                  center: ['50%', '60%'],
                  data: [
                      {value: 335, name: '直接访问'},
                      {value: 310, name: '邮件营销'},
                      {value: 234, name: '联盟广告'},
                      {value: 135, name: '视频广告'},
                      {value: 1548, name: '搜索引擎'}
                  ],
                  emphasis: {
                      itemStyle: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      };
    this.getMyChart("myChart5",option5);
    },
  }
}
</script>
<style>
/* #1946C2 #194691 #1945D9*/
.wrapper{
  padding:20px; 
  min-width:1000px;
  background:#194691;
  /* height: 300px; */
}
.flex-between{
  display: flex;
  justify-content: space-between;
  padding:20px;
}
.border{
  position: relative;
  /* border:1px solid #194576; */
  box-shadow: 0px 0px 0px 2px #2b85e4;
  padding: 20px;
  border-radius: 2px;
  /* box-sizing: border-box; */
}
.border-left-top,.border-right-top,.border-left-bottom,.border-right-bottom{
  position: absolute;
  width:20px;
  height:20px;
  border-radius: 2px;
}
.border-left-top{
  left:-3px;
  top:-3px;
  border-left:4px solid #409EFF;
  border-top:4px solid #409EFF;
}
.border-right-top{
  right:-3px;
  top:-3px;
  border-right:4px solid #409EFF;
  border-top:4px solid #409EFF;
}
.border-left-bottom{
  left:-3px;
  bottom: -3px;
  border-left:4px solid #409EFF;
  border-bottom:4px solid #409EFF;
}
.border-right-bottom{
  right:-3px;
  bottom: -3px;
  border-right:4px solid#409EFF;
  border-bottom:4px solid #409EFF;
}
</style>
