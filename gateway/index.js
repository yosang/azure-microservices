const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());

app.use("/cities", proxy("http://localhost:3000"));
app.use("/colors", proxy("http://localhost:3001"));
app.use("/", proxy("http://localhost:3002"));

app.listen(8000, (err) => {
  if (err) return console.log("Gateway failed to run");

  console.log("Gateway is running on port 8000");
});
