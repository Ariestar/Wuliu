ScrollReveal({ reset: true });
ScrollReveal().reveal("header", {
	duration: 300,
	origin: "top",
	distance: "2em",
	easing: "ease-out",
});
ScrollReveal().reveal("footer", {
	duration: 300,
	origin: "bottom",
	distance: "2em",
	easing: "ease-out",
});
ScrollReveal().reveal(".container h2", {
	duration: 700,
	origin: "left",
	distance: "3em",
	easing: "ease-out",
});
ScrollReveal().reveal(".container *:not(.cta-button)", {
	duration: 500,
	origin: "left",
	distance: "3em",
	easing: "ease-out",
});
ScrollReveal().reveal(".container .cta-button", {
	duration: 700,
	origin: "left",
	distance: "3em",
	easing: "ease-out",
	afterReveal: function (el) {
		el.style.transition = "background-color 0.3s ease, transform 0.3s ease";
		el.style.transform = "translateY(0)";
		var flag1 = el.addEventListener("mouseenter", function () {
			// 鼠标进入时的样式
			el.style.backgroundColor = "#555";
			el.style.transform = "scale(1.05)";
		});
		var flag2 = el.addEventListener("mouseleave", function () {
			// 鼠标进入时的样式
			el.style.backgroundColor = "#333";
			el.style.transform = "scale(1)";
		});
	},
	afterReset: function (el) {
		el.style.transition = "";
		el.style.transform = "";
		removeEventListener(flag1);
		removeEventListener(flag2);
	},
});
ScrollReveal().reveal(".floating-button", {
	duration: 500,
	origin: "right",
	distance: "1.5em",
	easing: "ease-out",
	afterReveal: function (el) {
		el.style.transition = "background-color 0.3s ease, transform 0.3s ease";
		el.style.transform = "translateY(0)";
		var flag1 = el.addEventListener("mouseenter", function () {
			// 鼠标进入时的样式
			el.style.backgroundColor = "#555";
			el.style.transform = "scale(1.05)";
		});
		var flag2 = el.addEventListener("mouseleave", function () {
			// 鼠标进入时的样式
			el.style.backgroundColor = "#333";
			el.style.transform = "scale(1)";
		});
	},
	reset: false,
});
