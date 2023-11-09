const express = require("express");
const cors = require("cors");
const dbConfig = require("./app/config/database");
const mongoose = require("mongoose");
const db = require("./app/models/user.model.js");

const app = express();

const corsOptions = {
  origin: "*",
};

//register cors middleware
app.use(cors(corsOptions));
app.use(express.json());

//membuat routes
app.get("/", (req, res) => {
  res.json({ massage: "Hello World" });
});

const PORT = process.env.PORT || 4010;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));

module.exports = {
  mongoose,
  url: dbConfig.url,
  user: require("./app/models/user.model.js")(mongoose),
};

//konek ke database

mongoose.connect("moongodb://localhost:27017/dashboard");

const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

db.mongoose
  .connect(db.url, mongooseConfig)
  .then(() => console.log("database connected"))
  .catch((err) => {
    console.log("gagal konek ${err.massage}");
    process.exit();
  });
