/*
* @Author: sunpei
* @Date:   2017-07-24 16:09:14
* @Last Modified by:   sunpei
* @Last Modified time: 2017-07-24 18:09:35
*/

'use strict';

;(function($) {
	var Carousel = function(poster) {
		this.setting = {
			"width": 1000,
			"height": 270,
			"posterWidth": 640,
			"posterHeight": 270,
			"scale": 0.9,
			"speed": 500,
			"verticalAlign": "middle"
		};
		
	};
	Carousel.prototype = {

	};
	Carousel.init = function(posters) {
		var _this = this;
		posters.each(function() {
			new _this($(this))
		})
	}
	window.Carousel = Carousel;
})(jQuery)