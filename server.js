const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//iniciando o App
const app = express();

//Iniciando o Db
mongoose.connect(
  "mongodb+srv://instagramclone:instagramclone@cluster0-mvhkj.mongodb.net/nodeapi?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

requireDir("./src/models");

app.use("/api", require("./src/routes"));

app.listen(3002);
