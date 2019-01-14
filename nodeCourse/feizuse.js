const http =require("http");
//引入文件系统模块
const fs = require("fs");
http.createSever(function(require,response){
    response.setHeader("Content-type","text/plain;charset=utf-8");
    console.log("fdvsdfvsdv")
//读取文件内容
    fs.readFile("./file.txt","utf-8",function(error,data){
        console.log("fdvsdfvsdv")
        if(error){
            console.log(error.message);
        };
        console.log(data);
    });
    response.end();
}).listen(8181);
console.log("大家好")
console.log("大家好")
console.log("大家好")