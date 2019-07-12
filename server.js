const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

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
