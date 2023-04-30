const express = require("express");
const app = express();

// defining PORT to run my express server
const PORT = 4000;

// requiring mongoose library to be able to perform operations on mongoDB
const db = require("./config/mongoose");

//parse both application/json and  raw text
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

//use express router
app.use("/", require("./routes/index"));

//server running on port 4000
app.listen(PORT, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on PORT : ${PORT} ..........`);
});
