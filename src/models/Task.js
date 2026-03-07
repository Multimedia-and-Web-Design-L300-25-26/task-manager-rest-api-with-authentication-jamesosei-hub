const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

<<<<<<< HEAD
const Task = mongoose.model("Task", taskSchema);

export default tasks;
=======
module.exports = mongoose.model("Task", taskSchema);
>>>>>>> 480eebc55ba9edc1983733dcd8a69a3b1ee84026
