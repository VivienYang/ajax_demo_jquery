### 封装 jQuery.ajax
用原生js封装一个类似与jQuery.ajax的方法

#### 1. 封装一个 jQuery.ajax
```
jQuery.ajax(url,method,body,success, fail)
```

满足这种 API。


#### 2. 升级你的 jQuery.ajax 满足 Promise 规则
```
jQuery.ajax({
    url: '/xxx',
    method: 'get'
}).then(success, fail)
```