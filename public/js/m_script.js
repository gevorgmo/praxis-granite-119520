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

var _curPage=0;
var _hash = window.location.hash;
	
function AnimateOnPage(_p){
	if($('.magazine .page').hasClass('pageloaded')){	
		_curPage=_p;
		$('.select_region').hide();
		$('.select_chanel').hide();
		$('.change_chanel').hide();
		if (_p==1) {			
			setTimeout(function(){ $('.page_element1').css('opacity', '1'); }, 500);
			setTimeout(function(){ $('.page_element2').css('opacity', '1'); }, 1000);
			setTimeout(function(){ $('.page_element3').css('opacity', '1'); }, 1500);
		} else if (_p==2) { 
			setTimeout(function(){ $('.page_element1').css('opacity', '1'); }, 500);
			setTimeout(function(){ $('.page_element3').css('opacity', '1'); }, 1000);
		} else if (_p==3) { 
			setTimeout(function(){ $('.page4_element1').css('opacity', '1'); }, 500);
			$('.magazine .p' + _p+' .page-bg').addClass('pageanimated');
		} else if(_p>=4 && _p!=34){		
			setTimeout(function(){ $('.page_person').css('opacity', '1');}, 500);	
			setTimeout(function(){ $('.page_title').css('opacity', '1'); },1000);
			setTimeout(function(){ 
				$('#page-it1').addClass('notactive');
				$('#page-it2').addClass('notactive');
				$('#page-it3').addClass('notactive');
			},1500);
			setTimeout(function(){ $('#page-it1').removeClass('notactive'); },2000);
			setTimeout(function(){ $('#page-it2').removeClass('notactive'); },2500);
			setTimeout(function(){ $('#page-it3').removeClass('notactive'); },3000);
			if(_hash!=""){
				_hash=parseInt(_hash.substr(6));
				if(!isNaN(_hash)) {
					if(_chanels[_hash]){
						setTimeout(function(){ 
							$('.chanel_popup_iframe').html('<iframe src="'+_chanels[_hash].presentation+'" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" class="chanel_popup_iframe_cont"></iframe>');
							$('.chanel_popup_iframe_cont').css({"height":($('.chanel_popup_cont').height()+30)+"px"});
							$('.chanel_popup').css('display','block').animate({'opacity':'1'}, 500);
							var _srt=_chanels[_hash].presentation.split('/')[7];
							$('.chanel_popup_links_pdf').attr('href', 'https://docs.google.com/presentation/d/'+_srt+'/export/pdf');
							$('.chanel_popup_links_slide').attr('href', 'https://docs.google.com/presentation/d/'+_srt);
							window.location.hash = "#slide"+_hash;
						},2000);
					}
				}
			}
		} else if(_p==34){
			$('.magazine .p' + _p+' .page-bg').addClass('pageanimated');
			setTimeout(function(){ $('.magazine .p34 .page-bg .page_title_element_2').css('opacity', '1');},500);
			setTimeout(function(){ $('.magazine .p34 .page-bg .page_text_left').css('opacity', '1');},1000);
			setTimeout(function(){ $('.magazine .p34 .page-bg .page_end_button').css('opacity', '1');},1000);
		}
		
		if(_p<=2){
			$('.header').addClass('first-pagetop-bg');

		}else  if(_p<4){
			$('.select_region').html('Choose Your Market &gt');
			$('.select_chanel').html('US Channel Lineups');
			$('.select_region').show();
			$('.select_chanel').show();
			$('.change_chanel').hide();
		}else  if(_p>=4){
			$('.header').removeClass('first-pagetop-bg');
			$('.chanel_title_text').html(_chanels[_p-1].name);
			$('.chanel_title').show();
		}
	}
}


function loadPage(page) {
	$.ajax({url: 'pages/m_page' + page + '.html'}).done(function(pageHtml) {
		$('.loader').remove();
		$('.magazine .page').html(pageHtml);
		$('.magazine .page').addClass('pageloaded');
		resizeViewport();
		$('.magazine .page').css("opacity","1");			
		AnimateOnPage(page);
	});
}


function resizeViewport(){
		_ktf=$(window).width()/1242;

		$('.header').css({"height":(_ktf*129)+"px"});
		$('.top_empty').css({"height":(_ktf*129)+"px"});
		$('.top_menu_icon').css({"width":(_ktf*116)+"px", "height":(_ktf*129)+"px"});
		$('.chanel_title_text').css({"font-size":(_ktf*60)+"px","line-height":(_ktf*129)+"px"});
		$('.page_title').css({"font-size":(_ktf*80)+"px"});
		$('.page_top_button').css({"font-size":(_ktf*40)+"px", "padding":(_ktf*27)+"px "+(_ktf*52)+"px","border-radius":(_ktf*6)+"px"});
		$('.page_center').css({"font-size":(_ktf*55)+"px","line-height":(_ktf*109)+"px"});
		$('.video_small').css({'height':(_ktf*700)+'px'});
		$('.page-item-triangle p').css({"border-width":(_ktf*42)+"px 0px "+(_ktf*42)+"px "+(_ktf*76)+"px"});
		$('.page-item-triangle').css({"width":(_ktf*295)+"px","height":(_ktf*304)+"px" });
		$('.page-item span').css({"font-size":(_ktf*40)+"px", "padding":(_ktf*27)+"px 0","border-radius":(_ktf*6)+"px"});
		$('.page-item.doubleline span').css({"font-size":(_ktf*40)+"px", "padding":(_ktf*7)+"px 0","border-radius":(_ktf*6)+"px","line-height":(_ktf*44)+"px"});
		$('.page_bottom h3').css({"font-size":(_ktf*55)+"px","line-height":(_ktf*109)+"px"});
		$('.chanel_popup_cont').css({"height":(_ktf*698)+"px", "margin-top" : "-"+(_ktf*349)+"px"});
		$('.chanel_popup_iframe_cont').css({"height":(_ktf*698+30)+"px"});
		$('.chanel_popup_close').css({"width":(_ktf*25)+"px","height":(_ktf*25)+"px" });
		$('.chanel_popup_title').css({"font-size":(_ktf*24)+"px","line-height":(_ktf*37)+"px"});
		$('.chanel_popup_links').css({"font-size":(_ktf*13)+"px", "line-height":(_ktf*37)+"px", "padding":"0 "+(_ktf*20)+"px", "margin-left":(_ktf*20)+"px"});
		$('.page_bottom_side').css({"height":(_ktf*300)+"px" });
		$('.left_menu_items').css({"font-size":(_ktf*60)+"px","margin":(_ktf*52)+"px 0" });
		$('.left_menu_bottom').css({"font-size":(_ktf*45)+"px","margin":(_ktf*80)+"px 0 "+(_ktf*50)+"px 0" });
		$('.left_menu_logout').css({"font-size":(_ktf*55)+"px","margin-top":(_ktf*30)+"px" });
		$('.page1_element2_title').css({"font-size":(_ktf*55)+"px"});
		$('.page_region_title').css({"font-size":(_ktf*80)+"px"});
		$('.page_region_items').css({"font-size":(_ktf*55)+"px"});
		$('.page_top_button2').css({"font-size":(_ktf*40)+"px", "padding":(_ktf*27)+"px "+(_ktf*52)+"px","border-radius":(_ktf*6)+"px"});
		
		
		$('.page-itm-txt').css({"font-size":(_ktf*28)+"px","line-height":(_ktf*28)+"px"});
		$('.page_text_left').css({"font-size":(_ktf*20)+"px"});
		$('.page-itm-img').css({'width':(_ktf*152)+'px','height':(_ktf*152)+'px','border-width':(_ktf*5)+'px'});
		$('.page-button-red').css({"font-size":(_ktf*12)+"px","line-height":(_ktf*37)+"px"});
		$('.page-button-red img').css({'width':(_ktf*12)+'px','height':(_ktf*12)+'px'});
		$('.regions').css({"font-size":(_ktf*25)+"px"});
		$('.regions span').css({"font-size":(_ktf*14)+"px"});
		$('.triangle p').css({"border-width":(_ktf*21)+"px 0px "+(_ktf*21)+"px "+(_ktf*38)+"px"});
		$('.triangle').css({"width":Math.ceil(_ktf*205)+"px","height":Math.ceil(_ktf*215)+"px" });
		$('.triangle-item span').css({"font-size":(_ktf*22)+"px","line-height":(_ktf*28)+"px"});
		$('.page_end_button a').css({"font-size":(_ktf*24)+"px","padding":(_ktf*10)+"px "+(_ktf*20)+"px"});
		$('.page_end_button p').css({"font-size":(_ktf*24)+"px"});
		$('.video_small_title').css({"font-size":(_ktf*24)+"px"});
		
		$('.page2_element2').css({"font-size":(_ktf*60)+"px"});
		$('.page_right_list_title1,.page_right_list_title2').css({"font-size":(_ktf*22)+"px"});
		$('.page_title_element_big').css({"font-size":(_ktf*60)+"px"});
		$('.page_title_element_small').css({"font-size":(_ktf*30)+"px"});
		$('.chanel_title_bg_mask').css('width',($('.chanel_title').width()+55)+'px');

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
		var _u=-1;
		_chanels.map(function(_i){
			if(_i.name.replace(new RegExp(' ', 'g'),'_').replace(new RegExp('&', 'g'),'and').toLowerCase()==_getUrl.toLowerCase()) _u=_j;
			_j++;
		});
		if(_u>=0) {
			loadPage(_u);
		} else {
			loadPage(1);
		}
	}
}

////////////////////////////////////////////////////
$(document).ready(function() {
	
	$("body").on("click", ".page-item, .page_top_button", function(event) {
		var _index=parseInt($(this).attr('id').substr(12))+3;
		$('.chanel_popup_iframe').html('<iframe src="'+_chanels[_index].presentation+'" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" class="chanel_popup_iframe_cont"></iframe>');
		$('.chanel_popup_iframe_cont').css({"height":($('.chanel_popup_cont').height()+30)+"px"});
		$('.chanel_popup').css('display','block').animate({'opacity':'1'}, 500);
		var _srt=_chanels[_index].presentation.split('/')[7];
		$('.chanel_popup_links_pdf').attr('href', 'https://docs.google.com/presentation/d/'+_srt+'/export/pdf');
		$('.chanel_popup_links_slide').attr('href', 'https://docs.google.com/presentation/d/'+_srt);
		window.location.hash = "#slide"+_index;
		var _src=$('.magazine .page .video_small').attr('src');
		$('.magazine .page .video_small').attr('src','');
		$('.magazine .page .video_small').attr('src',_src);
	}); 
	 
	$("body").on("click", ".chanel_popup_close", function(event) {
		$('.chanel_popup').animate({'opacity':'0'}, 500, function(){
			$(this).css('display','none');
			$('.chanel_popup_iframe').html(''); 
			window.location.hash = "slide";
		});
	});
	
	
	$("body").on("click", ".top_menu_icon", function(event) {
		$('.right_content').css({'left':'77.30%',
			'-webkit-filter': 'blur(5px)',
			'-moz-filter': 'blur(5px)',
			'-o-filter': 'blur(5px)',
			'-ms-filter': 'blur(5px)',
			'filter': 'blur(5px)'
		});
		$('.right_content_ovelay').css('display','block').animate({'opacity':'0.5'}, 500);
		$('.left_menu').css({'display':'block'}).animate({'left':'0'},  500);
	});
	
	$("body").on("click", ".left_menu_close, .right_content_ovelay", function(event) {
		$('.right_content').css({'left':'0',
			'-webkit-filter': 'blur(0px)',
			'-moz-filter': 'blur(0px)',
			'-o-filter': 'blur(0px)',
			'-ms-filter': 'blur(0px)',
			'filter': 'blur(0px)'
		});
		$('.right_content_ovelay').animate({'opacity':'0'}, 500);
		$('.left_menu').animate({'left':'-77.30%'},  500,  function(){
			$(this).css({'display':'none'});
			$('.right_content_ovelay').css('display','none');
		});
	});
	
	
	$("body").on("click", ".page_top_button2", function(event) {
		var _index=parseInt($(this).attr('data-id').substr(8));
		$('.right_content_ovelay').animate({'opacity':'0'}, 500, function(){
			$('.magazine .page').html('');
			$('<div class="loader"></div>').appendTo('body');
			$('.right_content_ovelay').css({'opacity':'1'});
			loadPage(_index);
		});
	});
	
	
	
	$("body").on("click", ".left_menu_items", function(event) {
		var _index=parseInt($(this).attr('data-id').substr(8));
		$('.magazine .page').html('');
		$('<div class="loader"></div>').appendTo('body');
		loadPage(_index);
		$('.right_content').css({'left':'0',
			'-webkit-filter': 'blur(0px)',
			'-moz-filter': 'blur(0px)',
			'-o-filter': 'blur(0px)',
			'-ms-filter': 'blur(0px)',
			'filter': 'blur(0px)'
		});
		$('.right_content_ovelay').animate({'opacity':'0'}, 500);
		$('.left_menu').animate({'left':'-77.30%'},  500,  function(){
			$(this).css({'display':'none'});
			$('.right_content_ovelay').css('display','none');
		});
	});
	
	
	$(window).resize(function() {
		resizeViewport();
	}).bind('orientationchange', function() {
		resizeViewport();
	});
	resizeViewport();
	getURL();
	
	
	
});