// 图片预加载
(function($) {
  function Preload(imgs,options) {
    this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;
    this.opts = $.extend({}, Preload.DEFAULTS, options);

    if (this.opts.order === 'ordered') {
      this._ordered();
    } else {
      this._unordered();  
    }
  }
  Preload.DEFAULTS = {
    order: 'unordered', //无序预加载
    each: null, // 没一张图片加载完执行
    all: null //所有图片加载完执行
  };

  Preload.prototype._ordered = function() {
    var count = 0;
    load();
    //有序预加载
    function load() {
      var imgObj = new Image();

      $(imgObj).on('load error', function() {
        if (count >= len) {
          //所有图片都已经加载完成
        } else {
          load();
        }
        count++;
      });
      imgObj.src = imgs[count];
    };
  };
  Preload.prototype._unordered = function() { // 无序加载
    var images = this.imgs;
    var opts = this.opts;
    var count = 0;
    var len = images.length;

    $.each(images, function(i, src) {
      if (typeof src != 'string') {return;}
      var imgObj = new Image();

      $(imgObj).on('load error', function() {
        count++;
        //下面这句不应该写死 作为插件来说
        //$progress.html(Math.round(count/len*100) + '%');

        opts.each && opts.each(count);

        if (count >= len - 1) {
          opts.all && opts.all();
        }
      })
      imgObj.src = src;
    })
  };

  $.extend({
    preload: function(imgs,opts) {
      new Preload(imgs,opts);
    }
  })
})(jQuery);