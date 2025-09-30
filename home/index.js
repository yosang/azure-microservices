const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const indexRouter = require("./routes");

app.use("/", indexRouter);

app.listen(3002, (err) => {
  if (err) return console.log("Home services was unable to run");
  console.log("Home service is running on port 3002");
});
