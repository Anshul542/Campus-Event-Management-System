const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  type: String,
  username: String,
  status: String,
  password: String,
  date: String,
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
// adminModel.create({
//   type: "admin",
//   userName: "admin",
//   password: "admin23",
//   status: "active",
//   date: new Date(),
// });
