const router = require("express").Router();
const employee = require("../controllers/employee.controller");

router.get("/", employee.index);
router.post("/", employee.create);
router.put("/:id", employee.update);
router.delete("/:id", employee.destroy);
router.get("/check", employee.checkActiveEmployees);

module.exports = router;
