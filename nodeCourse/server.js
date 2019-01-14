const http = require("http");
http.createServer(function(require,response){
    response.setHeader("Content-type","text/html; charset = utf-8");
    response.writeHeader(200,{"Content-type" : "text/html;charset = utf-8"});
    response.write("hahhha");
    response.end();
}).listen(8000);