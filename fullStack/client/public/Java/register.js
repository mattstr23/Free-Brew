// const { markAsUntransferable } = require("worker_threads");

const submitButton = document.querySelector(".create");
const userList = document.querySelector(".users");

const createUser = async () => {
    const url = "http://localhost:3010/create_users";
    const userName = document.querySelector(".userName").value;
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;
  
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
  };
  submitButton.addEventListener("click", () => {
    createUser();
  });


