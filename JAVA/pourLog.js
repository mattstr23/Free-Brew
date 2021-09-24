//User JS STart
const toggleMen = document.querySelector(".toggleMenu");
const navLinks = document.querySelector(".navLinks");
const loginBut = document.querySelector(".loginBut");
const modal = document.querySelector(".modalBG");
const close = document.querySelector(".close");
const logUserName = document.querySelector(".logUserName");
const logPass = document.querySelector(".logPass");
const logBut = document.querySelector(".logBut");

function clearInput() {
    logUserName.value = "";
    logPass.value = "";
}

toggleMen.addEventListener("click", () => {navLinks.classList.toggle("active")});
loginBut.addEventListener("click", () => {modal.style.display = "flex"});
close.addEventListener("click", () => {modal.style.display = "none"});
window.addEventListener("click", (e) => {if(e.target == modal){modal.style.display = "none"}});
window.addEventListener("click", (e) => {if(e.target == modal){clearInput()}});
close.addEventListener("click", () => {clearInput()});
//User JS End

