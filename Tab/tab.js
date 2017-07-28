/*
* @Author: sunpei
* @Date:   2017-07-24 10:51:46
* @Last Modified by:   sunpei
* @Last Modified time: 2017-07-24 14:16:00
*/

'use strict';
;(function($) {
	var Tab = function(tab) {
		var _this = this;

		//保存单个tab组件
		this.tab = tab;
		//默认配置参数
		this.config = {
			triggerType: 'moveover',
			effect: 'default',
			invoke: 1,
			//用来定义tab是否自动切换,当指定了时间间隔,就表示自动切换,并且切换时间为指定时间间隔
			auto: false
		}
		if (this.getConfig()) {
			$.extend(this.config,this.getConfig());
		};

		//保存tab标签列表
		this.tabItems = this.tab.find('ul.tab-nav li');
		this.contentItems = this.tab.find('.content-item');

		//保存到局部变量 减少查找 
		var config = this.config;

		if(config.triggerType === 'click') {
			this.tabItems.on(config.triggerType, function() {
				_this.invoke($(this));
			})
		} else if (config.triggerType === 'mouseover' || config.triggerType != 'click') {
			this.tabItems.on('mouseover', function() {
				_this.invoke($(this));
			})
		}

		this.timer = null;
		if (config.auto) {
			//计数器
			this.loop = 0;
			this.autoPlay();
			this.tab.hover(function() {
				window.clearInterval(_this.timer);
			}, function() {
				_this.autoPlay();
			})
		};

		//设置默认显示第几个tab
		if (config.invoke > 1 && config.invoke <= this.length) {
			this.invoke(this.tabItems.eq(config.invoke - 1));
		}
	};

	Tab.prototype = {
		autoPlay: function() {
			var _this = this;
			var tabItems = this.tabItems;
			var tabLength = tabItems.length;
			var config = this.config;
			this.timer = window.setInterval(function() {
				_this.loop++;
				if (_this.loop >= tabLength) {
					_this.loop = 0;
				}
				tabItems.eq(_this.loop).trigger(config.triggerType)
			},config.auto)
		},
		//获取配置参数的方法
		getConfig: function() {
			var config = this.tab.attr('data-config');
			// 现在config是string 
			if (config) {
				return JSON.parse(config);
			} else {
				return null;
			}
		},
		invoke: function(currentTab) {
			var _this = this;
			var index = currentTab.index();
			currentTab.addClass('active').siblings().removeClass('active');
			//有tab的索引 切换内容
			var effect = this.config.effect;
			var conItems = this.contentItems;
			if (effect === 'default' || effect != 'fade') {
				conItems.eq(index).addClass('current').siblings().removeClass('current');
			} else if (effect === 'fade') {
				conItems.eq(index).fadeIn().siblings().fadeOut();
			}

			//同步index 和 loop的值
			if (this.config.auto) {
				this.loop = index;
			}

		}
	};

	Tab.init = function(tabs) {
		var _this = this;
		tabs.each(function() {
			new _this($(this));
		})
	}

	//注册成jq方法
	$.fn.extend({
		tab: function() {
			this.each(function() {
				new Tab($(this));
			})
			return this;
		}
	})
	window.Tab = Tab;
})(jQuery)