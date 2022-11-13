
/* OPEN LINK IN NEW WINDOW  */
   function externalLinks() {
    links = document.getElementsByTagName("a");
    for (i=0; i<links.length; i++) {
      link = links[i];
      if (link.getAttribute("href") && link.getAttribute("rel") == "external")
      link.target = "_blank";
    }
   }
   window.onload = externalLinks;


$(document).ready(function() {

function li_uprise() {
	setTimeout(li_uprises, 300);
}

var uprs = $("#nav li");

function li_uprises(y) {

			for(y = 0; y < uprs.length; y++) {
			var upr = uprs[y];
			(upr.classList.contains("uppr" + [y]) === true) ?
				upr.classList.remove("uppr" + [y]) :
				upr.classList.add("uppr" + [y]);
		}
}

	function reset_li_uprise() {
		for(d = 0; d < uprs.length; d++) {
			var upr = uprs[d];
			upr.classList.remove("uppr" + [d]);
		}
	}

$(window).resize(reset_li_uprise);
$("li.logotype").click(reset_li_uprise);
$("#nav li").click(li_uprises);
$(".menu-icon").click(li_uprise);

	function click_menu() {

		$("#nav").slideToggle();

	}

	$("#nav li").click(click_menu);
	$(".menu-icon").click(click_menu);


	$(".top_head li.logotype").click(
		function() {
			if (($window.width() <= "960")) {
			$("#nav").slideUp(); }
		}
	);

/* RELOAD STATUS STILE CSS BUTTON ON NEW   */

	$("div.menu-icon").click(function () {

		$("path .cls-1").addClass("active");

	});

/* BACKGROUND STYLE IN lightline block */

	var $body, $window;
	$window = $(window);
	$body = $("body");

	function light() {
      if (($window.width() <= "1320")) {
		$("div.lightline").css("background-size","cover");
      } else {
		$("div.lightline").css("background-size","100%"); }
    }
	light();

$(window).resize(function () {
		  light();  });


/* CHANGE SIZE BASE MENU */

var $body, $window;
	$window = $(window);
	$body = $("body");

	function heit() {
      if (($window.width() <= "960")) {
		$(".top_head li").not(".logotype").css("display","none");
		$("#nav").css("display", "none");
		} else {
		$(".top_head li").fadeIn();
		}
    }
	heit();

$(window).resize(function () {
		  heit();  });

function resetMenu(){

  $('.top_head a').removeClass('act');
  $('.nav-wrap li').removeClass('acti');
}


});
