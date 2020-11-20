<template>
  <div class="wrapper" style="min-width:1200px">
    <div class="flex-betwwen">
      <div class="flex-left-box">
        <div class="flex-wrapper">
          <div class="title">自然条件 Natural conditions</div>
          <div class="container">
            <div class="flex-start">
              <div class="container-flex content-right">
                <div class="content-icon">
                  <i class="iconfont iconthermometer_icon iconLarge"></i>
                </div>
                <div class="content">
                  <div class="content-title">平均气温</div>
                  <div class="content-desc">13.7°C</div>
                </div>
              </div>
              <div class="container-flex">
                <div class="content-icon">
                  <i class="iconfont iconyu iconLarge"></i>
                </div>
                <div class="content">
                  <div class="content-title">年均降水</div>
                  <div class="content-desc">384.5mm</div>
                </div>
              </div>
            </div>
            <div class="flex-start">
              <div class="container-flex content-right">
                <div class="content-icon">
                  <i class="iconfont iconfeng iconLarge"></i>
                </div>
                <div class="content">
                  <div class="content-title">平均风速</div>
                  <div class="content-desc">3.4m/s</div>
                </div>
              </div>
              <div class="container-flex">
                <div class="content-icon">
                  <i class="iconfont iconicon- iconLarge"></i>
                </div>
                <div class="content">
                  <div class="content-title">地形地貌</div>
                  <div class="content-desc">冲击平原区</div>
                </div>
              </div>
            </div>
            <div class="flex-start">
              <div class="container-flex">
                <div class="content-icon">
                  <i class="iconfont iconwater_icon iconLarge"></i>
                </div>
                <div class="content">
                  <div class="content-title">一级河道</div>
                  <div class="content-desc">5个</div>
                </div>
              </div>
              <div class="divider"></div>
              <div class="content">
                <div class="content-title">二级河道</div>
                <div class="content-desc">12个</div>
              </div>
              <div class="divider"></div>
              <div class="content">
                <div class="content-title">蓄水量</div>
                <div class="content-desc">1.7亿</div>
              </div>
            </div>
            <div class="flex-start">
              <div class="container-flex">
                <div class="content-icon">
                  <i class="iconfont iconshu3 iconLarge"></i>
                </div>
                <div class="content">
                  <div class="content-title">区域面积</div>
                  <div class="content-desc">1296km<sup>2</sup></div>
                </div>
              </div>
              <div class="divider"></div>
              <div class="content">
                <div class="content-title">林地面积</div>
                <div class="content-desc">90万亩</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-wrapper">
          <div class="title">经济数据 Economic data</div>
          <div class="container">
            <div class="small-title">经济状况</div>
            <div class="flex-between" style="padding:10px 0 0 0">
              <div class="station">
                <div class="eco-top">CPI(当月)</div>
                <div class="eco-bottom">3.3%</div>
              </div>
              <div class="station">
                <div class="eco-top">PPI(当月)</div>
                <div class="eco-bottom">-2.6%</div>
              </div>
              <div class="station">
                <div class="eco-top">PMI(当月)</div>
                <div class="eco-bottom">52%</div>
              </div>
            </div>
            <div>
              <div class="industry">
                <div style="display:flex;align-items:center">
                  <el-progress type="circle"  :percentage="3.98" 
                  :width="25" :stroke-width="3" :show-text="false" 
                  color="rgb(15,247,171)"></el-progress>
                  <div class="industry-num">3.98%</div>
                  <div class="industry-desc">第一产业</div>
                </div>
                <div class="industry-money">17.45亿元</div>
              </div>
            </div>
            <div>
              <div class="industry">
                <div style="display:flex;align-items:center">
                  <el-progress type="circle"  :percentage="3.98" 
                  :width="25" :stroke-width="3" :show-text="false" 
                  color="rgb(15,247,171)"></el-progress>
                  <div class="industry-num">3.98%</div>
                  <div class="industry-desc">第二产业</div>
                </div>
                <div class="industry-money">17.45亿元</div>
              </div>
            </div>
            <div>
              <div class="industry">
                <div style="display:flex;align-items:center">
                  <el-progress type="circle"  :percentage="3.98" 
                  :width="25" :stroke-width="3" :show-text="false" 
                  color="rgb(15,247,171)"></el-progress>
                  <div class="industry-num">3.98%</div>
                  <div class="industry-desc">第三产业</div>
                </div>
                <div class="industry-money">17.45亿元</div>
              </div>
            </div>
            <div class="small-title">产值占比</div>
            <div class="flex-between">
              <div class="proportion">
                <el-progress type="circle"  :percentage="27" 
                  :width="80" :stroke-width="3"  
                  color="rgb(51,202,84)"></el-progress>
                <div style="margin-top:10px">种植业</div>
              </div>
              <div class="proportion">
                <el-progress type="circle"  :percentage="47" 
                  :width="80" :stroke-width="3"  
                  color="rgb(51,151,252)"></el-progress>
                <div style="margin-top:10px">畜牧业</div>
              </div>
              <div class="proportion">
                <el-progress type="circle"  :percentage="26" 
                  :width="80" :stroke-width="3"  
                  color="rgb(252,168,0)"></el-progress>
                <div style="margin-top:10px">养渔业</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-center-box">
        <div style="color:rgb(15,247,171);text-align:center">
          <div class="top-divider"><i class="iconfont iconshuidao" style="font-size:70px"></i></div>
          <div style="font-size:26px">智慧农业大数据平台.大屏中心</div>
          <div style="color:rgb(63,140,137)">智慧农业大数据平台.大屏中心</div>
        </div>
        <div style="padding:10px;margin-top:10px;background:rgba(0,0,0,.1)">
          <div class="title">盈利趋势 industrial park</div>
          <div style="margin:20px 20px 10px ;background:rgb(27,27,27)">
            <div class="flex-betwwen" style="padding:20px;text-align:center;color:rgb(63,140,137)">
              <div style="width:60px">
                <div><i class="iconfont iconxiaomai"></i></div>
                <div>蔬菜类</div>
              </div>      
              <div style="width:80%">
                <span style="width:37%;background:rgb(5,155,106);display: inline-block;color:#000000">37%</span>
                <span style="width:63%;background:rgb(22,208,147);display: inline-block;color:#000000">63%</span>
                <div style="padding-top:5px;font-size:14px">蔬菜类/肉禽类盈利比例</div>
              </div>
              <div style="width:60px">
                <div><i class="iconfont iconzhu"></i></div>
                <div>肉禽类</div>
              </div>   
            </div>
            <div class="myEchart" id="myEchart" style="width:100%;height:310px"></div>
            <div class="flex-betwwen">
              <div class="bili" style="width:60%">
                <div class="bili-title">当前增速同比/环比</div>
                <div style="border:1px solid rgb(27,50,33)">
                  <div class="flex-betwwen">
                    <div class="bili-table-title">名称</div>
                    <div class="bili-table-title">同比增速</div>
                    <div class="bili-table-title">环比增速</div>
                  </div>
                  <div class="flex-betwwen">
                    <div class="bili-table-content">菜心</div>
                    <div class="bili-table-content">1.5%<i class="iconfont iconshangsheng" style="color:rgb(255,85,68)"></i></div>
                    <div class="bili-table-content">1.2%<i class="iconfont iconshangsheng" style="color:rgb(255,85,68)"></i></div>
                  </div>
                  <div class="flex-betwwen">
                    <div class="bili-table-content">水稻</div>
                    <div class="bili-table-content">7.2%<i class="iconfont iconshangsheng" style="color:rgb(255,85,68)"></i></div>
                    <div class="bili-table-content">-0.8%<i class="iconfont iconxiajiang"></i></div>
                  </div>
                  <div class="flex-betwwen">
                    <div class="bili-table-content">生菜</div>
                    <div class="bili-table-content">-2.2%<i class="iconfont iconxiajiang"></i></div>
                    <div class="bili-table-content">-2.4%<i class="iconfont iconxiajiang"></i></div>
                  </div>
                  <div class="flex-betwwen">
                    <div class="bili-table-content">芹心</div>
                    <div class="bili-table-content">0.9%<i class="iconfont iconshangsheng" style="color:rgb(255,85,68)"></i></div>
                    <div class="bili-table-content">-0.6%<i class="iconfont iconxiajiang"></i></div>
                  </div>
                  <div class="flex-betwwen">
                    <div class="bili-table-content">韭菜</div>
                    <div class="bili-table-content">3.2%<i class="iconfont iconshangsheng" style="color:rgb(255,85,68)"></i></div>
                    <div class="bili-table-content">1.9%<i class="iconfont iconshangsheng" style="color:rgb(255,85,68)"></i></div>
                  </div>
                </div>
              </div>
              <div class="bili" style="width:40%">
                <div class="bili-title">盈利贡献前五</div>
                <div class="flex-betwwen process-title">
                  <div>62.12%</div>
                  <div>猪肉</div>
                </div>
                <el-progress :percentage="62.12" color="rgb(15,247,171)"></el-progress>
                <div class="flex-betwwen process-title">
                  <div>22.53%</div>
                  <div>牛肉</div>
                </div>
                <el-progress :percentage="22.53" color="rgb(15,247,171)"></el-progress>
                <div class="flex-betwwen process-title">
                  <div>8.48%</div>
                  <div>韭菜</div>
                </div>
                <el-progress :percentage="8.48" color="rgb(15,247,171)"></el-progress>
                <div class="flex-betwwen process-title">
                  <div>62.12%</div>
                  <div>猪肉</div>
                </div>
                <el-progress :percentage="62.12" color="rgb(15,247,171)"></el-progress>
                <div class="flex-betwwen process-title">
                  <div>62.12%</div>
                  <div>猪肉</div>
                </div>
                <el-progress :percentage="62.12" color="rgb(15,247,171)"></el-progress>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-wrapper">
          <div class="title">农业产品化 industrial park</div>
          <div class="container" style="padding:15px;">
            <div class="product-flex">
              <div class="product-flex">
                <div class="product-iconBox"><i class="iconfont iconxiaoliangyuce"></i></div>
                <div>
                  <div class="product-title">加工销售</div>
                  <div class="product-desc">203 家</div>
                </div>
              </div>
              <div class="product-flex">
                <div class="product-iconBox"><i class="iconfont icongaiicon-"></i></div>
                <div>
                  <div class="product-title">龙头企业</div>
                  <div class="product-desc">18 家</div>
                </div>
              </div>
              <div class="product-flex">
                <div class="product-iconBox"><i class="iconfont icontractor__easyiconnet"></i></div>
                <div>
                  <div class="product-title">家庭农场</div>
                  <div class="product-desc">117 家</div>
                </div>
              </div>
              <div class="product-flex">
                <div class="product-iconBox"><i class="iconfont iconxiaomai"></i></div>
                <div>
                  <div class="product-title">合作社区</div>
                  <div class="product-desc">1290 家</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        




      </div>
      <div class="flex-right-box">
        <div class="flex-wrapper">
          <div class="title">产业园区 industrial park</div>
          <div class="container">
            <div class="small-title">园区概况</div>
            <div class="flex-between" style="padding:10px 0 0 0">
              <div class="station">
                <div class="eco-top">总人数</div>
                <div class="eco-bottom">2.44万</div>
              </div>
              <div class="station">
                <div class="eco-top">占地面积</div>
                <div class="eco-bottom">62.31万亩</div>
              </div>
              <div class="station">
                <div class="eco-top">支配收入</div>
                <div class="eco-bottom">2.42万元</div>
              </div>
            </div>
            <div class="flex-between" style="padding:10px 0 0 0">
              <div class="station">
                <div class="eco-top">耕地面积</div>
                <div class="eco-bottom">23.78万亩</div>
              </div>
              <div class="station">
                <div class="eco-top">小站稻</div>
                <div class="eco-bottom">62.31万亩</div>
              </div>
              <div class="station">
                <div class="eco-top">生猪出栏</div>
                <div class="eco-bottom">2.42万头</div>
              </div>
            </div>
            <div class="small-title" style="margin-top:20px">基础设施</div>
          </div>
          <div style="background:rgb(24,24,24);position:relative;height:170px">
            <div class="baseClass" style="top:10px;left:20px;color:rgb(85,122,237)">一带一路</div>
            <div class="baseClass" style="top:60px;left:140px;color:rgb(205,134,5)">内需建设之路</div>
            <div class="baseClass" style="bottom:40px;left:30px;color:rgb(40,175,130)">海运和大通道</div>
            <div class="baseClass" style="right:40px;bottom:20px;color:rgb(169,130,38)">一带一路</div>
            <div class="baseClass" style="right:10px;top:20px;color:rgb(49,123,217)">消费终端</div>
          </div>   
        </div>
        <div class="flex-wrapper">
          <div class="title">优势产业 Competitive industries</div>
          <div class="container" style="padding:20px 10px">
            <div class="small-title">
              小站稻（市场占有率）
              <div style="float:right">73.3%</div>
            </div>
            <div class="industry">
                <div style="width:80px" class="text-ellipsis">9.61万亩</div>
                <i class="iconfont iconxiaomai" style="margin:0 5px"></i>
                <i class="iconfont iconxiaomai" style="margin:0 5px"></i>
                <i class="iconfont iconxiaomai" style="margin:0 5px"></i>
                <i class="iconfont iconxiaomai" style="margin:0 5px"></i>
                <i class="iconfont iconxiaomai" style="margin:0 5px"></i>
                <i class="iconfont iconxiaomai" style="margin:0 5px"></i>
                <i class="iconfont iconxiaomai" style="margin:0 5px;color:#ffffff"></i>
                <i class="iconfont iconxiaomai" style="margin:0 5px;color:#ffffff"></i>
                <i class="iconfont iconxiaomai" style="margin:0 5px;color:#ffffff"></i>
            </div>
            <div class="small-title">
              生猪出栏（市场占有率）
              <div style="float:right">55.53%</div>
            </div>
            <div class="industry">
                <div style="width:80px" class="text-ellipsis">38.74万头</div>
                <i class="iconfont iconzhu" style="margin:0 5px"></i>
                <i class="iconfont iconzhu" style="margin:0 5px"></i>
                <i class="iconfont iconzhu" style="margin:0 5px"></i>
                <i class="iconfont iconzhu" style="margin:0 5px"></i>
                <i class="iconfont iconzhu" style="margin:0 5px;color:#ffffff"></i>
                <i class="iconfont iconzhu" style="margin:0 5px;color:#ffffff"></i>
                <i class="iconfont iconzhu" style="margin:0 5px;color:#ffffff"></i>
                <i class="iconfont iconzhu" style="margin:0 5px;color:#ffffff"></i>
                <i class="iconfont iconzhu" style="margin:0 5px;color:#ffffff"></i>
            </div>
            <div class="small-title">优质品牌</div>
            <div class="brand">
              <div class="brand-container">
                <div class="brand-container-div">
                  <span class="brand-sort">1</span>优质小站稻
                </div>
                <div class="brand-container-div">
                  <span class="brand-sort">5</span>万家水稻创业产业园
                </div>
              </div>
              <div class="brand-container">
                <div class="brand-container-div">
                  <span class="brand-sort">2</span>“天河”水产示范区
                </div>
                <div class="brand-container-div">
                  <span class="brand-sort">6</span>设福农业示范区
                </div>
              </div>
              <div class="brand-container">
                <div class="brand-container-div">
                  <span class="brand-sort">3</span>生猪研究中心
                </div>
                <div class="brand-container-div">
                  <span class="brand-sort">7</span>抗病猪群研究中心
                </div>
              </div>
              <div class="brand-container">
                <div class="brand-container-div">
                  <span class="brand-sort">4</span>小站稻种植园
                </div>
                <div class="brand-container-div">
                  <span class="brand-sort">8</span>农村合作社
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'demo1',
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
      // setTimeout(function (){
      //   window.onresize = function () {
      //     myChart.resize();
      //   }
      // },200)
    },
    myChart(){
      let option =  {
            title: {
                subtext: '金额（千元）'
            },
            color:['rgb(17,157,136)','rgb(16,207,145)'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['蔬菜类', '肉禽类'],
                textStyle:{
                  color: 'rgb(225, 225, 225,.7)'
                }
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
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '蔬菜类',
                    type: 'bar',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                },
                {
                    name: '肉禽类',
                    type: 'bar',
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    markPoint: {
                        data: [
                            {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
                            {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
                        ]
                    },
                }
            ]
        };
      this.getMyChart('myEchart',option)
    }
  }
}
</script>
<style scoped>
.wrapper{
  padding:20px; 
  min-width:1000px;
  background: rgb(37,37,37);
  position: relative;
}
.flex-wrapper{
  margin-top:30px;
}
.flex-betwwen{
  display: flex;
  justify-content: space-between;
}
.flex-left-box,.flex-right-box{
  width:30%;
}
.title{
  position: relative;
  color:rgb(124,186,183);
  font-size: 14px;
  margin-left: 10px;
}
.title:before{
  position: absolute;
  display: inline-block;
  content: '';
  background: rgb(15,247,171);
  width:25px;
  height: 2px;
  bottom: -8px;
  left: 15px;
  
}
.flex-start{
  display: flex;
  align-items: center;
  padding:15px 0;
}
.container{
  background: rgb(27,27,27);
  margin-top:15px;
  padding:0 20px;
  color: #ffffff;
  font-size: 18px;
}
.content-right{
  width:45%;
  /* padding-right:40px; */
}
.container-flex{
  display: flex;
  align-items: center;
}
.content-title{
  font-size:16px;
  color:rgb(63,140,137);
  font-weight:700;
  margin-bottom:10px;
}
.content-icon{
  width:50px;
  height:50px;
  border: 1px solid rgb(27,78,65);
  margin-right:10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.iconfont{
  color: rgb(15,247,171);
}
.iconLarge{
  font-size: 36px;
}
.divider{
  background: rgb(66,66,66);
  width:1px;
  height: 50px;
  margin:0 20px;
}
.small-title{
  font-size:14px;
  padding:10px 0;
  /* position: relative; */
  color:rgb(124,186,183);
}
.small-title:before{
  /* position: absolute; */
  display: inline-block;
  content: '';
  width:5px;
  height: 5px;
  margin-right:10px;
  background: rgb(124,186,183);
  /* border-radius: 50%; */
}
.station{
  font-size: 15px;
  text-align: center;
  /* padding:20px; */
}
.eco-top{
  color: rgb(100,174,171);
  background: rgb(27,50,35);
  width:100px;
  padding:5px 0;
}
.eco-bottom{
  background:rgb(27,33,33);
  padding:15px 0;
  font-size:16px;
}
.industry{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  color: rgb(85,163,159);
  padding: 10px 0;
  border-bottom:1px solid rgb(27,50,33);
}
/* .industry-money{
  color: rgb(85,163,159);
} */
.industry-num{
  color:rgb(75,140,21);
  padding:0 10px;
}
.proportion{
  color: rgb(63,140,137);
  font-size: 16px;
  font-weight: 700;
  text-align: center;
}
.baseClass{
  position: absolute;
  background: rgb(33,33,33);
  display: inline-block;
  padding:5px 10px;
  border-radius: 10px;
}
.brand{
  font-size:16px;
  color: rgb(63,140,137);
  padding-bottom:10px;
}
.brand-container{
  display: flex;
  justify-content: flex-start;
  align-items:center;
  padding:5px 10px;
}
.brand-container-div{
  width:50%;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis; 
  padding-right:10px;  
}
.text-ellipsis{
  overflow:hidden;
  white-space: nowrap;
  text-overflow:ellipsis; 
}
.brand-sort{
  display: inline-block;
  text-align:center;
  width:18px;
  height:18px;
  background: rgb(15,247,171);
  border-radius: 50%;
  margin-right:10px;
}







.flex-center-box{
  width:100%;
  box-sizing: border-box;
  padding:0 10px;
}
.bili{
  /* width:50%; */
  padding:10px;
  box-sizing: border-box;
}
.bili-title{
  color:rgb(22, 208, 147);
  margin-bottom: 10px;
  font-weight: 700;
}
.bili-table-title{
  color:rgb(22, 208, 147);
  padding:3px 5px;
  font-size: 14px;
  width:33%;
  background: rgb(21,21,21);
}
.bili-table-content{
  padding:3px 5px;
  font-size: 14px;
  width:33%;
  color:rgb(63,140,137);
  border-top:1px solid rgb(27,50,33)
}
.process-title{
  color:rgb(63,140,137);
  font-size: 12px;
}
/deep/.bili .el-progress__text{
  display: none;
}
.product-flex{
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.product-flex .iconfont{
  font-size:20px;
}
.product-iconBox{
  width:35px;
  height:35px;
  line-height: 35px;
  border:1px solid rgb(27,50,33);
  border-radius:50%;
  text-align: center;
  margin-right:10px;
}
.product-title{
  font-size: 14px;
  color:rgb(63,140,137);
  font-weight: 800;
}
.product-desc{
  font-size: 16px;
}
/* .top-divider{
  
} */
.top-divider:before{
  content: '';
  display: inline-block;
  height:1px;
  background: rgb(27,50,33);
  width:40%;
  position:absolute;
  top:40px;
  right:40px;
  /* right:-20%; */
  /* right:0; */
}
.top-divider:after{
  content: '';
  display: inline-block;
  height:1px;
  background: rgb(27,50,33);
  width:40%;
  position:absolute;
  top:40px;
  left:40px; 
}
</style>