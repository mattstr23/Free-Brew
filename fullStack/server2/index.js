console.log("why do you hate me backend")
const Sequelize = require("sequelize");
const { Register } = require("./models");
const { Brewery } = require("./models");
const { Beers } = require("./models")
const express = require("express");
const app = express();
const PORT = 3010;
// const cors = require("cors")




// Middleware
app.use(express.json());
// app.use(cors());
// ************

// Create Route for Tables 
app.post("/create_users", async (req, res) => {
    const { userName, email, password } = req.body;
  
    const newUser = await Register.create({
      userName: userName,
      email: email,
      password: password,
    });
    res.send(`Inserted New user with ${newUser.userName} ${newUser.id}`);
  });

  app.post("/create_breweries", async (req, res) => {
    const { name, breweryName, date, city, state } = req.body;
  
    const newUser = await Brewery.create({
      name: name,
      breweryName: breweryName,
      date: date,
      city: city,
      state: state
    });
    res.send(`Inserted New user with ${newUser.firstName} ${newUser.id}`);
  });

  app.post("/create_beers", async (req, res) => {
    const { userName, beerName, beerTyper, maker } = req.body;
  
    const newUser = await Beers.create({
      userName: userName,
      beerName: beerName,
      beerTyper: beerTyper,
      maker: maker
    });
    res.send(`Inserted New user with ${newUser.firstName} ${newUser.id}`);
  });
app.listen(PORT, console.log(`Listening on port ${PORT}`));
