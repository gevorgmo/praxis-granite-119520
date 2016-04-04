/*
	Created by G.Manukyan 
	gevorgmo@gmail.com
*/
var _chanels=[
	{name:'start'},
	{name:'select_region'},
	{name:'channels'},
	{name:'Beauty & Fashion', presentation:'https://docs.google.com/a/google.com/presentation/d/1z1S0BGl9jmCNCxs3sSYeo9aLtktMdjOXSypFINakrj8/embed?start=false&loop=false&delayms=3000'}, 
	{name:'Comedy',  presentation:'https://docs.google.com/a/google.com/presentation/d/1o6o5K_9xTZ3gE4TGbGGHTnpJ1cIVqZczsUAWswL0qv0/embed?start=false&loop=false&delayms=3000'},
	{name:'Entertainment & Pop Culture',  presentation:'https://docs.google.com/a/google.com/presentation/d/13guVFi75ttuEbGzy7f1LNJhH_-FoZe5DmTtd8FSE2DM/embed?start=false&loop=false&delayms=3000'},
	{name:'Parenting & Family',  presentation:'https://docs.google.com/a/google.com/presentation/d/1KPPfeKDU3OOIvu5xQn8RYge1Ojz0EKnRXB7WJLHbctc/embed?start=false&loop=false&delayms=3000'},
	{name:'Music',  presentation:'https://docs.google.com/a/google.com/presentation/d/1vF6hmPJgpk8_P1qGplDVrlBVfKfz_DC1Q-S1tnyeFqk/embed?start=false&loop=false&delayms=3000'},
	{name:'Video Gaming',  presentation:'https://docs.google.com/a/google.com/presentation/d/1q1L1fWB37U74NI1EqbYHh0ds0wuhiKVQs_F0TMx6lak/embed?start=false&loop=false&delayms=3000'},
	{name:'Cars, Trucks & Racing',  presentation:'https://docs.google.com/a/google.com/presentation/d/1xILZwsvvjy73FxJ-7AGcwuGP5A2MjlzDNlwRiFWhu-o/embed?start=false&loop=false&delayms=3000'},
	{name:'Food & Recipes',  presentation:'https://docs.google.com/a/google.com/presentation/d/1N3BtxHzRTxdXHQK5bM_AYsSGS1VrOAxeKTvUFG98PCs/embed?start=false&loop=false&delayms=3000'},
	{name:'News',  presentation:'https://docs.google.com/a/google.com/presentation/d/1hJUiWbsiDrv8iALFejJsp5ik4cHowRfH8UXXB_tdKg0/embed?start=false&loop=false&delayms=3000'},
	{name:'Science & Education',  presentation:'https://docs.google.com/a/google.com/presentation/d/1oNkt8VQLYwEi1JO1P3qcbAeS27UYKmbtV9rKF501WkQ/embed?start=false&loop=false&delayms=3000'},
	{name:'Sports',  presentation:'https://docs.google.com/a/google.com/presentation/d/1ftrYfa5owGlnckiakD-xyMoSnM7Qe2cjzjsXQN3OVWc/embed?start=false&loop=false&delayms=3000'},
	{name:'Technology',  presentation:'https://docs.google.com/a/google.com/presentation/d/1Yz9qnWBedQewjHr93iwyHYCRaRP3rUV2WDJJ7qmgEM8/embed?start=false&loop=false&delayms=3000'},
	{name:'Spanish Language',  presentation:'https://docs.google.com/a/google.com/presentation/d/12TpGGXRRi3162AxWBf9FDggo6BZZPVCL_SYCD1-bxGQ/embed?start=false&loop=false&delayms=3000'},
	{name:'Breakout Videos', presentation:'https://docs.google.com/a/google.com/presentation/d/1naZw4b3h0tu4SQt2QoCV6_8aHO5fJcty7xC9IOTklYg/embed?start=false&loop=false&delayms=3000'},
	{name:'End',  presentation:'https://docs.google.com/a/google.com/presentation/d/1YMeqr_zkidiy0eC7IJyKnJNfqhVJTh_bKJT668APrQ4/embed?start=false&loop=false&delayms=3000'},
	{name:'fashion2',  presentation:'https://docs.google.com/a/google.com/presentation/d/1H7Nk55_FsUfRvMLSrcdAmtJ-TA81TCPkYjQrnfoW68s/embed?start=false&loop=false&delayms=3000'},
	{name:'fashion3',  presentation:'https://docs.google.com/a/google.com/presentation/d/1rZNmG6g7yX1hM07KYnCMZSMGkPelbz6cv7wDewzHBFU/embed?start=false&loop=false&delayms=3000'},
	{name:'comedy1',  presentation:'https://docs.google.com/a/google.com/presentation/d/1S81a_iL3O7rAuI1F36zu4D5r03yi1kTFlsfoU09DIJg/embed?start=false&loop=false&delayms=3000'},
	{name:'comedy2',  presentation:'https://docs.google.com/a/google.com/presentation/d/1pXdgmAvGHCLKycM5o8EUG4J98XXSzs4IwOSHJ0xj82I/embed?start=false&loop=false&delayms=3000'},
	{name:'comedy3',  presentation:'https://docs.google.com/a/google.com/presentation/d/1izlcxY6wAFrvSvlBt3OdHXH3pdMSVfp_GeMkxWNCr1E/embed?start=false&loop=false&delayms=3000'},
	{name:'entertainment1',  presentation:'https://docs.google.com/a/google.com/presentation/d/1Q996bk8mPDGsa9vAWi7-AscJAuP9DWkyeDI29ZOMW5k/embed?start=false&loop=false&delayms=3000'},
	{name:'entertainment2',  presentation:'https://docs.google.com/a/google.com/presentation/d/1lS0XV48pGfShU8cZ5nL10IvbaGxFDgP-SCI5iexJyvA/embed?start=false&loop=false&delayms=3000'},
	{name:'entertainment3',  presentation:'https://docs.google.com/a/google.com/presentation/d/1lBCYyE0EilTApebzxgfTX6CPjsCLCZ2pFQ7n3-Ym2Ks/embed?start=false&loop=false&delayms=3000'},
	{name:'family1',  presentation:'https://docs.google.com/a/google.com/presentation/d/17anuUTNlFWsdJ7JjN1Ds7aX_meGXz2wmDO-aPa9Knv8/embed?start=false&loop=false&delayms=3000'},
	{name:'family2',  presentation:'https://docs.google.com/a/google.com/presentation/d/1MoyXoPqnlPQNxy4l-i3Dk7RRu3C-4gWZO8Lb4r2uOcU/embed?start=false&loop=false&delayms=3000'},
	{name:'family3',  presentation:'https://docs.google.com/a/google.com/presentation/d/1k6iW3LS9FnzGd835kUDrivgT-wDrSxY0opbQi8i7RpQ/embed?start=false&loop=false&delayms=3000'},
	{name:'music1',  presentation:'https://docs.google.com/a/google.com/presentation/d/1kjoXoQGsWlkyBmBzGdHwmQHikIVLTbNbkg14mqSKkp8/embed?start=false&loop=false&delayms=3000'},
	{name:'music2',  presentation:'https://docs.google.com/a/google.com/presentation/d/193VAGvhGA00FMCT6oBwyO2McHSS2ThrIZ_xRs7Fi3ts/embed?start=false&loop=false&delayms=3000'},
	{name:'music3',  presentation:'https://docs.google.com/a/google.com/presentation/d/1Ffa-7pEa8xa_gA55LaODOnuPM26sTKcjSroFj5lMXnE/embed?start=false&loop=false&delayms=3000'},
	{name:'gaming1',  presentation:'https://docs.google.com/a/google.com/presentation/d/1n9PYHzTDObJLLd7axibVxUAXPZDAM2Y7COZODFMEKWw/embed?start=false&loop=false&delayms=3000'},
	{name:'gaming2',  presentation:'https://docs.google.com/a/google.com/presentation/d/1-_9b61mxWhK8VtCatQ7r6pYM61lDS2esKHNEkIwmL3o/embed?start=false&loop=false&delayms=3000'},
	{name:'gaming3',  presentation:'https://docs.google.com/a/google.com/presentation/d/1azcJZFMbVNlQ_qPqmfaSiuXyB8NHS1dB5VI1-I1Hii0/embed?start=false&loop=false&delayms=3000'},
	{name:'cars1',  presentation:'https://docs.google.com/a/google.com/presentation/d/1ADNIICZ3ovMLcsMkls86gIOFtujVrZsvEP0B1Mtwhi4/embed?start=false&loop=false&delayms=3000'},
	{name:'cars2',  presentation:'https://docs.google.com/a/google.com/presentation/d/1a2inQ6Aszsk8he26-5mqi4re72ndS2gynuxU4L8mZog/embed?start=false&loop=false&delayms=3000'},
	{name:'cars3',  presentation:'https://docs.google.com/a/google.com/presentation/d/18SG_5vk2TNPO9O0QkV0jhJK8dLyot0ZAVY2jKp5N-7g/embed?start=false&loop=false&delayms=3000'},
	{name:'food1',  presentation:'https://docs.google.com/a/google.com/presentation/d/1ZXSMTYo_c8EZReUdRwDlVQqGGOPANfa5VVV8gdvPVB8/embed?start=false&loop=false&delayms=3000'},
	{name:'food2',  presentation:'https://docs.google.com/a/google.com/presentation/d/1_8rPirBPDOdjHa7qIOohzrmBG_5FJNN8vg__kfj7qmk/embed?start=false&loop=false&delayms=3000'},
	{name:'food3',  presentation:'https://docs.google.com/a/google.com/presentation/d/1oeOj0Rc9CPuZ3O3WRmG2iUhuRKOo-e3XPW3tUykBYkQ/embed?start=false&loop=false&delayms=3000'},
	{name:'news1',  presentation:'https://docs.google.com/a/google.com/presentation/d/1THZjrYP4eYLnHBdTg8V-j1ckHZNO0L9kgn2myG3HRdc/embed?start=false&loop=false&delayms=3000'},
	{name:'news2',  presentation:'https://docs.google.com/a/google.com/presentation/d/1ejwRzjsaTvShvgEJk6PkEv7Eh07_0AwCpnD3WoBiF5A/embed?start=false&loop=false&delayms=3000'},
	{name:'news3',  presentation:'https://docs.google.com/a/google.com/presentation/d/1FG1MUC19crvDsfV9PnZzGE-EJvCm6zDrTGRhiZa-6e4/embed?start=false&loop=false&delayms=3000'},
	{name:'science1',  presentation:'https://docs.google.com/a/google.com/presentation/d/1a4GvVsnQPDeTNVeC3xz8G3Gl0vGSfoqXCHlEvHk0o7c/embed?start=false&loop=false&delayms=3000'},
	{name:'science2',  presentation:'https://docs.google.com/a/google.com/presentation/d/1G9oH9NlrRaNcXsVktL7QiMmve-Ec4443zDRJ3RM504M/embed?start=false&loop=false&delayms=3000'},
	{name:'science3',  presentation:'https://docs.google.com/a/google.com/presentation/d/1e1e5i4iduIP-wSUXdAflDQByM7T1Ae0DIIJf0xeHhsE/embed?start=false&loop=false&delayms=3000'},
	{name:'sports1',  presentation:'https://docs.google.com/a/google.com/presentation/d/1qulNpiCo4unxzcKC3Kk4eClwMFXExwgilGADHb2Z_9s/embed?start=false&loop=false&delayms=3000'},
	{name:'sports2',  presentation:'https://docs.google.com/a/google.com/presentation/d/1hQsBpj19k8LI2BukdDyMuYMg7JQMPe9VZskO8WU3lsA/embed?start=false&loop=false&delayms=3000'},
	{name:'sports3',  presentation:'https://docs.google.com/a/google.com/presentation/d/1dtiFKvE2EyTJ69S-MrDMsxHPRgvMDiUi1Dhl0r8zAdY/embed?start=false&loop=false&delayms=3000'},
	{name:'technology1',  presentation:'https://docs.google.com/a/google.com/presentation/d/1PXHoeoeeTZXe3w1Fb-U8_ik47YqT8yv1qCfQkpvzFak/embed?start=false&loop=false&delayms=3000'},
	{name:'technology2',  presentation:'https://docs.google.com/a/google.com/presentation/d/1js5H7cBWtx2T6caGRm0AKOo2lJBzWmQk0Siho4_rTEs/embed?start=false&loop=false&delayms=3000'},
	{name:'technology3',  presentation:'https://docs.google.com/a/google.com/presentation/d/1xKjkGwqjMx90oz3W2U9fC8egPZpNKuu9qM6vWds5FUo/embed?start=false&loop=false&delayms=3000'},
	{name:'spanish1',  presentation:'https://docs.google.com/a/google.com/presentation/d/1bjdhXyj_49HWjefVqqoJTPvE_gv_LtXp3r9JxzsvE7o/embed?start=false&loop=false&delayms=3000'},
	{name:'spanish2',  presentation:'https://docs.google.com/a/google.com/presentation/d/1IokWuitgVeGok3mwKnEFZ1kuIlWrhzLJmwBekKCN7yM/embed?start=false&loop=false&delayms=3000'},
	{name:'spanish3',  presentation:'https://docs.google.com/a/google.com/presentation/d/1_HulVWMujus3SrB_sJIWZC35yte652EijdAJlYsreuc/embed?start=false&loop=false&delayms=3000'},
	{name:'trending1',  presentation:''},
	{name:'trending2',  presentation:''},
	{name:'trending3',  presentation:''}
];
var _isfullxcreen=false;
var _curPage=0;
var _hash = window.location.hash;
var _firstTimeAnimation=true;
var _startfirstTimeAnimatione=false;
var _firstTimeAnimationDown=true;
var _homapageanimation=setInterval(function() {
	if(_startfirstTimeAnimatione){
		if(_firstTimeAnimationDown){
			_firstTimeAnimationDown=false;
			$('.magazine').turn('peel', 'tr', true); 
		}else {
			_firstTimeAnimationDown=true;
			$('.magazine').turn('stop', null, true); 
		}
	}
}, 800);


function StopHomeAnimation(){
	if (_firstTimeAnimation) {
		_firstTimeAnimation=false;
		clearInterval(_homapageanimation);
	}
}
	
function AnimateOnPage(_p){
	
	if($('.magazine .p' + _p).hasClass('pageloaded') && !$('.magazine .p' + _p+' .page-bg').hasClass('pageanimated')){	
		if (_p==1) { 			
			setTimeout(function(){ $('.page1_element1').css('opacity', '1'); }, 500);
			setTimeout(function(){ $('.page1_element2').css('opacity', '1'); }, 1000);
			setTimeout(function(){_startfirstTimeAnimatione=true;}, 1500);
			$('.magazine .p' + _p+' .page-bg').addClass('pageanimated');
		} else if (_p==2 || _p==3) { 
			setTimeout(function(){ $('.regions').css('opacity', '0.5'); }, 500);
			setTimeout(function(){ $('.page2_element2').css('opacity', '1'); },1000);
			$('.magazine .p' + _p+' .page-bg').addClass('pageanimated');
			setTimeout(function(){_startfirstTimeAnimatione=true;}, 1500);
		} else if (_p==4 || _p==5) { 
			setTimeout(function(){ $('.page4_element1').css('opacity', '1'); }, 500);
			$('.magazine .p' + _p+' .page-bg').addClass('pageanimated');
			setTimeout(function(){_startfirstTimeAnimatione=true;}, 1500);
		} else if(_p>=6 && _p!=34){		
			var dest1,dest2;
			if(_p%2==1){ 
				dest1=_p-1; 
				dest2=_p;
			} else {
				dest1=_p,
				dest2=_p+1;
			}
			if($('.magazine .p' + dest1).hasClass('pageloaded') && !$('.magazine .p' + dest1+' .page-bg').hasClass('pageanimated') && $('.magazine .p' + dest2).hasClass('pageloaded') && !$('.magazine .p' + dest2+' .page-bg').hasClass('pageanimated')){
				$('.magazine .p' + dest1+' .page-bg').addClass('pageanimated');
				$('.magazine .p' + dest2+' .page-bg').addClass('pageanimated');
				setTimeout(function(){ $('.magazine .p' + dest1+' .page-bg .page_person_element_l').css('opacity', '1');  $('.magazine .p' + dest2+' .page-bg .page_person_element_r').css('opacity', '1');}, 500);	
				setTimeout(function(){ 
					$('.magazine .p' + dest1+' .page-bg .page_title_element').css('opacity', '1'); 
					$('.magazine .p' + dest2+' .page-bg .page_title_element').css('opacity', '1'); 
					$('.magazine .p' + dest1+' .page-bg .page_title_element_2').css('opacity', '1'); 
					$('.magazine .p' + dest2+' .page-bg .page_title_element_2').css('opacity', '1'); 
				},1000);
				if(_lineupFirstTime){
					_lineupFirstTime=false;
					setTimeout(function(){ 
						$('#page'+dest2+'-it1').addClass('notactive');
						$('#page'+dest2+'-it2').addClass('notactive');
						$('#page'+dest2+'-it3').addClass('notactive');
						$('#page'+dest2+'-it4').addClass('notactive');	
					},2500);
					setTimeout(function(){ $('#page'+dest2+'-it1').removeClass('notactive'); },4500);
					setTimeout(function(){ $('#page'+dest2+'-it2').removeClass('notactive'); },5000);
					setTimeout(function(){ $('#page'+dest2+'-it3').removeClass('notactive'); },5500);
					setTimeout(function(){ $('#page'+dest2+'-it4').removeClass('notactive'); },6000);
					setTimeout(function(){_startfirstTimeAnimatione=true;}, 7500);
					if(_hash!=""){
						_hash=parseInt(_hash.substr(6));
						if(!isNaN(_hash)) {
							if(_chanels[_hash]){
								setTimeout(function(){ 
									$('.magazine').turn('disable', true);
									$('.chanel_popup_iframe').html('<iframe src="'+_chanels[_hash].presentation+'" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" class="chanel_popup_iframe_cont"></iframe>');
									$('.chanel_popup_iframe_cont').css({"height":($('.chanel_popup_cont').height()+30)+"px"});
									$('.chanel_popup').css({'display':'block'});
									$('.chanel_popup_bg').css({'opacity':'0.8'});
									$('.chanel_popup_cont').css({'top':'50%'});
									var _srt=_chanels[_hash].presentation.split('/')[7];
									$('.chanel_popup_links_pdf').attr('href', 'https://docs.google.com/presentation/d/'+_srt+'/export/pdf');
									$('.chanel_popup_links_slide').attr('href', 'https://docs.google.com/presentation/d/'+_srt);
									window.location.hash = "#slide"+_hash;
								},6000);
							}
						}
					}
				} 
			}
		} else if(_p==34){
			$('.magazine .p' + _p+' .page-bg').addClass('pageanimated');
			setTimeout(function(){ $('.magazine .p34 .page-bg .page_title_element_2').css('opacity', '1');},500);
			setTimeout(function(){ $('.magazine .p34 .page-bg .page_text_left').css('opacity', '1');},1000);
			setTimeout(function(){ $('.magazine .p34 .page-bg .page_end_button').css('opacity', '1');},1000);
		}
	}
	
	if (_p!=1) { 
		$('.control_bar').fadeIn(500);
	}else {
		$('.control_bar').fadeOut(500);
	}

	if(_p==1){
		$('.select_region').hide();
		$('.select_chanel').hide();
		$('.change_chanel').hide();
	} else  if(_p<4){
		$('.select_region').html('Choose Your Market');
		$('.select_region').show();
		$('.select_chanel').hide();
		$('.change_chanel').hide();
	}else  if(_p<6){
		$('.select_region').html('Choose Your Market &gt');
		$('.select_chanel').html('US Channel Lineups');
		$('.select_region').show();
		$('.select_chanel').show();
		$('.change_chanel').hide();
	}else  if(_p>=6){
		$('.select_region').html('Choose Your Market &gt');
		$('.select_chanel').html('US Channel Lineups &gt');
		$('.chanel_title').html(_chanels[parseInt(_p/2, 10)].name);
		$('.chanels_list ul li').removeClass('selected');
		$('#chanelid'+parseInt(_p/2-2, 10)).addClass('selected');
		$('.select_region').show();
		$('.select_chanel').show();
		$('.change_chanel').show();
		$('.chanel_title_bg_mask').css('width',($('.chanel_title').width()+55)+'px');
		if(_curPage>=6) {
			var _src=$('.magazine .p' + _curPage+' .page-bg>.video_small').attr('src');
			$('.magazine .p' + _curPage+' .page-bg>.video_small').attr('src','');
			$('.magazine .p' + _curPage+' .page-bg>.video_small').attr('src',_src);
		}
		_curPage=_p%2==0 ? _p : _p-1;
	}
	
}


function loadPage(page) {
	$.ajax({url: 'pages/page' + page + '.html'}).
		done(function(pageHtml) {
			$('.magazine .p' + page).html(pageHtml);
			$('.magazine .p' + page).addClass('pageloaded');
			resizeElements($('.magazine').width(), $('.magazine').height());
			$('.magazine .p' + page+' .page-bg').css("opacity","1");			
			var dest1=page,
				dest2=page,
				pnow=$('.magazine').turn('page'),
				pall=$('.magazine').turn('pages');
			if(page!=1 && page!=pall){
				if(page%2==1){ 
					dest1=page-1; 
					dest2=page;
				} else {
					dest1=page,
					dest2=page+1;
				}
			}
			if(pnow==page || (pnow==dest1 && dest2==page)  || (pnow==dest2 && dest1==page)) {
				AnimateOnPage(page);
			}

	});
}

function addPage(page, book) {
	var id, pages = book.turn('pages');
	if (!book.turn('hasPage', page)) {
		var element = $('<div />').
			html('<div class="loader"></div>');
		if (book.turn('addPage', element, page)) {
			loadPage(page);
		}
	}
}


function isChrome() {
	return navigator.userAgent.indexOf('Chrome')!=-1;
}

function numberOfViews(book) {
	return book.turn('pages') / 2 + 1;
}


function getViewNumber(book, page) {
	return parseInt((page || book.turn('page'))/2 + 1, 10);
}




function resizeViewport() {
	$('.magazine').removeClass('animated');
	var width = $(window).width(),
		height = $(window).height(),
		options = $('.magazine').turn('options');
		var bound = calculateBound({
			width: options.width,
			height: options.height,
			boundWidth: Math.min(options.width, (width-30)),
			boundHeight: Math.min(options.height, (height-146))
		});

		if (bound.width%2!==0)
			bound.width-=1;
			
		if (bound.width!=$('.magazine').width() || bound.height!=$('.magazine').height()) {
			$('.magazine').turn('size', bound.width, bound.height);
		}
		$('.magazine').css({"top": -bound.height/2+14+"px", "left": -bound.width/2+"px"});
	var magazineOffset = $('.magazine').offset(),
		boundH = height - magazineOffset.top - $('.magazine').height();
		
	$('.magazine').addClass('animated');
	
	resizeElements($('.magazine').width(), $('.magazine').height());
	
}

function calculateBound(d) {
	var bound = {width: d.width, height: d.height};
	if (bound.width>d.boundWidth || bound.height>d.boundHeight) {
		var rel = bound.width/bound.height;
		if (d.boundWidth/rel>d.boundHeight && d.boundHeight*rel<=d.boundWidth) {
			bound.width = Math.round(d.boundHeight*rel);
			bound.height = d.boundHeight;
		} else {
			bound.width = d.boundWidth;
			bound.height = Math.round(d.boundWidth/rel);
		}
	}
	return bound;
}


function resizeElements(_width, _height){
	if((document.fullScreenElement && document.fullScreenElement !== null) ||  (document.mozFullScreen || document.webkitIsFullScreen)){
		_isfullxcreen=true;
	} else {
		_isfullxcreen=false;
	}
	if(!_isfullxcreen){
		var _ktf,_ktf1,_ktf2;
		if(_width<1400 || _height<932){
			_ktf1=_width/1400;
			_ktf2=_height/932;
			_ktf=_ktf2<_ktf1 ? _ktf2 : _ktf1;
		} else if(_width==1400 && _height==932){
			_ktf=1;
		} else {
			_ktf=_width/1400;
		}
		$('.chanel_popup_buttons').show();
		$('.magazine-viewport .page-wrapper, .magazine-viewport .page').css({'border-radius':(_ktf*8)+'px','-webkit-border-radius':(_ktf*8)+'px','-moz-border-radius':(_ktf*8)+'px', '-ms-border-radius':(_ktf*8)+'px','-o-border-radius':(_ktf*8)+'px'});
		$('.page-itm-txt').css({"font-size":(_ktf*28)+"px","line-height":(_ktf*28)+"px"});
		$('.video_small').css({'width':(_ktf*474)+'px','height':(_ktf*267)+'px'});
		$('.page-itm-img').css({'width':(_ktf*152)+'px','height':(_ktf*152)+'px','border-width':(_ktf*5)+'px'});
		$('.page-button-red').css({"font-size":(_ktf*12)+"px","line-height":(_ktf*37)+"px"});
		$('.page-button-red img').css({'width':(_ktf*12)+'px','height':(_ktf*12)+'px'});
		$('.regions').css({"font-size":(_ktf*25)+"px"});
		$('.regions span').css({"font-size":(_ktf*14)+"px"});
		$('.triangle p').css({"border-width":(_ktf*21)+"px 0px "+(_ktf*21)+"px "+(_ktf*38)+"px"});
		$('.triangle').css({"width":Math.ceil(_ktf*205)+"px","height":Math.ceil(_ktf*215)+"px" });
		$('.triangle-item span').css({"font-size":(_ktf*22)+"px","line-height":(_ktf*28)+"px"});
		$('.page-item-triangle p').css({"border-width":(_ktf*21)+"px 0px "+(_ktf*21)+"px "+(_ktf*38)+"px"});
		$('.page-item-triangle').css({"width":(_ktf*142)+"px","height":(_ktf*146)+"px" });
		$('.page-item-triangle-last').css({"width":(_ktf*234)+"px","height":(_ktf*244)+"px" });
		$('.page-item span').css({"font-size":(_ktf*24)+"px"});
		$('.chanel_popup_cont').css({"width":(_ktf*1308)+"px","height":(_ktf*735)+"px", "margin" : "-"+(_ktf*735)/2+"px 0 0 -"+(_ktf*1308)/2+"px" });
		$('.chanel_popup_iframe_cont').css({"height":(_ktf*735+30)+"px"});
		$('.page_text_left').css({"font-size":(_ktf*20)+"px"});
		$('.chanel_popup_close').css({"width":(_ktf*25)+"px","height":(_ktf*25)+"px" });
		$('.chanel_popup_title').css({"font-size":(_ktf*24)+"px","line-height":(_ktf*37)+"px"});
		$('.chanel_popup_links').css({"font-size":(_ktf*13)+"px", "line-height":(_ktf*37)+"px", "padding":"0 "+(_ktf*20)+"px", "margin-left":(_ktf*20)+"px"});
		$('.page_end_button a').css({"font-size":(_ktf*24)+"px","padding":(_ktf*10)+"px "+(_ktf*20)+"px"});
		$('.page_end_button p').css({"font-size":(_ktf*24)+"px"});
		$('.video_small_title').css({"font-size":(_ktf*24)+"px"});
		$('.page1_element2_title').css({"font-size":(_ktf*20)+"px", 'padding-left':(_ktf*39)+"px"});
		$('.page2_element2').css({"font-size":(_ktf*60)+"px"});
		$('.page_right_list_title1,.page_right_list_title2').css({"font-size":(_ktf*22)+"px"});
		$('.page_title_element_big').css({"font-size":(_ktf*60)+"px"});
		$('.page_title_element_small').css({"font-size":(_ktf*30)+"px"});
		$('.chanel_title_bg_mask').css('width',($('.chanel_title').width()+55)+'px');
		cw=_width/2;
		ch=_height;
		$('.video-canvas').css({"width": cw+"px","height": ch+"px"});
		$('.video-canvas').css({"width": cw+"px","height": ch+"px"});
		
	} else {
		var _ktf=$(window).width()/1308;
		$('.chanel_popup_buttons').hide();
		$('.chanel_popup_cont').css({"width":(_ktf*1308)+"px","height":(_ktf*735)+"px", "margin" : "-"+(_ktf*735)/2+"px 0 0 -"+(_ktf*1308)/2+"px" });
		$('.chanel_popup_iframe_cont').css({"height":(_ktf*735+30)+"px"});
		$('.chanel_popup_close').css({"width":(_ktf*25)+"px","height":(_ktf*25)+"px" });
		$('.chanel_popup_title').css({"font-size":(_ktf*24)+"px","line-height":(_ktf*37)+"px"});
		$('.chanel_popup_links').css({"font-size":(_ktf*13)+"px", "line-height":(_ktf*37)+"px", "padding":"0 "+(_ktf*20)+"px", "margin-left":(_ktf*20)+"px"});
	}
}


$("body").on("click", "#region2, #XMLID_144_, #XMLID_179_, .select_chanel", function(event) {
	$('.magazine').turn('page', 4);
});

$("body").on("click", ".select_region", function(event) {
	$('.magazine').turn('page', 2);
});

$("body").on("click", ".chanel_popup_links_fullscreen", function(event) {
	toggleFull();
});

$("body").on("click", ".chanels_list ul li", function(event) {
	var _page=(parseInt($(this).attr('id').substr(8))+2)*2;
	$('.magazine').turn('page', _page);
});

$("body").on("click", ".triangle-item", function(event) {
	var _page=(parseInt($(this).attr('data-id').substr(8))+2)*2;
	$('.magazine').turn('page', _page);
});
 
$("body").on("click", ".page-item", function(event) {
	$('.magazine').turn('disable', true);
	var _index=parseInt($(this).attr('id').substr(12))+3;
	$('.chanel_popup_iframe').html('<iframe src="'+_chanels[_index].presentation+'" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" class="chanel_popup_iframe_cont"></iframe>');
	$('.chanel_popup_iframe_cont').css({"height":($('.chanel_popup_cont').height()+30)+"px"});
	$('.chanel_popup').css({'display':'block'});
	$('.chanel_popup_bg').css({'opacity':'0.8'});
	$('.chanel_popup_cont').css({'top':'50%'});
	var _srt=_chanels[_index].presentation.split('/')[7];
	$('.chanel_popup_links_pdf').attr('href', 'https://docs.google.com/presentation/d/'+_srt+'/export/pdf');
	$('.chanel_popup_links_slide').attr('href', 'https://docs.google.com/presentation/d/'+_srt);
	window.location.hash = "#slide"+_index;
	var _src=$('.magazine .p' + _curPage+' .page-bg>.video_small').attr('src');
	$('.magazine .p' + _curPage+' .page-bg>.video_small').attr('src','');
	$('.magazine .p' + _curPage+' .page-bg>.video_small').attr('src',_src);
}); 
 
$("body").on("click", ".chanel_popup_close", function(event) {
	$('.chanel_popup_bg').css({'opacity':'0'});
	$('.chanel_popup_cont').css({'top':'-80%'});
	setTimeout(function(){
		$('.chanel_popup').css({'display':'none'}); 
		$('.chanel_popup_iframe').html(''); 
		$('.magazine').turn('disable', false); 
		window.location.hash = "";
	},500)
});  
 

 
$("body").on("mouseover",'.regions',  function() {
    var _id=$(this).attr('data-id'); 
	$('#regions_hover2').css({'opacity':'0'});
	$('#XMLID_144_,#XMLID_179_').css({'fill':'#ffffff','fill-opacity':'1'});
	$('#XMLID_266_,#XMLID_828_,#XMLID_828_2,#XMLID_825_,#XMLID_825_2,#XMLID_114_,#XMLID_876_,#XMLID_759_,#XMLID_1297_,#XMLID_607_').css({'fill':'#ffffff','fill-opacity':'0.2'});
	$(this).addClass('hovered');
	if(_id=="XMLID_144_"){
		$('#XMLID_144_').css({'fill-opacity':'0'});
		$('#XMLID_179_').css({'fill-opacity':'0'});
		$('#regions_hover2').css({'opacity':'1'});
	} else 	if(_id=="XMLID_828_"){
		$('#XMLID_828_').css({'fill':'#87e8e9','fill-opacity':'1'});
		$('#XMLID_828_2').css({'fill':'#87e8e9','fill-opacity':'1'});
	} else 	if(_id=="XMLID_825_"){
		$('#XMLID_825_').css({'fill':'#87e8e9','fill-opacity':'1'});
		$('#XMLID_825_2').css({'fill':'#87e8e9','fill-opacity':'1'});
	} else {
		$('#'+_id).css({'fill':'#87e8e9','fill-opacity':'1'});
	}
});


 
$("body").on("mouseover",'#map_hover1 path, #map_hover2 polygon, #map_hover2 path, #map_hover2 polygon',  function() {
    var _id=$(this).attr('id'); 
	$('#regions_hover2').css({'opacity':'0'});
	$('#XMLID_144_,#XMLID_179_').css({'fill':'#ffffff','fill-opacity':'1'});
	$('#XMLID_266_,#XMLID_828_,#XMLID_828_2,#XMLID_825_,#XMLID_825_2,#XMLID_114_,#XMLID_876_,#XMLID_759_,#XMLID_1297_,#XMLID_607_').css({'fill':'#ffffff','fill-opacity':'0.2'});
	$('.regions').removeClass('hovered');
	
	if(_id=="XMLID_144_" || _id=="XMLID_179_"){
		$('#XMLID_144_').css({'fill-opacity':'0'});
		$('#XMLID_179_').css({'fill-opacity':'0'});
		$('#regions_hover2').css({'opacity':'1'});
		$('#region2').addClass('hovered');
	}else if(_id=="XMLID_114_"){
		$("#XMLID_114_").css({'fill':'#87e8e9','fill-opacity':'1'});
		$('#region1').addClass('hovered');
	}else if(_id=="XMLID_266_"){
		$("#XMLID_266_").css({'fill':'#87e8e9','fill-opacity':'1'});
		$('#region3').addClass('hovered');
	}else if(_id=="XMLID_828_" || _id=="XMLID_828_2"){
		$("#XMLID_828_").css({'fill':'#87e8e9','fill-opacity':'1'});
		$("#XMLID_828_2").css({'fill':'#87e8e9','fill-opacity':'1'});
		$('#region4').addClass('hovered');
	}else if(_id=="XMLID_825_" || _id=="XMLID_825_2"){
		$("#XMLID_825_").css({'fill':'#87e8e9','fill-opacity':'1'});
		$("#XMLID_825_2").css({'fill':'#87e8e9','fill-opacity':'1'});
		$('#region5').addClass('hovered');
	}else if(_id=="XMLID_876_"){
		$("#XMLID_876_").css({'fill':'#87e8e9','fill-opacity':'1'});
		$('#region6').addClass('hovered');
	}else if(_id=="XMLID_759_"){
		$("#XMLID_759_").css({'fill':'#87e8e9','fill-opacity':'1'});
		$('#region7').addClass('hovered');
	}else if(_id=="XMLID_1297_"){
		$("#XMLID_1297_").css({'fill':'#87e8e9','fill-opacity':'1'});
		$('#region8').addClass('hovered');
	}else if(_id=="XMLID_607_"){
		$("#XMLID_607_").css({'fill':'#87e8e9','fill-opacity':'1'});
		$('#region9').addClass('hovered');
	}
});




function moveBar(yes) {
	if (Modernizr && Modernizr.csstransforms) {
		$('#slider .ui-slider-handle').css({zIndex: yes ? -1 : 10000});
	}
}
	
function setPreview(view) {
	StopHomeAnimation();
	var previewWidth = 150,
		previewHeight = 100,
		previewSrc = 'pics/preview.jpg',
		preview = $(_thumbPreview.children(':first')),
		numPages = (view==1 || view==$('#slider').slider('option', 'max')) ? 1 : 2,
		width = (numPages==1) ? previewWidth/2 : previewWidth;
	_thumbPreview.addClass('no-transition').
		css({width: width + 8,
			height: previewHeight + 8,
			top: -previewHeight - 25,
			left: -width/2
		});
	preview.css({width: width,height: previewHeight});
	if (preview.css('background-image')==='' ||
		preview.css('background-image')=='none') {
		preview.css({backgroundImage: 'url(' + previewSrc + ')'});
		setTimeout(function(){
			_thumbPreview.removeClass('no-transition');
		}, 0);
	}
	preview.css({backgroundPosition:'0px -'+((view-1)*previewHeight)+'px'});
}


$("body").on("mouseout",'.regions, #map_hover1 path, #map_hover1 polygon, #map_hover2 path, #map_hover2 polygon',  function() {
	$('#regions_hover2').css({'opacity':'0'});
	$('#XMLID_144_,#XMLID_179_').css({'fill':'#ffffff','fill-opacity':'1'});
	$('#XMLID_266_,#XMLID_828_,#XMLID_828_2,#XMLID_825_,#XMLID_825_2,#XMLID_114_,#XMLID_876_,#XMLID_759_,#XMLID_1297_,#XMLID_607_').css({'fill':'#ffffff','fill-opacity':'0.2'});
	$('.regions').removeClass('hovered');
});
//////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
var _videocontents={
	p6_7:{src: 'video6_7', frames: 17, cols: 6, rows:3,  fps: 5},
	p8_9:{src: 'video8_9', frames: 20, cols: 6, rows:4,  fps: 9},
	p10_11:{src: 'video10_11', frames: 18, cols: 6, rows:3, fps: 7},
	p12_13:{src: 'video12_13', frames: 43, cols: 6, rows:8, fps: 10, single:'video12'},
	p14_15:{src: 'video14_15', frames: 36, cols: 6, rows:6, fps: 8},
	p16_17:{src: 'video16_17', frames: 41, cols: 6, rows:7, fps: 8},
	p18_19:{src: 'video18_19', frames: 28, cols: 6, rows:5, fps: 9},
	p20_21:{src: 'video20_21', frames: 36, cols: 6, rows:6, fps: 9, single:'video20'},
	p22_23:{src: 'video22_23', frames: 17, cols: 6, rows:3, fps: 7},
	p24_25:{src: 'video24_25', frames: 44, cols: 6, rows:8, fps: 12},
	p26_27:{src: 'video26_27', frames: 48, cols: 6, rows:8, fps: 9},
	p28_29:{src: 'video28_29', frames: 50, cols: 6, rows:9, fps: 9},
	p30_31:{src: 'video30_31', frames: 41, cols: 6, rows:7, fps: 9},
	p32_33:{src: 'video32_33', frames: 41, cols: 6, rows:7, fps: 9}
};

var cw=document.getElementById('magazine').clientWidth;
var ch=document.getElementById('magazine').clientHeight;
var _curentplayingvideo='';
var _lineupFirstTime=true;


function StopRendBackground(){
	if(_curentplayingvideo!=''){
		if(_videocontents[_curentplayingvideo]){
			clearInterval(_videocontents[_curentplayingvideo]);
			var _ind=_curentplayingvideo.substr(5).split('_');
			$('#video'+_ind[0]).hide();
			if(_ind[1]) $('#video'+_ind[1]).hide();
		}
		_curentplayingvideo='';	
	}
}

function doBackgroundAnimationCSS(page){
	StopRendBackground();
	var dest1=page,
		dest2=page+1;
	if(page%2==1){ 
		dest1=page-1; 
		dest2=page;
	}
	if(_videocontents["p"+dest1+"_"+dest2]) {	
		var _video=_videocontents["p"+dest1+"_"+dest2];
		_curentplayingvideo=_video.src;
		if(_video.single){
			if($("#"+_video.single)[0]){	
				StartRendBackground("#"+_video.single, null, _video.cols, _video.rows, _video.frames, _video.src, _video.fps);
			}else {
				setTimeout(function(){doBackgroundAnimationCSS(page);}, 500);
			}
		} else {
			if($("#video"+dest1)[0] && $("#video"+dest2)[0]){
				StartRendBackground("#video"+dest1, "#video"+dest2, _video.cols, _video.rows, _video.frames, _video.src, _video.fps);
			}else {
				setTimeout(function(){doBackgroundAnimationCSS(page);}, 500);
			}
		}
	}
}	
	
	
function StartRendBackground(_el1, _el2, _col, _row, _cou, _src, _fps){
	var _w,_h,_fh,_fw,
	img=new Image();
	img.src ="pics/"+_src+'.jpg';		
	img.onload = function(){
		_cnow=1;
		_fh=0;
		_fw=0;
		_h=100/(_row-1);	
		if(_el2){
			_w=100/((_col*2)-1);	
			$(_el1).css({'background-image':'url('+img.src+')','background-size': (200*_col)+'% '+(100*_row)+'%', 'background-position': (_fw*_w)+'% '+(_fh*_h)+'%'});
			$(_el1).show();
			$(_el2).css({'background-image':'url('+img.src+')','background-size': (200*_col)+'% '+(100*_row)+'%','background-position': ((_fw+1)*_w)+'% '+(_fh*_h)+'%'});
			$(_el2).show();
		} else {
			_w=100/(_col-1);
			$(_el1).css({'background-image':'url('+img.src+')','background-size': (100*_col)+'% '+(100*_row)+'%','background-position': (_fw*_w)+'% '+(_fh*_h)+'%'});
			$(_el1).show();
		}
		_videocontents[_src]=setInterval(function(){	
			$(_el1).css({'background-position': (_fw*_w)+'% '+(_fh*_h)+'%'});
			if(_el2){
				$(_el2).css({'background-position': ((_fw+1)*_w)+'% '+(_fh*_h)+'%'});
				_fw+=2;
			} else {
				_fw++;
			}
			_cnow++;
			
			if((_el2 && _fw==(_col*2)) || (!_el2 && _fw==_col) ){
				_fh++;
				_fw=0;
			}
			if(_cou==_cnow){
				_cnow=1;
				_fh=0;
				_fw=0;
			}
		}, 1000/_fps);
	};
}


function getURL(){
	var _getUrl=$(location).attr('href');
	var _poss1=_getUrl.indexOf("//")+2;
	_getUrl=_getUrl.substring(_poss1);
	_getUrl=_getUrl.substring(_getUrl.indexOf("/")+1);
	if(_getUrl.length>2) {
		if(_getUrl.indexOf("#")>-1){
			_getUrl=_getUrl.split('#')[0];
		}
		var _j=1;
		var _u=0;
		_chanels.map(function(_i){
			if(_i.name.replace(new RegExp(' ', 'g'),'_').replace(new RegExp('&', 'g'),'and').replace(new RegExp(',', 'g'),'').toLowerCase()==_getUrl.toLowerCase()) _u=_j;
			_j++;
		});
		if(_u>0) {
			if(_u>1) _u=(_u-1)*2;
			if ($('.magazine').turn('is')) $('.magazine').turn('page', _u);
		}	
	}
}



function cancelFullScreen(el) {
	var requestMethod = el.cancelFullScreen||el.webkitCancelFullScreen||el.mozCancelFullScreen||el.exitFullscreen;
	if (requestMethod) { 
		requestMethod.call(el);
	} else if (typeof window.ActiveXObject !== "undefined") { 
		var wscript = new ActiveXObject("WScript.Shell");
		if (wscript !== null) {
			wscript.SendKeys("{F11}");
		}
	}
	resizeElements($('.magazine').width(), $('.magazine').height());
}

function requestFullScreen(el) {
	var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;

	if (requestMethod) { 
		requestMethod.call(el);
	} else if (typeof window.ActiveXObject !== "undefined") { 
		var wscript = new ActiveXObject("WScript.Shell");
		if (wscript !== null) {
			wscript.SendKeys("{F11}");
		}
	}
	return false
}

function toggleFull() {
	var elem = document.getElementById("chanel_popup_iframe");
	var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) ||  (document.mozFullScreen || document.webkitIsFullScreen);
	if (_isfullxcreen) {
		_isfullxcreen=false;
		elem.style.background="#ececec";
	} else {
		_isfullxcreen=true;
		elem.style.background="#ececec";
	}
	if (isInFullScreen) {
		cancelFullScreen(document);
	} else {
		requestFullScreen(elem);
	}
	
	return false;
}



