require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));
app.use("/", indexRouter);
app.use("/api", apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Your app is listening on port " + port);
});
