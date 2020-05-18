const express = require("express");

const router = express.Router();

const db = require("../data/helpers/projectModel");

// get all projects
router.get("/", (req, res) => {
  db.get()
    .then(projects => {
      if (projects) {
        res.status(200).json(projects);
      }
    })
    .catch(error => {
      console.log(error);
      res.status(404).json({ errorMessage: "Could not find this resource" });
    });
});

module.exports = router;
