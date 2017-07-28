/*
* @Author: sunpei
* @Date:   2017-07-09 16:10:45
* @Last Modified by:   sunpei
* @Last Modified time: 2017-07-09 18:03:17
*/

'use strict';

window.onload = function() {
  var music = document.getElementById('music');
  var audio = document.getElementsByTagName('audio')[0];
  var page1 = document.getElementById('page1'); 
  var page2 = document.getElementById('page2'); 
  var page3 = document.getElementById('page3'); 

  //手机端监听click是不合理的 click有300毫秒延迟 所以应该监听touch事件
  // music.onclick = function() {
  //   if (audio.paused) {
  //     audio.play();
  //     // this.setAttribute('class', 'play');
  //     this.style.animationPlayState = 'running'; 
  //   }else{
  //     audio.pause();
  //     // this.setAttribute('class', '');
  //     this.style.animationPlayState = 'paused';
  //   }
  // }
  music.addEventListener('touchstart',function() {
    if (audio.paused) {
      audio.play();
      this.setAttribute('class', 'play');
    }else {
      audio.pause();
      this.setAttribute('class', '');
    }
  }, false);

  //当音乐播放完,唱片也不再转动
  audio.addEventListener('ended', function() {
    music.setAttribute('class', '');
  }, false);

  page1.addEventListener('touchstart', function(e) {
    page1.style.display = 'none';
    page2.style.display = 'block';
    page3.style.display = 'block';
    page3.style.top = '100%';

    setTimeout(function() {
      page2.setAttribute('class', 'page fadeOut');
      page3.setAttribute('class' , 'page fadeIn');
    }, 5000)
  }, false);

};