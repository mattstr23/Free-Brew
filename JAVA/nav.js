const toggleMen = document.querySelector(".toggleMenu");
const navLinks = document.querySelector(".navLinks");
const loginBut = document.querySelector(".loginBut");
const modal = document.querySelector(".modalBG");
const close = document.querySelector(".close");
const userName = document.querySelector(".userName");
const pass = document.querySelector(".pass");
const logBut = document.querySelector(".logBut");

function clearInput() {
    userName.value = "";
    pass.value = "";
}

toggleMen.addEventListener("click", () => {navLinks.classList.toggle("active")});
loginBut.addEventListener("click", () => {modal.style.display = "flex"});
close.addEventListener("click", () => {modal.style.display = "none"});
window.addEventListener("click", (e) => {if(e.target == modal){modal.style.display = "none"}});
window.addEventListener("click", (e) => {if(e.target == modal){clearInput()}});
close.addEventListener("click", () => {clearInput()});