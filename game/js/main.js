let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".menu");

menu.addEventListener("click", () => {
	navbar.classList.toggle("active"); // navbar 를 active 한다.
	menu.classList.toggle("move"); // menu 를 move 한다.
	noti.classList.remove("active"); // noti가 active 라면 비활성화 한다.
});

let noti = document.querySelector(".notification");
let bell = document.querySelector("#bell-icon");

bell.addEventListener("click", () => {
	noti.classList.toggle("active");
});
