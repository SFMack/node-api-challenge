const express = require("express");

const router = express.Router();

const db = require("../data/helpers/projectModel");

// CREATE
// add a new
router.post("/", (req, res) => {
  const newProject = req.body;
  db.insert(newProject)
    .then(projects => {
      console.log(`Project created succesfully`);
      res.status(201).json(projects);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        errorMessage: "There was a problem. Your project was not added.",
      });
    });
});

// READ
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

// UPDATE
// update a project
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  db.update(id, changes)
    .then(updatedProject => {
      res.status(202).json(updatedProject);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "Unable to update your project" });
    });
});

// DELETE
// delete a project
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.remove(id)
    .then(deleted => {
      res.status(202).json({ successMessage: `Deleted ${deleted}` });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "Unable to delete the project" });
    });
});

module.exports = router;
