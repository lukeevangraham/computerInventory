const router = require("express").Router()
const computerController = require("../../controllers/computerController")

router.route("/").get(computerController.read).post(computerController.create)
// router.put("/:id", computerController.update).delete(computerController.delete)

module.exports = router;