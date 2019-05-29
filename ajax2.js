my_ajax2.addEventListener('click',function(){
    let request = new XMLHttpRequest()
    request.open('POST','/xxx/json')//配置request
    request.send()
    request.onreadystatechange=function(){
        console.log(request.readyState)
        if(request.readyState===4){
            console.log('请求响应都完毕了')
            if(request.status>=200 && request.status<300){
                console.log('说明请求成功')
                console.log(`响应的数据是${request.responseText}`)
                //解析json
                var string=request.responseText
                console.log(typeof(string))
                console.log(string)
                var res=JSON.parse(request.responseText)
                console.log(typeof(res))
                var note=res.note
                let writer=note.writer
                let to=note.to
                let content=note.content
                alert(`to:${to}\r\ncontent:${content}\r\writer:${writer}`)
            }else{
                console.log('说明请求失败')
            }
        }
    }
})