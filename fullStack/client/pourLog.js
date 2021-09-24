const submitButton = document.querySelector(".button");
// const brewList = document.querySelector(".brewUser");

const createBrew = async () => {
    const url = "http://localhost:3010/create_breweries";
    const breweryName = document.querySelector(".brewName").value;
    const date = document.querySelector(".brewDate").value;
    const city = document.querySelector(".brewCity").value;
    const state = document.querySelector(".brewState").value;
  
    const brewData = {        
        breweryName,
        date,
        city,
        state,
    };
  
    const createBrew = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(brewData),
    });
  };
  
  submitButton.addEventListener("click", () => {
    createBrew();
    });


  const beerButton = document.querySelector(".beerBut");
  
  const createBeer = async () => {
    const url = "http://localhost:3010/create_beers";
    const userName = document.querySelector(".userName").value;
    const beerName = document.querySelector(".beer").value;
    const beerTyper = document.querySelector(".type").value;
    const maker = document.querySelector(".maker").value;

    const beerData = {
      userName,
      beerName,
      beerTyper,
      maker,

    };

  const createBeer = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(beerData),
  });
  };
  beerButton.addEventListener("click", () => {
    createBeer();
  });


  const deleteBrewBut = document.querySelector(".delete")
    const deleteBrewery = async () => {
    const brewDel = document.querySelector(".brewName").value
      const url = `http://localhost:3010/delete_brew/${brewDel}`;
      console.log(url)

      const breweryDelete = {
        brewDel,
      }
      const deleteBrewery = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
  };
  deleteBrewBut.addEventListener("click", () => {
    deleteBrewery();
  });


  const deleteBeerBut = document.querySelector(".deleteBeer")
  const deleteBeer = async () => {
  const beerDel = document.querySelector(".beer").value
    const url = `http://localhost:3010/delete_beer/${beerDel}`;
    console.log(url)

   
    const deleteBrewery = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
};
deleteBeerBut.addEventListener("click", () => {
  deleteBeer();
});