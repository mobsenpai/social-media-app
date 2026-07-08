const dotenv = require("dotenv");
// keep it before importing the connection.js because,
// if not, then, it won't find the process.env variable
dotenv.config();
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
require("./config/connection");
const userRoute = require("./routes/userRoutes");
const authRoute = require("./routes/authRoutes");
const postRoute = require("./routes/postRoutes");
const app = express();
const port = process.env.PORT || 8800;

// middleware
// middlewares are functions
// all these functions have access to req and res
// and these functions run to provide various functionalities
// parses the res.body, which typically is in json format to js object format
app.use(express.json());

// provides security in http headers
app.use(helmet());

// used to log information
app.use(morgan("common"));

// allows frontend and backend running on different ports to communicate
app.use(cors());

// routes
// will show on localhost:8800/api/users
app.use("/api/users", userRoute);

// will show on localhost:8800/api/auth
app.use("/api/auth", authRoute);

// will show on localhost:8800/api/post
app.use("/api/posts", postRoute);

// register route
app.listen(port, () => {
  console.log("Backend server is running");
});
