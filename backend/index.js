const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const servicesControllers = require("./controller/servicesControllers");
const adminController = require("./controller/adminController");
const multer = require("multer");
const app = express();
const upload=multer({dest:'uploads/'})
app.use("/uploads", express.static("uploads"));

app.use(cors());
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, { destination: "./uploads" });
//   },
//   filename: (req, file, cb) => {
//     const fileName = file.originalname.toLowerCase().split(" ").join("-");
//     cb(null, { fieldName: file.originalname });
//   },
// });

// const upload = multer({ storage });

app.get("/hello", (req, res) => {
  return res.send("Hello");
});

app.post(
  "/api/services",
  upload.single('image'),
  servicesControllers.addServices
);
app.get("/api/services", servicesControllers.getServices);
app.get("/api/slider", servicesControllers.getSlider);
app.get("/admin/admins", adminController.getAdmins);
app.post("/admin/add", adminController.AddAdmin);
app.post("/admin/login", adminController.loginAdmins);

app.listen(5000, () => {
  console.log("backend Running at Port 5000");
});

const connectionParams = {
  dbName: "Project",
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(process.env.MONGO_URL, connectionParams)
  .then(() => {
    console.log("database connected");
  })
  .catch((e) => {
    console.log("Error", e);
  });
