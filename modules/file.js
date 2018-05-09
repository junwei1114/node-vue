/**
 * Created by Administrator on 2018/5/5.
 */
var fs = require('fs');

exports.getAllAlbums = function(){
    fs.readdir("./uploads",function(err,files){
        if(err){
            callback("没有找到uploads文件",null);
        }
        var allAlbums = [];
        (function iterator(i){
            if(i == files.length){
                //遍历结束
                console.log(allAlbums);
                callback(null,allAlbums);
                return;
            }
            fs.stat("./uploads/" + files[i],function(err,stats){
                if(err){
                    callback("找不到文件" + files[i] , null);
                }
                if(stats.isDirectory()){
                    allAlbums.push(files[i]);
                }
                iterator(i + 1);
            });
        })(0);
    });
}


























