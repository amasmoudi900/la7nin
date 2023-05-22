// import express module
const express = require("express");
// import bcrypt module
const bcrypt = require("bcrypt");
// import axios module
const axios = require("axios");
// import multer module
const multer = require("multer");
// import path module
const path = require("path");
// import body-parser module
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require("mongoose");
// Connect APP with DB server
mongoose.connect("mongodb://127.0.0.1:27017/la7ninDB");

const { ObjectId } = require("mongodb");
// create express application
const app = express();

// Configure Body-parser
// Send JSON responses
app.use(bodyParser.json());
// Get objects from Request
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

// Upload Files Config
app.use("/images", express.static(path.join("backend/images")));

const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const storageConfig = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});
// Models Importation
const Match = require("./models/match");
const Player = require("./models/player");
const Team = require("./models/team");
const User = require("./models/user");
const Reclamation = require("./models/reclamation");
const Comment = require("./models/comment");

// Function to generate ID
function generateId(T) {
  let max;
  if (T.length == 0) {
    max = 0;
  } else {
    max = T[0].id;
    for (let i = 0; i < T.length; i++) {
      if (T[i].id > max) {
        max = T[i].id;
      }
    }
  }
  return max + 1;
}

function checkEmail(email, usersTab) {
  let exist = false;
  for (let i = 0; i < usersTab.length; i++) {
    if (usersTab[i].email == email) {
      exist = true;
      break;
    }
  }
  return exist;
}
// Matches Tab Simulation
let matches = [
  { id: 1, scoreOne: 0, scoreTwo: 1, teamOne: "EST", teamTwo: "CSS" },
  { id: 2, scoreOne: 2, scoreTwo: 1, teamOne: "CIT", teamTwo: "WHU" },
  { id: 3, scoreOne: 1, scoreTwo: 3, teamOne: "LIV", teamTwo: "FULL" },
];
// Users Tab Simulation
let users = [
  {
    id: 1,
    firstName: "Ali",
    lastName: "Ben Salah",
    email: "a@a.a",
    pwd: "aaa",
    role: "user",
  },
  {
    id: 2,
    firstName: "Akram",
    lastName: "Ben Salah",
    email: "b@b.b",
    pwd: "bbb",
    role: "admin",
  },
  {
    id: 3,
    firstName: "La7nin",
    lastName: "Ben Salah",
    email: "c@c.c",
    pwd: "ccc",
    role: "user",
  },
];

// Business Logic: Get All Matches
app.get("/matches", (req, res) => {
  console.log("Here into BL: get all matches");
  Match.find().then((docs) => {
    res.json({ matchesArray: docs, message: "Done" });
  });
});

// Business Logic: Get Match By Id
app.get("/matches/:x", (req, res) => {
  console.log("Here into BL: Get Match By ID");
  // let id = activatedRoute.snapshot().paramMap().get("x");
  let id = req.params.x;
  Match.findOne({ _id: id }).then((doc) => {
    res.json({ match: doc });
  });
});

// Business Logic: Add Match
app.post("/matches", (req, res) => {
  console.log("Here into BL: Add Match");
  // Get object from request
  let match = new Match(req.body);
  match.save();
  res.json({ message: "Added with success" });
});

// Business Logic: Delete Match By Id
app.delete("/matches/:x", (req, res) => {
  console.log("Here into BL: Delete Match By Id");
  let id = req.params.x;
  Match.deleteOne({ _id: id }).then((response) => {
    if (response.deletedCount == 1) {
      res.json({ isDeleted: true });
    } else {
      res.json({ isDeleted: false });
    }
  });
});

// Business Logic: Edit Match
app.put("/matches", (req, res) => {
  console.log("Here into BL: Edit match");
  let newMatch = req.body;
  Match.updateOne({ _id: newMatch._id }, newMatch).then((response) => {
    if (response.nModified == 1) {
      res.json({ isUpdated: true });
    } else {
      res.json({ isUpdated: false });
    }
  });
});

// Business Logic: Search Matches By Scores
app.post("/matches/search", (req, res) => {
  console.log("Here into BL: Search matches", req.body);
  let search = req.body;
  let findedMatches = matches.filter((obj) => {
    return obj.scoreOne == search.scoreOne || obj.scoreTwo == search.scoreTwo;
  });
  res.json({ searchTab: findedMatches });
});

// Business Logic: Signup
app.post(
  "/users/signup",
  multer({ storage: storageConfig }).single("img"),
  (req, res) => {
    console.log("Here into BL: Signup", req.body);
    bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
      console.log("Crypted pwd", cryptedPwd);
      let url = req.protocol + "://" + req.get("host");

      let imgPath = req.file
        ? url + "/images/" + req.file.filename
        : url + "/images/avatar.png";
      // if (req.file) {
      //   imgPath = req.file.filename;
      // } else {
      //   imgPath = null;
      // }
      let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        pwd: cryptedPwd,
        tel: req.body.tel,
        role: req.body.role,
        img: imgPath,
      });
      user.save((err, doc) => {
        console.log("Here error", err);
        console.log("Here doc", doc);
        if (err) {
          res.json({ message: false });
        } else {
          res.json({ message: true });
        }
      });
    });
  }
);

// 0 : Please check Email
// 1 : Please check PWD
// 2 : Welcome
// Business Logic: Login
app.post("/users/login", (req, res) => {
  let user = req.body;
  let userToSend;
  User.findOne({ email: user.email })
    .then((response) => {
      if (!response) {
        res.json({ message: "0" });
      }
      userToSend = response;
      return bcrypt.compare(user.pwd, response.pwd);
    })
    .then((pwdResponse) => {
      if (!pwdResponse) {
        res.json({ message: "1" });
      } else {
        // Object {fName, lName, id, role}
        let userObj = {
          id: userToSend._id,
          fName: userToSend.firstName,
          lName: userToSend.lastName,
          role: userToSend.role,
        };
        res.json({ message: "2", user: userObj });
      }
    });
});

// Business Logic : Add Player
app.post("/players", (req, res) => {
  console.log("Here into BL: Add Player");
  let player = new Player(req.body);
  player.save();
  res.json({ message: "Added with success" });
});

// Business Logic: Get User By ID
app.get("/users/:id", (req, res) => {
  console.log("Here into BL: Get User By Id", req.params.id);
  User.findOne({ _id: req.params.id }).then((doc) => {
    console.log("here doc", doc);
    res.json({ user: doc });
  });
});

// Business Logic: Search Weather
app.post("/weather", (req, res) => {
  console.log("Here object", req.body);
  // Key from OpenWeatherMapAPI (after login)
  const key = "62ee756a34835483299877a61961cafb";
  // City from FE (form)
  const city = req.body.city;
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  axios.get(apiURL).then((response) => {
    console.log("Response from API ", response.data.weather);
    let weatherRes = {
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      image: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    };
    res.json({ weather: weatherRes });
  });
});

// Business Logic: Add Reclamation
app.post("/reclamations", (req, res) => {
  let reclamation = new Reclamation(req.body);
  reclamation.save((err, doc) => {
    if (err) {
      res.json({ isAdded: false });
    } else {
      res.json({ isAdded: true });
    }
  });
});

// Business Logic : Get All user Reclamtions
app.get("/reclamations/:id", (req, res) => {
  Reclamation.find({ userId: req.params.id }).then((docs) => {
    res.json({ reclamations: docs });
  });
});

// Business Logic: Add Comment
app.post("/matches/comment", (req, res) => {
  console.log("Here comment", req.body);
  let comment = new Comment({
    content: req.body.content,
    userId: ObjectId(req.body.userId),
    matchId: ObjectId(req.body.matchId),
  });
  comment.save((err, doc) => {
    if (err) {
      res.json({ isAdded: false });
    } else {
      res.json({ isAdded: true });
    }
  });
});

// Business Logic: Get All Matches With Comments
app.get("/matches/comments/getAll", (req, res) => {
  console.log("Here to get All matches with comments");
  Match.aggregate(
    [
      {
        $lookup: {
          from: "comments", // collection to join
          localField: "_id", //field from the input documents
          foreignField: "matchId", //field from the documents of the "from" collection
          as: "comments", // output array field
        },
      },
    ],
    (error, docs) => {
      res.json({ matches: docs });
    }
  );
});

// make app importable
module.exports = app;
