window.jQuery.ajax2 = function({url,method,headers,body}){
    return new Promise(function(resolve,reject){
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
                    resolve(request.responseText)
                }else{
                    reject(request)
                }
            }
        }        

    })
}
my_ajax2.addEventListener('click',function(){
    jQuery.ajax2({
        url:'/xxx/json',
        method:'post',
        headers:{'content-type':'text/json','vivien':18},
        body:'{a:1,b:2}'
    }).then(
        (res)=>{//成功回调
            //解析json
            var res=JSON.parse(res)
            var note=res.note
            let writer=note.writer
            let to=note.to
            let content=note.content
            alert(`to:${to}\r\ncontent:${content}\r\writer:${writer}`)
        },
        (err_res)=>{//失败回调
            console.log('ajax请求失败回调')
            console.log(err_res)
        }
    )
})