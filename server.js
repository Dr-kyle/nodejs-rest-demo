const express = require("express");
const { Client } = require("@elastic/elasticsearch")
// const bodyParser = require("body-parser");

const server = express();
// const cors = require("cors");
// const corsSettings = {
//   originL: "http://localhost:8081"
// };

// server.use(cors(corsSettings));

const esConfig = require('./config/es')

console.log(esConfig)

const esClients = new Map();

Object.entries(esConfig).map(([key, value]) => {
  const client = new Client({
    nodes: value,
    sniffOnStart: true
  })
  // console.log(client.cluster.health())
  // const health = await client.cluster.health()
  // console.log('health', health)
  esClients.set(key, client)
})

// Parse request of content-type - application/json
server.use(express.json());
// parse requests of content-type -application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: true }));

require('./app/routes')(server, esClients);
// create a simple route
// server.get("/", (_req, res) => {
//    res.json({ message: "Welcome to node.js rest api application. Created for learning purposes by Christos Ploutarchou" });
// });

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log("Server running on port : " + port );
});