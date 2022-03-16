const express = require("express");
const routes = require("./routes/routes");
const app = express();
publicpath = __dirname + "/public";
const port = 8080;

app.use(express.static(publicpath));
app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
