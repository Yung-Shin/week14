const commentRoutes = require("./commentRoutes");
const postRoutes = require("./postRoutes");
const userRoutes = require("./userRoutes");
const router = require("express").Router();


// redirecting
router.use("/comments", commentRoutes); 
router.use("/posts", postRoutes); 
router.use("/users", userRoutes); 


module.exports = router;