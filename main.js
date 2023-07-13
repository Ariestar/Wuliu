document.addEventListener("DOMContentLoaded", function () {
	const sections = document.querySelectorAll("section");

	function adjustSectionHeight() {
		sections.forEach(section => {
			section.style.minHeight = window.innerHeight + "px";
		});
	}

	function handleScroll() {
		const scrollPosition = window.scrollY;

		sections.forEach(section => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.offsetHeight;

			if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
				section.style.minHeight = window.innerHeight + "px";
			} else {
				section.style.minHeight = "100%";
			}
		});
	}

	adjustSectionHeight();
	handleScroll();

	window.addEventListener("resize", adjustSectionHeight);
	window.addEventListener("scroll", handleScroll);
});

function toggleWindow() {
	var w = document.querySelector("#consultationWindow");
	getComputedStyle(w).display == "none" ? (w.style.display = "block") : (w.style.display = "none");
}
