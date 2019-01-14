const http = require("http");
let s = 0;
http.createServer(function(require,response){
    s++;
    response.setHeader("Content-type","text/plain;charset=utf-8");
    response.write(s.toString());
    response.end();
}).listen(8585);