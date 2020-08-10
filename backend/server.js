const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 9090;

var corsOptions = {
  origin: true
}

const app = express()
  .use("/", require("./routes/routes"))
  .use(cors(corsOptions))
  .use(bodyParser.json({ limit: "1mb" }))
  .listen(port, () => {
    console.log("listening on port: " + port);
  });
