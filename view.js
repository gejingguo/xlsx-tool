/**
 * Created by 40431 on 2016/5/16.
 */

function showXlsxInfo(i){
    //alert(i);
    var file = global.setting.xlsxpath + '\\' + global.setting.xlsxlist[i].xlsx;
    var sheet = global.setting.xlsxlist[i].sheet;
    var xlsx = require('./xlsx');
    var info = xlsx.loadXlsxInfo(file, sheet);
    console.log(info);
    var text = "";
    if(info.length < 3) {
        text = "表格头部行数<3";
        document.getElementById("xlsx_info_body").textContent = text;
    } else {
        text = '<table class="table" id="xlsx_info_table"><thead><tr><th>名称</th><th>别名</th><th>标签</th></tr></thead>';
        text += '<tbody>';
        for(var i = 0; i < info[0].length; ++i) {
            text += '<tr>';
            text += '<td>';
            text += info[0][i];
            text += '</td>';
            text += '<td>';
            text += info[1][i];
            text += '</td>';
            text += '<td>';
            text += info[2][i];
            text += '</td>';
            text += '</tr>';
        }
        text += '</tbody></table>';
        console.log(text);
        document.getElementById("xlsx_info_body").innerHTML = text;
    }
    document.getElementById("xlsx_info_title").textContent = "表格信息";
}

function showXlsxList() {
    var text='<thead><tr><th>编号</th><th>xlsx</th><th>sheet</th><th>查看</th></tr></thead>';
    text += '<tbody>'
    for (var i=0; i < global.setting.xlsxlist.length; ++i) {
        text += '<tr>';
        text += '<td>';
        text += (i+1).toString();
        text += '</td>';
        text += '<td>';
        text += global.setting.xlsxlist[i].xlsx;
        text += '</td>';
        text += '<td>';
        text += global.setting.xlsxlist[i].sheet;
        text += '</td>';
        text += '<td><a data-toggle="modal" data-target="#xlsx_info" onclick="return showXlsxInfo('+i.toString()+');"><span class="label label-info">查看</span></a></td>';
        text += '</tr>';
    }
    text += '</tbody>';
    document.getElementById("xlsx_table").innerHTML = text;
}

