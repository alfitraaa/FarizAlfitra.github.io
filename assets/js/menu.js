/*
	Portfolio v1 — mobile menu toggle.
	Small, progressively-enhanced, keyboard-friendly. No framework.
	The menu markup works without JS (links are visible when the panel is open);
	this script only manages open/close state and accessibility attributes.
*/
(function () {
	"use strict";

	var toggle = document.querySelector(".nav-toggle");
	var panel = document.getElementById("nav-mobile");

	if (!toggle || !panel) {
		return;
	}

	function openMenu() {
		panel.classList.add("is-open");
		toggle.setAttribute("aria-expanded", "true");
	}

	function closeMenu() {
		panel.classList.remove("is-open");
		toggle.setAttribute("aria-expanded", "false");
	}

	function isOpen() {
		return toggle.getAttribute("aria-expanded") === "true";
	}

	toggle.addEventListener("click", function () {
		if (isOpen()) {
			closeMenu();
		} else {
			openMenu();
		}
	});

	// Close after choosing a destination.
	panel.addEventListener("click", function (event) {
		if (event.target.closest("a")) {
			closeMenu();
		}
	});

	// Close on Escape and return focus to the toggle.
	document.addEventListener("keydown", function (event) {
		if (event.key === "Escape" && isOpen()) {
			closeMenu();
			toggle.focus();
		}
	});

	// If the viewport grows to desktop while open, reset state.
	var desktop = window.matchMedia("(min-width: 768px)");
	desktop.addEventListener("change", function (event) {
		if (event.matches) {
			closeMenu();
		}
	});
})();
