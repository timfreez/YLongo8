import React from 'react';
class Luckysheet extends React.Component {

  componentDidMount() {
    const luckysheet = window.luckysheet;
    luckysheet.create({
      container: "luckysheet",
      title: 'Luckysheet',
      myFolderUrl:'http://localhost:3000/main',
      lang:'zh',
      userInfo:true,
      userName:'Lucky',
      // userInfo:'<i style="font-size:16px;color:#ff6a00;" class="fa fa-taxi" aria-hidden="true"></i> Lucky',
      //options
      showinfobar: true, // 默认就是true，可以不设置
      functionButton:'<button id="" class="btn btn-primary" style="padding:3px 6px;font-size: 12px;margin-right: 10px;">下载</button> <button id="" class="btn btn-primary btn-danger" style=" padding:3px 6px; font-size: 12px; margin-right: 10px;">分享</button> <button id="luckysheet-share-btn-title" class="btn btn-primary btn-danger" style=" padding:3px 6px; font-size: 12px; margin-right: 10px;">秀数据</button>',
      // showtoolbar: false,
      // showtoolbarConfig:{
      //     undoRedo: true,
      //     font: true,
      // }
      data:[
        {
          "name": "Cell", //工作表名称
          "color": "", //工作表颜色
          "index": 0, //工作表索引
          "status": 1, //激活状态
          "order": 0, //工作表的下标
          "hide": 0,//是否隐藏
          "row": 36, //行数
          "column": 18, //列数
          "defaultRowHeight": 19, //自定义行高
          "defaultColWidth": 73, //自定义列宽
          "celldata": [], //初始化使用的单元格数据
          "config": {
            "merge":{}, //合并单元格
            "rowlen":{}, //表格行高
            "columnlen":{}, //表格列宽
            "rowhidden":{}, //隐藏行
            "colhidden":{}, //隐藏列
            "borderInfo":{}, //边框
            "authority":{}, //工作表保护

          },
          "scrollLeft": 0, //左右滚动条位置
          "scrollTop": 315, //上下滚动条位置
          "luckysheet_select_save": [], //选中的区域
          "calcChain": [],//公式链
          "isPivotTable":false,//是否数据透视表
          "pivotTable":{},//数据透视表设置
          "filter_select": {},//筛选范围
          "filter": null,//筛选配置
          "luckysheet_alternateformat_save": [], //交替颜色
          "luckysheet_alternateformat_save_modelCustom": [], //自定义交替颜色
          "luckysheet_conditionformat_save": {},//条件格式
          "frozen": {}, //冻结行列配置
          "chart": [], //图表配置
          "zoomRatio":1, // 缩放比例
          "image":[], //图片
          "showGridLines": 1, //是否显示网格线
          "dataVerification":{} //数据验证配置
        },
        {
          "name": "Sheet2",
          "color": "",
          "index": 1,
          "status": 0,
          "order": 1,
          "celldata": [],
          "config": {}
        },
        {
          "name": "Sheet3",
          "color": "",
          "index": 2,
          "status": 0,
          "order": 2,
          "celldata": [],
          "config": {},
        }
      ]



    });
  }
  render() {
    const luckyCss = {
      margin: '0px',
      padding: '0px',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: '0px',
      top: '0px'
    }
    return (
        <div
            id="luckysheet"
            style={luckyCss}
        ></div>
    )
  }
}

export default Luckysheet