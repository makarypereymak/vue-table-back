const Router = require("express").Router;
const tableController = require("../controllers/tableController");
const router = new Router();

router.get("/tableInfo", tableController.getAll);

module.exports = router;
