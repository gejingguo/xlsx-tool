/**
 * Created by 40431 on 2016/5/13.
 */

// 文件打开对话框
exports.showOpenDialog = function () {
    const remote = require('electron').remote;
    var fs = require('fs')
    remote.dialog.showOpenDialog({ properties: [ 'openFile']}, function(fileNames) {
        console.log(fileNames);
        if(fileNames === undefined) return;
        var fileName = fileNames[0]
        fs.readFile(fileName, 'utf-8', function (err, data) {
            if(err) {
                return;
            }
            console.log(data);
            try {
                //global.setting = eval('('+data+')');
                global.setting = JSON.parse(data);
                //var controller = require('./controller');
                showXlsxList();
            }
            catch (err) {
                //console.log(err);
                //var dialog = require('./dialog');
                //dialog.showConfirmDialog('文件格式不正确', err);
                alert("配置文件格式不正确");
            }
            //document.write(global.setting);
        });
    });
}