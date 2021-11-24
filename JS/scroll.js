const navbar = document.getElementById('navbar');
window.onscroll = () => {
	let top = window.scrollY;
	console.log(top);
	if (top >= 100) {
		navbar.classList.replace("navbar", "navbar2");
	}else if (top < 100) {
		navbar.classList.replace("navbar2", "navbar");
	}
}