const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const router = express.Router();
const app = express();
const port = 8080;

__dirname = path.join(__dirname + "/public");

app.use(cors());
app.use(express.static(path.join(__dirname)));

// API
router.get("/api/spotlights", async (req, res) => {
  const spotlights = require(path.join(__dirname + "/Data/spotlights.json"));
  res.json(spotlights);
});

router.get("/api/gallery", async (req, res) => {
  const gallery = require(path.join(__dirname + "/Data/gallery.json"));
  res.json(gallery);
});

router.get("/api/testimonials", async (req, res) => {
  const testimonials = require(path.join(
    __dirname + "/Data/testimonials.json"
  ));
  res.json(testimonials);
});

router.get("/api/alumni", async (req, res) => {
  const alumni = require(path.join(__dirname + "/Data/alumni.json"));
  res.json(alumni);
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

router.get("/Activity/Gallery", function (req, res) {
  res.sendFile(path.join(__dirname + "/Html/gallery.html"));
});

router.get("/Activity/Spotlights", function (req, res) {
  res.sendFile(path.join(__dirname + "/Html/spotlights.html"));
});

router.get("/Activity/Newsletters", function (req, res) {
  res.sendFile(path.join(__dirname + "/Html/newsletter.html"));
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
