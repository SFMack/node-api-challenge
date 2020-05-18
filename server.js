const express = require("express");
const cors = require("cors");

const actionRouter = require("./actions/actionRouter.js");
const projectRouter = require("./projects/projectRouter.js");

const server = express();

server.use(express());
server.use(cors());
server.use(express.json());
server.use("/api/actions", actionRouter);
server.use("/api/projects", projectRouter);
// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

server.get("/", (req, res) => {
  res.send(`<h3>Server is running</h3>`);
});

module.exports = server;
