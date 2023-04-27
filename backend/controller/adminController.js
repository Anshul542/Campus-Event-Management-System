const Admin = require("../models/adminModels");
const jwt = require("jsonwebtoken");
module.exports.getAdmins = async (req, res) => {
  const _data = await Admin.find();
  if (_data) {
    return res.send({ code: 200, message: "success", data: _data });
  } else {
    res.send({ code: 500, message: "service error" });
  }
};

module.exports.AddAdmin = async (req, res) => {
  try {
    const { username, password, type, status } = req.body;
    // const newDate = date.toString();
    // console.log(typeof date, date);
    // console.log(newDate);
    await Admin.create({
      username,
      password,
      type,
      status,
    //   date: newDate,
    });

    res.send({
      code: 201,
      message: "User created!",
    });
  } catch (error) {
    res.send({
      code: 500,
      message: error.message,
    });
  }
};

module.exports.loginAdmins = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Admin.findOne({ username });
    if (!user   )
      return res.send({
        code: 400,
        message: "User not found!",
      });

    if (user.password !== password)
      return res.send({
        code: 400,
        message: "Invalid password!",
      });

    const token = jwt.sign({ _id: user._id }, 'this');
    res.send({
      code: 201,
      message: "Login successful!",
      token,
      type: user.type,
    });
  } catch (error) {
    res.send({
      code: 500,
      message: error.message,
    });
  }
};
