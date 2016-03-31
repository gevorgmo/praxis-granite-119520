function loadApp() {
		$('#canvas').fadeIn(1000);
		var lookbook = $('.magazine');
		if (lookbook.width()==0 || lookbook.height()==0) {
			setTimeout(loadApp, 10);
			return;
		}
		lookbook.turn({
				width: 1400,
				height: 932,
				duration: 1000,
				gradients: true,
				autoCenter: true,
				elevation: 50,
				pages: 34,
				when: {
					turning: function(event, page, view) {
						var book = $(this),
						pages = book.turn('pages');
						history.pushState({}, '', _chanels[parseInt(page/2, 10)].name.replace(new RegExp(' ', 'g'),'_').replace(new RegExp('&', 'g'),'and').toLowerCase());
					},
					turned: function(event, page, view) {
						var book = $(this);
						var _pagesmsg='Pages';
						$(this).turn('center');
						$('#slider').slider('value', getViewNumber($(this), page));	
						if(page!=1 && page!=book.turn('pages')){
							if(page%2==0){
								AnimateOnPage(page+1);
							}else {
								AnimateOnPage(page-1);
							}
							$('.start_icon').hide();
						} else {
							AnimateOnPage(page);
							if(page==1)$('.start_icon').show();
						}
						var dest1=page,
							dest2=page+1;
						if(page%2==1){ 
							dest1=page-1; 
							dest2=page;
						}
						$('.page.p'+dest1).parent().parent().css('z-index','10');
						if(page!=1 && page!=book.turn('pages')){
							$('.page.p'+dest2).parent().parent().css('z-index','10');
						}
						setTimeout(function(){ doBackgroundAnimationCSS(page); }, 500);						
					},
					missing: function (event, pages) {
						var book = $(this);
						for (var i = 0; i < pages.length; i++)
							addPage(pages[i], $(this));
					}
				}
		});


		$(document).keydown(function(e){
			var previous = 37, next = 39, esc = 27;
			switch (e.keyCode) {
				case previous:
					StopHomeAnimation();
					$('.magazine').turn('previous');
					e.preventDefault();
				break;
				case next:
					StopHomeAnimation();
					$('.magazine').turn('next');
					e.preventDefault();
				break;
				case esc:	
					if (_isfullxcreen)  toggleFull();
					e.preventDefault();
				break;
			}
		});

		$(window).resize(function() {
			resizeViewport();
		}).bind('orientationchange', function() {
			resizeViewport();
		});
		
		$(window).on("popstate", function() {
			getURL();
		});
		
		$('.magazine').addClass('animated');

		$( "#slider" ).slider({
			min: 1,
			max: numberOfViews(lookbook),
			range: "min",
			start: function(event, ui) {
				if (!window._thumbPreview) {
					_thumbPreview = $('<div />', {'class': 'thumbnail'}).html('<div></div>');
					setPreview(ui.value);
					_thumbPreview.appendTo($(ui.handle));
				} else
					setPreview(ui.value);
				moveBar(false);
			},
			slide: function(event, ui) {
				setPreview(ui.value);
			},
			stop: function() {
				if (window._thumbPreview)
					_thumbPreview.removeClass('show');
				$('.magazine').turn('page', Math.max(1, $(this).slider('value')*2 - 2));
			}
		});
		resizeViewport();
		getURL();
	}


	// Load the HTML4 version if there's not CSS transform

	yepnope({
		test : Modernizr.csstransforms,
		yep: ['js/lib/turn.js'],
		nope: ['js/lib/turn.html4.min.js', 'css/jquery.ui.html4.css'],
		both: ['css/jquery.ui.css', 'js/magazine.js'],
		complete: loadApp
	});
	
	//Analytic
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-75524637-1', 'auto');
	  ga('send', 'pageview');
