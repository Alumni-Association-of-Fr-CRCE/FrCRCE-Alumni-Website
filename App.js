const express = require("express");
const path = require("path");
const router = express.Router();
const app = express();
__dirname = path.join(__dirname + "/public");
const port = 8080;

app.use(express.static(path.join(__dirname)));

// API
router.get("/api/spotlights", function (req, res) {
  res.sendFile(path.join(__dirname + "/Data/spotlights.json"));
});

//  Home
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/Html/index.html"));
});

//  About Sub-Sections
router.get("/About/Association", function (req, res) {
  res.sendFile(path.join(__dirname + "/Html/association.html"));
});

router.get("/About/Team", function (req, res) {
  res.sendFile(path.join(__dirname + "/Html/team.html"));
});

//  Activity Sub-Sections
router.get("/Activity/Anual-Report", function (req, res) {
  res.sendFile(path.join(__dirname + "/Html/anual-report.html"));
});

router.get("/Activity/Gallary", function (req, res) {
  res.sendFile(path.join(__dirname + "/Html/gallary.html"));
});

router.get("/Activity/Spotlights", function (req, res) {
  res.sendFile(path.join(__dirname + "/Html/spotlights.html"));
});

//  Give Sub-Sections
router.get("/Give/Corpus", function (req, res) {
  res.sendFile(path.join(__dirname + "/Html/corpus.html"));
});

router.get("/Give/Foreign-Chapter", function (req, res) {
  res.sendFile(path.join(__dirname + "/Html/foreign-chapter.html"));
});

router.get("/Give/Mentorship", function (req, res) {
  res.sendFile(path.join(__dirname + "/Html/mentorship.html"));
});

//  Contribution
router.get("/Contributions/Contributers", function (req, res) {
  res.sendFile(path.join(__dirname + "/Html/contributions.html"));
});

router.get("/Contributions/Testimonials", function (req, res) {
  res.sendFile(path.join(__dirname + "/Html/testimonials.html"));
});

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
