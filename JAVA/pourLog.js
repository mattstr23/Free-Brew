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

//Add Brew to DB
const brewSub = document.querySelector(".brewSub");
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
  if (createBrew.status === 200) {
    window.location.reload();
}


};
brewSub.addEventListener("click", () => {
  createBrew();
  });


//End Add Brew
//Add Beer
const beerSub = document.querySelector(".beerSub");
const createBeer = async () => {
    const url = "http://localhost:3010/create_beers";
    const beerName = document.querySelector(".beerName").value;
    const beerTyper = document.querySelector(".beerType").value;
    const maker = document.querySelector(".maker").value;
    const beerData = {
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
  if (createBeer.status === 200) {
    window.location.reload();
}
};

beerSub.addEventListener("click", () => {
  createBeer();
  });
//End Add Beer
//Brew Read
const userBrewz = document.querySelector(".userBrewz");
const brewRead = async () => {
    const url = "http://localhost:3010/get_breweries";
    const brewData = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json",}
    });
    const json = await brewData.json();
    for (const brew of json) {
        const breName = brew.breweryName;
        const breDate = brew.date;
        const brewCity = brew.city;
        const brewState = brew.state;
        const brewDiv = document.createElement("div");
        brewDiv.className = "brewDiv";
        const userBrewName = document.createElement("h4");
        userBrewName.className = "userBrewName";
        const userBrewDate = document.createElement("h4");
        userBrewDate.className = "userBrewDate";
        const userBrewCity = document.createElement("h4");
        userBrewCity.className = "userBrewCity";
        const userBrewState = document.createElement("h4");
        userBrewState.className = "userBrewState";
        const deleteButton = document.createElement("button");
        deleteButton.className = `brewery-${brew.breweryName}`;
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", () => deleteBrewery(brew.breweryName));
        userBrewName.innerHTML = `${breName}`;
        userBrewDate.innerHTML = `${breDate}`;
        userBrewCity.innerHTML = `${brewCity}`;
        userBrewState.innerHTML = `${brewState}`;
        brewDiv.append(userBrewName, userBrewDate, userBrewCity, userBrewState, deleteButton);
        userBrewz.append(brewDiv);
    }
    if (brewRead.status === 200) {
      window.location.reload();
    }
};
brewRead()
// End Brew Read

// Beging Beer Read
const userBeerz = document.querySelector(".userBeerz");
const beerRead = async () => {
    const url = "http://localhost:3010/get_beers";
    const beerData = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json",}
    });
    const json = await beerData.json();
    for (const beer of json) {
        const beName = beer.beerName;
        const beType = beer.beerTyper;
        const beMaker = beer.maker;
        const beerDiv = document.createElement("div");
        beerDiv.className = "beerDiv";
        const userBeerName = document.createElement("h4");
        userBeerName.className = "userBeerName";
        const beerType = document.createElement("h4");
        beerType.className = "beerType";
        const beerMaker = document.createElement("h4");
        beerMaker.className = "beerMaker";        
        const deleteButton = document.createElement("button");
        deleteButton.className = `beer-${beer.beerName}`;
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", () => deleteBeer(beer.beerName));
        userBeerName.innerHTML = `${beName}`;
        beerType.innerHTML = `${beType}`;
        beerMaker.innerHTML = `${beMaker}`;        
        beerDiv.append(userBeerName, beerType, beerMaker, deleteButton);
        userBeerz.append(beerDiv);
    }
    if (beerRead.status === 200) {
      window.location.reload();
    }
};
beerRead()
// Delete Brew
    const deleteBrewery = async (breweryName) => {
      const url = `http://localhost:3010/delete_brew/${breweryName}`;
      console.log(url)
      const deleteBrewery = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
     
      });
      if (deleteBrewery.status === 200) {
        window.location.reload();
  }};

// Delete Beer

const deleteBeer = async (beerName) => {
  const url = `http://localhost:3010/delete_beer/${beerName}`;
  console.log(url)
  const deleteBeer = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
 
  });
  if (deleteBeer.status === 200) {
    window.location.reload();
}};



