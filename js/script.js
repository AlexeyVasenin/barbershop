"use strict"
// интерактивная форма
var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");

var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
// var inputoff = document.querySelectorAll(".icon-password, .iconUserr");

var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var storage = localStorage.getItem("login");
link.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	login.focus();
	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode == 27) {
		popup.classList.remove("modal-content-show");
	}
});

var activePage = 'page2';
var pages = document.querySelector('.paginator');
pages.addEventListener('click', function (evt) {
	var clickedElement = evt.target;
	if (clickedElement.classList.contains('page')) {
		setActivePage(clickedElement.id);
	}

});

// исключаем установку одной и тойже страницы
function setActivePage(id) {
	if (activePage === id) {
		return;
	}
	document.querySelector('#' + activePage).classList.remove('active');
	document.querySelector('#' + id).classList.add('active');

	activePage = id;
};

//интерактивная карта
var mapOpen = document.querySelector(".open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");
mapOpen.addEventListener("click", function (event) {
	event.preventDefault();
	mapPopup.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function (event) {
	event.preventDefault();
	mapPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode == 27) {
		if (mapPopup.classList.contains("modal-content-show")) {
			mapPopup.classList.remove("modal-content-show");
		}
	}
});


// Страницы
