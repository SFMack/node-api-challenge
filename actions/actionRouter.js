const express = require("express");

const router = express.Router();

const db = require("../data/helpers/actionModel");

// CREATE
// add a new action
router.post("/", (req, res) => {
  const newAction = req.body;
  db.insert(newAction)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "Unable to create your action" });
    });
});

// READ
// get all actions
router.get("/", (req, res) => {
  db.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "Not able to find this resources" });
    });
});

// UPDATE
// update an action
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  db.update(id, changes)
    .then(updatedAction => {
      res.status(200).json(updatedAction);
    })
    .catch(error => {
      console.log(error);
      res
        .status(500)
        .json({ errorMessage: "There was a problem updating your action" });
    });
});

// DELETE
// delete an action
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.remove(id)
    .then(deleted => res.status(202).json(deleted))
    .catch(error => {
      console.log(error);
      res
        .status(500)
        .json({ errorMessage: "There was a problem deleting your action" });
    });
});

module.exports = router;
