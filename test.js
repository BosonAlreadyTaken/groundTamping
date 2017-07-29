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

function sum() {
	return arr.reduce(functin(x, y) {
		return x + y;
	})
}
//

function lazy_sum(arr) {
	var sum = function() {
		return arr.reduce(x, y) {
			return x + y;
		}
	}
	return sum;
}
// 如果不需要立刻求和,而是在后面的代码中,根据需要再计算怎么办 可以不返回求和结果
// 而是返回求和函数 要注意的是 每次调用都会返回一个新的函数,即使传入相同的参数
// 返回闭包时牢记的一点就是: 返回函数不要引用任何循环变量,或者后续会发生变化的变量

function create_counter(initial) {
	var x = initial || 0;
	return {
		inc: function() {
			x += 1;
			return x;
		}
	}
}
// 在返回对象中,实现了一个闭包,该闭包携带了局部变量x,并且从外部代码根本无法访问到变量x,
// 闭包可以认为是携带状态的函数,并且他的状态可以完全对外隐藏起来
// 闭包还可以把多参数的函数变成单参数的函数,
function make_pow(n) {
	return function(x) {
		return Math.pow(x, n);
	}
}

x => x * x;
var obj = {
	birth: 1990,
	getAge: function() {
		var b = this.birth; // 1990
		var fn = () => new Date().getFullYear() - this.birth;
		// this 指向obj对象 有上下文决定 this已经按照词法作用域绑定了
	}
}

// 如果箭头函数内已经按照词法作用域绑定了,用call()或者apply()调用调用箭头函数时,无法对this进行绑定,即传入的参数被忽略


