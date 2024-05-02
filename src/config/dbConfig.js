const mongoose = require("mongoose");

const dbConfig =
  "mongodb+srv://alexmouraleal:dba2001a@cluster0.tvtc97t.mongodb.net/annotations?retryWrites=true&w=majority&appName=Cluster0";
const connection = mongoose.connect(dbConfig, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

module.exports = connection;
