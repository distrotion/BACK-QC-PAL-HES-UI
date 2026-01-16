const express = require("express");
const router = express.Router();

router.use(require("./flow/001/sap"));
router.use(require("./flow/001/getmaster"));
router.use(require("./flow/001/upqcdata"));
router.use(require("./flow/001/INSFINISH"));
router.use(require("./flow/001/cleardata"));
router.use(require("./flow/001/GRAPHMASTER"));
router.use(require("./flow/001/1-APP-PALHES"));
router.use(require("./flow/001/2-HP-EWB-008"));
router.use(require("./flow/001/3-HP-THI-002"));
router.use(require("./flow/001/5-HS-MCS-001"));
router.use(require("./flow/001/6-HP-THI-001"));
router.use(require("./flow/001/7-HP-THI-005"));

router.use(require("./flow/001/reportlist"));


router.use(require("./flow/003/getmasterIP"));

router.use(require("./flow/006/1-INPROCESS"));




// router.use(require("./flow/002/01TOBEREPORT"));
//INSFINISH
// router.use(require("./flow/004/flow004"))
router.use(require("./flow/login/login"))
router.use(require("./flow/testflow/testflow"));

module.exports = router;

