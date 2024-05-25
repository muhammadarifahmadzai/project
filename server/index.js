const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/authRoute");
const app = express();

// 1) Middleware
app.use(cors());
app.use(express.json()); // Replaces bodyParser.json() as it is built into Express
app.use(express.urlencoded({ extended: true })); // Replaces bodyParser.urlencoded()

// 2) Routers
app.use("/api/auth", authRouter);

// 3) Database
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database"))
  .catch(() => console.log("Not connected to database"));

// Global Error Handler
app.use((err, req, res, next) => { // Corrected parameter order
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log("App running on port " + PORT);
});
