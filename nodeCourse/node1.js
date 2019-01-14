//引入http模块
const http = require("http");
const http1  = require("http");

//通过http模块创建服务器
const server = http.createServer(function(require,response){
    response.write("music");
    response.end();
});
server.listen(7777);

const server1 = http1.createServer(function(require,response){
    response.write("video");
    response.end();
});
server1.listen(8000);