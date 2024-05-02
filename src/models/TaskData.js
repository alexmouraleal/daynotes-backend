const mongoose = require("mongoose");
const TaskDataSchema = new mongoose.Schema({
  dayexec: String,
  hrexec: String,
  description: String,
  status: String,
});

module.exports = mongoose.model("Tasks", TaskDataSchema);
