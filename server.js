const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 8000;

const bodyParser = require("body-parser");
const ImageRouter = require("./router");

const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(cors());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "hellow roasd" }).end();
});

app.use("/api", ImageRouter);

app.listen(port, () => {
  console.log(`server started in port ${port}`);
});
