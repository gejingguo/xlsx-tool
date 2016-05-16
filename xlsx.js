/**
 * Created by 40431 on 2016/5/16.
 */

// 加载信息
exports.loadXlsxInfo = function (file, sheet) {
    var xlsx = require('node-xlsx');

    var obj = xlsx.parse(file);
    console.log(JSON.stringify(obj));
    console.log("obj length:", obj.length);
    for(var i = 0; i < obj.length; ++i) {
        if(obj[i].name == sheet) {
            console.log("name:", obj[i].name, "sheet:", sheet, obj[i].data.length);
            if(obj[i].data.length < 3) {
                return obj[i].data;
            }
            return obj[i].data;
        }
    }
    return null;
}