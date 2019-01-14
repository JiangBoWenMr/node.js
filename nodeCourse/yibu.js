//引入http模块
const http = require("http");
//使用http模块搭建node服务器
const server = http.createServer(function(require,response){
    //设置字符编码
    require.setHeader("Content-type","text/plain;charset=utf-8");
    //响应写入
    response.write("快放假了，好开心！");
    //响应结束
    response.end();
    console.log("123");
});

console.log("456");
server.listen(8080);