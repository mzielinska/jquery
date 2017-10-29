'use strict';

$(document).ready(function () {
	var slideShow = $(".slide-show");
	var slideCount = $(".single-slide").length;
	var slideWidth = 100 / slideCount;
	var slideIndex = 0;

	//szerokośc kontenera .slide-show
	
	slideShow.css("width", (slideCount * 100) + "%");
	
	// Nadaj kazdemu slajdowi szerokosc i lewy margines
	
	slideShow.find(".single-slide").each(function (index) {
		console.log("działa");
		$(this).css({
			"width": slideWidth + "%",
			"margin-left": index * slideWidth + "%"
		});
	});

	//Obsługa nawigacji slajdera
	
	function slide(newSlideIndex) {
		if (newSlideIndex < 0 || newSlideIndex > slideCount - 1) {
			console.log("nie ma slajdu o takim indexie");
			return;
		}
		var slideCaption = slideShow.find(".slide-caption").eq(newSlideIndex);
		var marginLeft = (newSlideIndex * (-100) + "%");
		slideCaption.hide();

		slideShow.animate({
			"margin-left": marginLeft
		}, 1000, function () {
			slideIndex = newSlideIndex;
			slideCaption.fadeIn();
		});

	}
	$(".prev-slide").click(function () {
		slide(slideIndex - 1);
	})

	$(".next-slide").click(function () {
		slide(slideIndex + 1);
	})
});
