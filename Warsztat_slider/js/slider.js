'use strict';

$(document).ready(function () {
	var slideShow = $(".slide-show");
	var slideCount = $(".single-slide").length;
	var slideWidth = 100 / slideCount;
	var slideIndex = 0;

	slideShow.css("width", (slideCount * 100) + "%");

	slideShow.find(".single-slide").each(function (index) {
		console.log("działa");
		$(this).css({
			"width": slideWidth + "%",
			"margin-left": index * slideWidth + "%"
		});
	});

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

//4.	Dla nawigacji (elementy z klasami .prev-slide i .next-slide) przypisz obsługę zdarzenia click. Sprawdź, czy obsługa zdarzenia click działa na tej nawigacji. Następnie wewnątrz funkcji obsługującej zdarzenie click wywołaj funkcję slide() (jej definicja jest w kolejnym punkcie), która przyjmuje parametr slideIndex – 1 jeśli przewijamy w lewo i slideIndex + 1 jeśli przewijamy w prawo.
//5.	Zdefiniuj funkcję slide() przyjmującą parametr newSlideIndex, która odpowiada za przewijanie slajdów:
//a.	Sprawdź, czy aktualny newSlideIndex nie jest mniejszy od indexu pierwszego slajdu lub większy od indexu ostatniego slajdu. Jeśli tak, to przerwij działanie funkcji
//b.	Zdefiniuj zmienną slideCaption, do której przypisz aktualny napis na slajdzie (elementy z klasą .slide-caption)
//c.	Stwórz zmienną marginLeft, która przyjmie wartość procentową (%) aktualnego indexu slidu pomnożoną przez -100 (o taką wartość marginesu przesuwamy cały rząd ze slajdami)
//d.	Ukryj napis znajdujący się w zmiennej slideCaption używając metody .hide()
//e.	Na kontenerze slideShow wykonaj animacje przesuwającą wszystkie slajdy w lewo lub w prawo poprzez ustawienie marginesu – margin-left: marginLeft, nadaj jej czas trwania 800 milisekund i wywołaj funkcję callback (jej opis poniżej)
//f.	Funkcja anonimowa callback ma do zmiennej slideIndex przypisać nowy index slajdu ze zmienne newSlideIndex oraz wyświetlić napis na slidzie (zmienna slideCaption) za pomocą metody .fadeIn()