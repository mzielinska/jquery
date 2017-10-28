$(function(){
	'use strict';
//	$("body").find("p").eq(2).css("color", "blue");

$(".paragraf").each(function(index, element) {
	if (index !=1) {
		$(this).css("background-color", "green");
	}

	console.log("Element: " + element, index);
})

})