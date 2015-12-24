$(document).ready(function() {


	/*-------------------- Menu Mobile ------------------*/
	$('.menu').click(function(){
		var mobilemenu = $('.mainmenu');

		if( mobilemenu.hasClass('show-mainmenu') ){
			mobilemenu.removeClass('show-mainmenu');
			$('.menu-desktop').removeClass('edit-menu-desktop');
			$('.menus').removeClass('edit-menus');
		}else{
			mobilemenu.addClass('show-mainmenu');
			$('.menu-desktop').addClass('edit-menu-desktop');
			$('.menus').addClass('edit-menus');
		}
	});


	/*--------------- Show Topmenu Search --------------*/
	var input = $('.topmenu-input');

	$('.topmenu-form button').click(function(){
		if( input.hasClass('show-input')){
		}else{
			input.addClass('show-input');
			$('.search').addClass('show-search');
			$('.search button').addClass('edit-button');
		}
	});

/*-------------------- Social Tabs ------------------*/
	var nav = $('.nav a');

	$(nav).click(function() {
		$(this).removeClass('active');
		$(this).addClass('active');
	});
	$(nav).click(function() {
		nav.removeClass('active');
		$(this).addClass('active');
	});

});

/*-------------------- Topmenu Fixed ------------------*/
$(document).ready(function() {
	var top = 0;
	var fixedMenu = $("header");
	$(document).scroll(function () {
		top = $(document).scrollTop();
		if (top > 70) {
			fixedMenu.addClass('fixed');
		}else {
			fixedMenu.removeClass('fixed');
		}
	});
});










