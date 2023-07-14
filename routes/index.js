const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const homeRoutes = require("./htmlRoutes/homeRoutes");
const dashboardRoutes = require("./htmlRoutes/dashboardRoutes");


// get request
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);

// post, put, delete request
router.use("/api", apiRoutes);


module.exports = router;