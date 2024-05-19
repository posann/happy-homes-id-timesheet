const router = require("express").Router();
const project = require("../controllers/project.controller");

router.get("/", project.index);
router.post("/", project.create);
router.get("/:id", project.show);

module.exports = router;
