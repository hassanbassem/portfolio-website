const burgerMenuIcon = document.querySelector("nav img");
const navMenu = document.querySelector("nav ul");
const homeNavigatorOnLi = document.getElementById("homeNavigator");
const currentPage = window.location.pathname.split("/").pop().split(".")[0];

console.log(currentPage == ""?"empty":currentPage);

navMenu.classList.add("hidden");

burgerMenuIcon.onclick = () => {
    navMenu.classList.toggle("hidden");
};

if (currentPage == "index")
    homeNavigatorOnLi.href = "#header";
