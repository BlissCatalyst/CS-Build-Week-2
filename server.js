const express = require("express");
const axios = require("axios");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  // axios
  //   .post("https://lambda-treasure-hunt.herokuapp.com/api/adv/move/", {
  //     params: {
  //       direction: "n"
  //     }
  //   })
  //   .then(res => {
  //     console.log(res);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  res.send("<h1>Server is Working!</h1>");
});

module.exports = server;
