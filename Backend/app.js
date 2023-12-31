const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const areasRoutes = require("./routes/areas");
const coachRoutes = require("./routes/coach");
const requestRoutes = require("./routes/request");
const authRoutes = require("./routes/auth");

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Hello World",
  });
});

app.use(bodyParser.json());
app.use(express.json()); // application/json
app.use(express.urlencoded({ extended: true })); // application/x-www-form-urlencoded
app.use(cors());

app.use("/area", areasRoutes);
app.use('/coach', coachRoutes);
app.use('/request', requestRoutes);
app.use('/auth',authRoutes)

const port = process.env.PORT || 8000;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
