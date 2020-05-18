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

server.get("/", (req, res) => {
  res.send(`<h3>Server is running</h3>`);
});

module.exports = server;
