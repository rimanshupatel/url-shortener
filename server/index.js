const express = require("express");
const connectToMongoDb = require("./connections");
const urlRoute = require("./Routes/url");
const app = express();
const cors = require("cors");
const PORT = 8000;

// connection to mongoDB;
connectToMongoDb("mongodb://localhost:27017/url-shortner").then(() => {
  console.log("mongoDB connected");
});
app.use(cors());
// middleware
app.use(express.json());

// custom router
app.use("/", urlRoute);

app.listen(PORT, () => {
  console.log(`server running at PORT ${PORT}`);
});
