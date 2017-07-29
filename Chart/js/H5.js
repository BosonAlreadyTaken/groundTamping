/*
* @Author: showa11
* @Date:   2017-07-29 12:06:34
* @Last Modified by:   showa11
* @Last Modified time: 2017-07-29 18:32:24
*/

'use strict';
 
var H5 = function() {
	this.id = ('h5_' + Math.random()).replace('.','_');
	this.el = $('<div class="h5" id="' + this.id + '"></div>').hide();
	this.pages = []; 
	$('body').append(this.el)

// 新增一页
	this.addPage = function(name, text) {
		var page = $('<div class="h5_page section"></div>');
		if (name != undefined) {
			page.addClass('h5_page_' + name);
		}		
		if (text != undefined) {
			page.text(text);
		}
		this.el.append(page);
		this.pages.push(page);
		return this; 
	}

// 新增一个组件  
	this.addComponent = function(name,cfg) {
		var cfg = cfg || {};
		cfg = $.extend({type: 'base'},cfg);

		var component; // 定义一个变量, 存储组件元素
		var page = this.pages.slice(-1)[0];
		switch(cfg.type) {
			case 'base':
				component = new H5ComponentBase(name,cfg);
				break;
			default:
		}	

		page.append(component);
		return this;
	}
	// h5 对象初始化呈现
	this.loader = function () {
		this.el.fullpage({
			onLeave: function(index,nextIndex, direction) {
				$(this).find('.h5_component').trigger('onLeave');
			}, 
			afterLoad: function(anchorLink, index) {
				$(this).find('.h5_component').trigger('onLoad');
			}
		});
		this.pages[0].find('.h5_component').trigger('onLoad');
		this.el.show();
	}
	return this;
}