/**
 * Created by 40431 on 2016/5/16.
 */

function showXlsxInfo(i){
    //alert(i);
    document.getElementById("xlsx_info_title").textContent = "test title";
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

