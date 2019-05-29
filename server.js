var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]||8888

var server = http.createServer(function(request, response){
  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/
  if(path === '/'){
    var string = fs.readFileSync('./index.html','utf8')
    response.setHeader('Content-Type','text/html;charset=utf-8')
    response.write(string)
    response.end()
  }
  else if(path === '/ajax1.js'){
    var string = fs.readFileSync('./ajax1.js','utf8')
    response.setHeader('Content-Type','text/javascript')
    response.end(string)
  }
  else if(path === '/ajax2.js'){
    var string = fs.readFileSync('./ajax2.js','utf8')
    response.setHeader('Content-Type','text/javascript')
    response.end(string)
  }
  else if(path === '/xxx/json'){//返回符合json格式的字符串
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/json;charset=utf-8')
    response.write(`
    {
        "note":{
            "to":"Tove",
            "writer":"vivien",
            "heading":"Reminder",
            "content":"Don't forget me this weekend!"
        }        
    }
    `)
    response.end()
  }
  else{
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`
    {
        "error":"404 not found"   
    }
    `)
    response.end()
  }

  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)