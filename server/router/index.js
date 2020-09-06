const router = require("express").Router();
const DoctorController = require("../controller/DoctorController");

router.get("/doctor/:city", DoctorController.getData);
router.get("/doctor/find/:id", DoctorController.getDataById);

module.exports = router;
