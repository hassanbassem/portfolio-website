const burgerMenuIcon = document.querySelector("nav img");
const navMenu = document.querySelector("nav ul");

burgerMenuIcon.onclick = () => {
    navMenu.classList.toggle("hidden");
};