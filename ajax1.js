window.$ = window.jQuery
window.jQuery = function(node){
    let nodes = {
        0: node,
        length: 1
    }
    return {
        addClass: function(){

        }
    }
}
window.jQuery.ajax = function(options){
    let {url,method,headers,body,success, fail} = {...options}
    let request = new XMLHttpRequest()
    request.open(method,url)//配置request
    for(var key in headers){
        request.setRequestHeader(key,headers[key])
    }
    request.send(body)
    request.onreadystatechange=function(){
        if(request.readyState===4){
            console.log('请求响应都完毕了')
            if(request.status>=200 && request.status<300){
                success(request.responseText)
            }else{
                success(request.responseText)
            }
        }
    }
}
my_ajax1.addEventListener('click',function(){
    jQuery.ajax({
        url:'/xxx/json',
        method:'post',
        headers:{'content-type':'json','vivien':18},
        body:{a:1,b:2},
        success:function(res){
            //解析json
            var res=JSON.parse(res)
            var note=res.note
            let writer=note.writer
            let to=note.to
            let content=note.content
            alert(`to:${to}\r\ncontent:${content}\r\writer:${writer}`)
        },
        fail:function(){

        }
    })
})