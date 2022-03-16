const express = require("express");
const path = require("path");
const router = express.Router();

//  Home
router.get("/", function (req, res) {
  res.sendFile(path.join(publicpath + "/Html/index.html"));
});

//  About Sub-Sections
router.get("/About/Association", function (req, res) {
  res.sendFile(path.join(publicpath + "/Html/association.html"));
});

router.get("/About/Team", function (req, res) {
  res.sendFile(path.join(publicpath + "/Html/team.html"));
});

//  Activity Sub-Sections
router.get("/Activity/Anual-Report", function (req, res) {
  res.sendFile(path.join(publicpath + "/Html/anual-report.html"));
});

router.get("/Activity/Alumni-Meet", function (req, res) {
  res.sendFile(path.join(publicpath + "/Html/alumni-meet.html"));
});

//  Give Sub-Sections
router.get("/Give/Corpus", function (req, res) {
  res.sendFile(path.join(publicpath + "/Html/corpus.html"));
});

router.get("/Give/Foreign-Chapter", function (req, res) {
  res.sendFile(path.join(publicpath + "/Html/foreign-chapter.html"));
});

router.get("/Give/Mentorship", function (req, res) {
  res.sendFile(path.join(publicpath + "/Html/mentorship.html"));
});

//  Contribution
router.get("/Contributions", function (req, res) {
  res.sendFile(path.join(publicpath + "/Html/contributions.html"));
});

module.exports = router;
