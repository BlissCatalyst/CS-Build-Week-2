const server = require("./server.js");
const axios = require("axios");

roomGraph = {}

axios
  .create({
    headers: {
      "Content-Type": "application.json",
      Authorization: "Token 0b83ec38bbe0de64cc61e9d19e649f1db870d0b9"
    }
  })
  .post("https://lambda-treasure-hunt.herokuapp.com/api/adv/move/", {
    direction: "s"
  })
  .then(res => {
    console.log(res.data);
    roomGraph[res.data.room_id] = {}
  })
  .catch(err => {
    console.log(err);
  });

server.listen(4000, () => {
  console.log("\n*** Server Running on http://localhost:4000 *** \n");
});
