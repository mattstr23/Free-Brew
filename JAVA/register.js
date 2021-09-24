//User JS Start
const toggleMen = document.querySelector(".toggleMenu");
const navLinks = document.querySelector(".navLinks");
const loginBut = document.querySelector(".loginBut");
const modal = document.querySelector(".modalBG");
const close = document.querySelector(".close");
const regLog = document.querySelector(".regLog")
const logUserName = document.querySelector(".logUserName");
const logPass = document.querySelector(".logPass");
const logBut = document.querySelector(".logBut");

function clearInput() {
    logUserName.value = "";
    logPass.value = "";
}

toggleMen.addEventListener("click", () => {navLinks.classList.toggle("active")});
regLog.addEventListener("click", () => {modal.style.display = "flex"});
loginBut.addEventListener("click", () => {modal.style.display = "flex"});
close.addEventListener("click", () => {modal.style.display = "none"});
window.addEventListener("click", (e) => {if(e.target == modal){modal.style.display = "none"}});
window.addEventListener("click", (e) => {if(e.target == modal){clearInput()}});
close.addEventListener("click", () => {clearInput()});
//User JS End


const submitButton = document.querySelector(".regSub");


const createUser = async () => {
    const url = "http://localhost:3010/create_users";
    const userName = document.querySelector(".regUserName").value;
    const email = document.querySelector(".regEmail").value;
    const password = document.querySelector(".regPassword").value;
  
    const userData = {
      userName,
      email,
      password,
    };
  
    const createUser = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (createUser.status === 200) {
        window.location.reload();
    }
  };
  submitButton.addEventListener("click", () => {
    createUser();
  });


