<!doctype html>
<html lang="en">
<head>
<title>Google Lookbook New</title>
<meta name="viewport" content="width=1200" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300italic,100italic,300,400italic,500,700,500italic,700italic,900,900italic' rel='stylesheet' type='text/css'></link>
<link type="text/css" rel="stylesheet" href="css/magazine.css"></link>
<link rel="shortcut icon" href="pics/favicon.ico">
<script type="text/javascript" src="js/extras/jquery.min.1.7.js"></script>
<script type="text/javascript" src="js/extras/jquery-ui-1.8.20.custom.min.js"></script>
<script type="text/javascript" src="js/extras/jquery.mousewheel.min.js"></script>
<script type="text/javascript" src="js/extras/modernizr.2.5.3.min.js"></script>
</head>
<body>
	<header><div class="header-user-content">Welcome, {{email}}! (<a href="{{url}}">Log Out</a>)</div></header>
	<div class="top_title">
		<div class="select_region"></div>
		<div class="select_chanel"></div>
		<div class="change_chanel">
			<div class="chanel_title"></div>
			<div class="chanels_cont">
				<div class="chanel_title_bg_mask"><div class="chanel_title_bg"></div></div>
				<div class="chanels_list">
					<ul id="chanels_list1">
						<li id="chanelid1">Beauty & Fashion</li>
						<li id="chanelid2">Comedy</li>
						<li id="chanelid3">Entertainment & Pop Culture</li>
						<li id="chanelid4">Parenting & Family</li>
						<li id="chanelid5">Music</li>
						<li id="chanelid6">Video Gaming</li>
						<li id="chanelid7">Cars, Trucks & Racing</li>
					</ul>
					<ul id="chanels_list2">
						<li id="chanelid8">Food & Recipes</li>
						<li id="chanelid9">News</li>
						<li id="chanelid10">Science & Education</li>
						<li id="chanelid11">Sports</li>
						<li id="chanelid12">Technology</li>
						<li id="chanelid13">Spanish Language</li>
						<li id="chanelid14">Breakout Videos</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div id="canvas">
		<div class="lineup_sheet"></div>	
			<div class="magazine-viewport">
				<div class="magazine" id="magazine">
					<div ignore="1" class="start_icon"></div>
					<div ignore="1" class="chanel_popup">
						<div ignore="1" class="chanel_popup_close"></div>
						<div ignore="1" class="chanel_popup_bg"></div>
						<div ignore="1" class="chanel_popup_cont" id="chanel_popup_iframe">
							<div ignore="1"  class="chanel_popup_iframe"></div>
							<div ignore="1" class="chanel_popup_buttons">
								<span ignore="1" class="chanel_popup_title">DOWNLOAD</span>
								<a ignore="1" class="chanel_popup_links chanel_popup_links_pdf" target="_blank" href="#">PDF</a>
								<a ignore="1" class="chanel_popup_links chanel_popup_links_slide"  target="_blank" href="#">SLIDES</a>
								<a ignore="1" class="chanel_popup_links chanel_popup_links_fullscreen"  href="#">FULLSCREEN</a>
								<div style="clear:both"></div>
							</div>
						</div>
					</div>
				</div>
			</div>	
			<div class="control_bar">
				<div id="slider-bar" class="turnjs-slider">
					<div id="slider"></div>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="js/script.js"></script>
</body>
</html>