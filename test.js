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

var s = 'Hello';

function greet(name) {
	console.log(s + ', ' + name + '!');
}
module.exports = greet;

//函数greet()是我们在hello模块中定义的,你可能注意到最后一行是一个奇怪的赋值语句,他的意思是把函数greet作为
//把函数greet作为模块的输出暴露出去,这样其他模块就可以使用greet函数了


var greet = require('./hello');
var s = 'Michael';
greet(s); //Hello ,Michael!

// 一个模块想要对外暴露变量,可以用module.exports = variable, 一个模块要引用
//其他模块暴露的变量, 用var ref = require('module_name');就拿到了引用模块的变量

var s = 'global';

var module = {
	id: 'hello',
	exports: {}
};
var load = function (module) {
	//读取hello.js代码
	function greet(name) {
		....
	}
	return module.exports;
};
var exported = load(module);
//保存module
save(module,exported);

module.exports = function() {return 'foo';};

process === global.process 

process.cwd();

process.nextTick(function() {
	console.log('nextTick callback!');
})
console.log('nextTick was set!');

process.on('exit', function (code) {
	console.log('about to exit with code: ' + code);
});

if (typeof(window) === 'undefined') {
	console.log('node.js');
} else {
	console.log('browser');
}

$.getJSON('http://example.com/ajax',function(data) {
	console.log('IO结果返回后执行...');
})
console.log('不等待结果直接执行后续代码...')

var fs = require('fs');

fs.readFile('sample.txt', 'utf-8', function(err,data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
})

//当正常读取时,err参数是null,data参数是读取到的string,当读取错误时,err
//参数表示一个错误对象,data为undefined
//由于err是否为null就是判断是否出错的标志,所以通常的判断的逻辑总是
if (err) {
	// 出错了
} else {
	// 正常
}

try {
	var data = fs.readFileSync('sample.txt', 'utf-8');
	console.log(data);
} catch(err) {
	//出错了
}

var fs = require('fs');

var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log('ok.');
	}
})







