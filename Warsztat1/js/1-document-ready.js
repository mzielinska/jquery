'use strict';

$(document).ready(function() {
	console.log('strona zaladowana');
});


$(function() {
  	console.log('wersja uproszczona document.ready')
	$('#first').css({'color':
	'red'}).hide('slow').show(3000);
	
	var paragraf1 = $('#first');
	var par1 = document.getElementById('first');
	
	console.log(paragraf1, par1);
  });