const router = require("express").Router();
const activity = require("../controllers/activity.controller");

router.get("/", activity.index);
router.post("/", activity.create);
router.put("/:id", activity.update);
router.delete("/:id", activity.destroy);

router.get("/:id", activity.show);

module.exports = router;
