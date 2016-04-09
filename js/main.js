$(document).ready(function () {

	$(".left-nav-inner ul li").click(function () {
		$(this).addClass("active").siblings().removeClass("active");
		$(this).find("span").addClass("active_number");
		$(this).siblings().find("span").removeClass("active_number");
	})


	$(window).scroll(function () {

		if ($(window).scrollTop() > 35) {

			if ($(window).outerWidth() >= 780) {
				$(".sub-header").css({
					'position': 'fixed',
					'width': 'calc(100% - 220px)',
					'z-index': '1',
					'top': '0px'
				})
				$(".relevant-content-head ").css({
					'position': 'fixed',
					'width': 'calc(100% - 220px)',
					'z-index': '1',
					'top': '60px',
					'box-shadow': '1px 1px 2px #9d9d9d'
				})
				$(".relevant-content").css({
					'margin-top': '100px'
				})
			} else {
				$(".sub-header").css({
					'position': 'fixed',
					'width': '100%',
					'z-index': '1',
					'top': '0px'
				})
				$(".relevant-content-head ").css({
					'position': 'fixed',
					'width': '100%',
					'z-index': '1',
					'top': '60px',
					'box-shadow': '1px 1px 2px #9d9d9d'
				})
				$(".relevant-content").css({
					'margin-top': '100px'
				})
			}
		} else {
			$(".sub-header").css({
				'position': 'relative',
				'width': '100%'

			})
			$(".relevant-content-head ").css({
				'position': 'relative',
				'width': '100%',
				'top': '0px',
				'box-shadow': '0px 0px 0px #9d9d9d'
			})
			$(".relevant-content").css({
				'margin-top': '0px'
			})
		}

		// if ($(window).scrollTop() > 20){
		// 	$(".dot-menu-links").css({
		// 		'position':'fixed',
		// 		'margin-top':'0px'
		// 	})
		// }
		// else{
		// 	$(".dot-menu-links").css({
		// 		'position':'absolute',
		// 		'margin-top':'20px'
		// 	})
		// }
	})


	var i = 0;

	$(".relevant-content ul li:nth-child(2n)").addClass('white');
	$(".relevant-content ul li:nth-child(2n+1)").addClass('grey');

	$(".imp i").mouseenter(function () {
		$(this).css({
			'color': '#252525'
		})
	})
	$(".imp i").mouseleave(function () {
		$(this).css({
			'color': '#9d9d9d'
		})
	})
	$(".imp i").click(function () {
		if ($(this).parent().hasClass("active_star")) {
			$(this).parent().removeClass("active_star");

		} else {
			$(this).parent().addClass("active_star");

		}

	})

	// info-display page======

	$(".relevant-info").hide();

	$(".sec").click(function () {
		var index = $(".relevant-content ul li").index(this);

		$(".relevant-info ").hide().fadeIn();

		$("body").css({
			'overflow': 'hidden'
		})
	})

	$(".relevant-info .cross").click(function () {
		$(".relevant-info").fadeOut("fast");
		$("body").css({
			'overflow-y': 'scroll'
		})
	})


	// checking click event on list====

	$(".relevant-content ul li").click(function () {
		$(this).addClass("click-list").siblings().removeClass("click-list");

	})

	// mobile navigation
	$(".dot-menu-links").hide();

	var sidenav_width=$(".dot-menu-links").outerWidth()+50;
		$(".dot-menu-links").css({
			'right':-sidenav_width
		})


$(".overlay-dark,.overlay-dark-mob").hide();
	if($(window).width()<=780){
	
	$(".mobile-menu").click(function(){
		$(".left-nav").css({
			'margin-left':'0px',
			'z-index':'2'
		})
		$(".overlay-dark").fadeIn();
		$("body").css({
			'overflow':'hidden'
		})
	})
	$(".mob-side-link").click(function(){
		
		$(".overlay-dark-mob").fadeIn();
		$(".dot-menu-links").show();
		setTimeout(function(){
			$(".dot-menu-links").css({
			'right':'0'
		});
		},1);
		$("body").css({
			'overflow':'hidden'
		})

		
		
	})

	// cross-mobile

	$(".cross-mobile,.overlay-dark,.overlay-dark-mob,.left-nav-inner,.dot-menu-links ul li").click(function(){
		$(".left-nav").css({
			'margin-left':'-250px',
			'z-index':'2'
		})
		$("body").css({
			'overflow-y':'scroll'
		})
		$(".overlay-dark,.overlay-dark-mob").fadeOut();
		$(".dot-menu-links").css({
			'right':-$(".dot-menu-links").outerWidth()-50
		});

		$(".dot-menu-links").hide();
	})

}
	





	// $(".dot-menu-links").click(function(){
	// 	$(this).fadeOut();
		
	// })

	// responsive list in mobile
	var win_width=$(window).width();

	if(win_width<=640){
		$(".head-links-resize").removeClass("sm-col-8").addClass("sm-col-2");
		$(".heading-small").removeClass("sm-col-4").addClass("sm-col-8");
	$(".relevant-content ul li .post_head").removeClass("sm-col-8").addClass("sm-col-12");
}







// var auth_height=$(".author").outerHeight();
// var date_height=$(".date").outerHeight();
// var post_height=$(".post_head").outerHeight();
// console.log(auth_height);
// console.log(date_height);
// console.log(post_height);

// var max=function(a,b,c){
// 	if(a>=b && a>=c){
// 		return a
// 	}
// 	else if(b>a && b>=c){
// 		return b
// 	}
// 	else{
// 		return c
// 	}
// }
// var max_height=max(auth_height,date_height,post_height);

// console.log(max_height)

// $(".author, .date, .post_head").css({
// 	'height':max_height,
// 	'border':'1px solid red'
// })



});
