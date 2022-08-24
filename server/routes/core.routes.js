const router = require("express").Router();

const coreController = require("../controllers/core.controller");

router.get("/users", coreController.getUsers);
router.get("/tasks", coreController.getTasks);
router.post("/task", coreController.addTask);

module.exports = router;
