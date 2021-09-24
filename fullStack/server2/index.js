console.log("why do you hate me backend")
const Sequelize = require("sequelize");
const { Register } = require("./models");
const { Brewery } = require("./models");
const { Beers } = require("./models")
const express = require("express");
const app = express();
const PORT = 3010;
const cors = require("cors")

// app.use(express.static(__dirname + '/public'));




// Middleware
app.use(express.json());
app.use(express.static(__dirname + '/public.'));
app.use(cors());
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

// ************

// Read Routes for Tables

app.post("/get_users", async (req,res) => {
    const list = await Register.findAll();
    res.send(list); 
  });

  app.post("/get_breweries", async (req,res) => {
    const list = await Brewery.findAll({
      attributes: ["breweryName", "date","city", "state"]
    }
    );
    res.send(list); 
  });

  app.post("/get_beers", async (req,res) => {
    const list = await Beers.findAll({
      attributes: ["beerName", "beerTyper", "maker"]
    });
    res.send(list); 
  });

// ************

// Update Routes for Tables

app.post("/update_user/:id", async (req,res) => {
    const update = await Register.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.send(update);
  });

  app.post("/update_brewery/:id", async (req,res) => {
    const update = await Brewery.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.send(update);
  });

  app.post("/update_beer/:id", async (req,res) => {
    const update = await Beers.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.send(update);
  });

// ************

// Deltete Routes for Tables

app.post("/delete_user/:id", async (req,res) => {
  
    const user = await Register.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("Deleted");
  });

  app.post("/delete_brewery/:id", async (req,res) => {
    const user = await Brewery.destroy({
      where: {
        id: req.params.id,
      },
    });
    console.log(user)
    res.send("Deleted");
  });
  

  app.post("/delete_brew/:breweryName", async (req,res) => {
    

    const user = await Brewery.destroy({
      where: {
        breweryName: req.params.breweryName,
      },
    });
    console.log("this is what user is",user)
    res.send("Deleted");
  });


  app.post("/delete_beer/:beerName", async (req,res) => {
    const user = await Beers.destroy({
      where: {
        beerName: req.params.beerName,
      },
    });
    console.log("this is what user is",user)
    res.send("Deleted");
  });

  
  
// // ************

  app.listen(PORT, console.log(`Listening on port ${PORT}`));