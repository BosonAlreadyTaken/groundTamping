request.open("post","create.php",true);
request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
request.send("name=Bosn&sex=man");

request.open("POST","create.php",ture);
request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
request.send("name=Bosn&sex=woman");

// 
XMLHttpRequest 发送请求 概念介绍 ----XMLHttpRequest 

responseXML 
responseText 
status 
readState属性  0: 请求未初始化 4:请求完成,且响应已 onreadystatechange 

var request = new XMLHttpRequest();
request.open("GET","get.php",true);

request.onreadystatechange = function() {
	if (request.readyState === 4 && request.status === 200) {
		//do something, request.responseText 
		request.responseText;

	}
}
request.send();
requesst.setRequestHeader()
JSON 是独立语言的 长度很短 json读取非常快 javascript 解析非常方便 
已经称为了事实上的标准 又安全又方便

var data = JSON.parse(request.responseText);
用jQuery实现Ajax 

Validation Plugin 
jquery.validate.js

digits 非负整数
confirm-password: 

validator .form element('#username') resetForm()
showErrors({username: "worm"})
submitHandler: function(form) {
	
}



