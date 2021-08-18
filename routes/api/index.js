const router = require("express").Router()
const computerRoutes = require("./computer");

router.use("/computer", computerRoutes)

module.exports = router;