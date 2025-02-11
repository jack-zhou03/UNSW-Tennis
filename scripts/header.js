/*
Add Load Events
*/
function addLoadEvent(a){var b=window.onload;if(typeof window.onload!='function'){window.onload=a}else{window.onload=function(){if(b){b()}a()}}}function addUnloadEvent(a){var b=window.onunload;if(typeof window.onunload!='function'){window.onunload=a}else{window.onunload=function(){if(b){b()}a()}}};


/*
 * DevotionSlideShow 1.0b.15
 *
 * Copyright (c) 2008 Devotion (www.devotion.com)
 * Date: 2008-10-21
 * Rev: 15
 */
 
(function($){var opt;$.fn.devotionSlideShow=function(options){opt=$.extend({},$.fn.devotionSlideShow.defaults,options);return this.each(function(){var container=$(this);container.find('div#slideshowloader').remove();var imageViewer=container.find('#imageviewer');var imageWidth=712;var imageHeight=234;var imageCount=imageViewer.find('li').size();var viewerWidth=imageWidth*imageCount;imageViewer.each(function(i){$(this).after('<div id="controllers"><ul></ul></div>');$(this).find('li').each(function(n){$(this).removeClass('hide').hide();var index=n+1;$('div#controllers ul').append('<li><a href="#" rel="'+index+'">'+index+'</a></li>');$(this).addClass('slide'+index)});$('div#controllers ul a').each(function(z){$(this).bind('click',function(){$(this).addClass('active').parent().parent().find('a').not($(this)).removeClass('active');var index=$(this).attr('rel');var currentSlide=$('#imageviewer').find('.active').removeClass('active');var newSlide=$('#imageviewer').find('.slide'+index);currentSlide.css('z-index','2');newSlide.css('z-index','1');currentSlide.fadeOut($.fn.devotionSlideShow.defaults.fadeTime);newSlide.show();newSlide.removeClass('hide').addClass('active');$.fn.devotionSlideShow.reset();return false})});$('div#controllers').css('z-index',$('#imageviewer').find('li').size()+5);$('div#controllers').find('a:first').addClass('active')});var directLinks=$('div#controllers ul');directLinks.before('<a href="#" id="previous">Previous</a>');directLinks.after('<a href="#" id="next">Next</a><a href="#" id="control" class="play">Play</a>');$('#previous').click(function(event){event.preventDefault();var currentSlide=$('#imageviewer').find('.active').removeClass('active');if(currentSlide.is('.slide1')){var newSlide=$('#imageviewer').find('li:last');$('div#controllers ul').find('.active').removeClass('active');$('div#controllers ul').find('a:last').addClass('active')}else{var newSlide=currentSlide.prev('li');$('div#controllers ul').find('.active').removeClass('active').parent().prev('li').find('a').addClass('active')}currentSlide.css('z-index','2');newSlide.css('z-index','1');currentSlide.fadeOut($.fn.devotionSlideShow.defaults.fadeTime);newSlide.show();newSlide.removeClass('hide').addClass('active');$.fn.devotionSlideShow.reset();return false});$('#next').click(function(event){event.preventDefault();var currentSlide=$('#imageviewer').find('.active').removeClass('active');if(currentSlide.is('.slide'+$('#imageviewer').find('li').size())){var newSlide=$('#imageviewer').find('li:first');$('div#controllers ul').find('.active').removeClass('active');$('div#controllers ul').find('a:first').addClass('active')}else{var newSlide=currentSlide.next('li');$('div#controllers ul').find('.active').removeClass('active').parent().next('li').find('a').addClass('active')}currentSlide.css('z-index','2');newSlide.css('z-index','1');currentSlide.fadeOut($.fn.devotionSlideShow.defaults.fadeTime);newSlide.show();newSlide.removeClass('hide').addClass('active');$.fn.devotionSlideShow.reset();return false});$('#control').click(function(event){event.preventDefault();if($(this).is('.play')){$.fn.devotionSlideShow.play()}else{$.fn.devotionSlideShow.pause()}return false});imageViewer.removeClass('hide');imageViewer.find('li:first').fadeIn($.fn.devotionSlideShow.defaults.fadeTime).addClass('active');if($.fn.devotionSlideShow.defaults.autoPlay){$.fn.devotionSlideShow.play()}else{$('#control').removeClass('pause').addClass('play').html('Play')}})};$.fn.devotionSlideShow.defaults={fadeTime:750,delay:8000,autoPlay:true,timer:null};$.fn.devotionSlideShow.play=function(){$('#control').removeClass('play').addClass('pause').html('Pause');opt.timer=setInterval(this.next,opt.delay)};$.fn.devotionSlideShow.pause=function(){$('#control').removeClass('pause').addClass('play').html('Play');clearInterval(opt.timer)};$.fn.devotionSlideShow.reset=function(){$('#control').removeClass('play').addClass('pause').html('Pause');clearInterval(opt.timer);opt.timer=setInterval($.fn.devotionSlideShow.next,opt.delay)};$.fn.devotionSlideShow.next=function(){var currentSlide=$('#imageviewer').find('.active').removeClass('active');if(currentSlide.is('.slide'+$('#imageviewer').find('li').size())){var newSlide=$('#imageviewer').find('li:first');$('div#controllers ul').find('.active').removeClass('active');$('div#controllers ul').find('a:first').addClass('active')}else{var newSlide=currentSlide.next('li');$('div#controllers ul').find('.active').removeClass('active').parent().next('li').find('a').addClass('active')}currentSlide.css('z-index','2');newSlide.css('z-index','1');currentSlide.fadeOut(opt.fadeTime);newSlide.show();newSlide.removeClass('hide').addClass('active')}})(jQuery);
$(window).bind("load",function(){if($('div#slideshow').length){$('div#slideshow').devotionSlideShow()}});