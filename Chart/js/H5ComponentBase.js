/*
* @Author: showa11
* @Date:   2017-07-29 10:02:48
* @Last Modified by:   showa11
* @Last Modified time: 2017-07-29 18:22:44
*/

'use strict';

var H5ComponentBase = function(name,cfg) {
	var cfg = cfg || {};
	var id = ('h5_c_' +  Math.random()).replace('.', '_'); 

	// 把当前的组件类型添加到样式中进行标记
	var cls = ' h5_component_' + cfg.type;
	var component = $('<div class="h5_component' + cls + ' h5_component_name_' + name + '" id="' + id +'">')
	// if (cfg.text) {
	// 	component.text(cfg.text)
	// }
	cfg.text && component.text(cfg.text);
	cfg.width && component.width(cfg.width/2);
	cfg.height && component.height(cfg.height/2);

	cfg.css && component.css(cfg.css);
	cfg.bg && component.css('backgroundImage', 'url(' + cfg.bg + ')');
	
	if (cfg.center === true) {
		component.css({
			marginLeft: (cfg.width/4 * -1) + 'px',
			left: '50%'
		});
	};
	// 自定义参数
	component.on('onLoad', function() {
		component.addClass(cls + '_load').removeClass(cls + '_leave'); 
		cfg.animateIn && component.animate(cfg.animateIn);
		return false;
	})
	component.on('onLeave', function() {
		component.addClass(cls + '_leave').removeClass(cls + '_load');
		cfg.animateOut && component.animate(cfg.animateOut);
		return false;
	})

	return component;
}