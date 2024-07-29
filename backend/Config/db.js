const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://srujan:LlwaGB9IwNsYzb4r@paytm.3hs8ptb.mongodb.net/"
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Connection Successful");
});

connection.on("error", () => {
  console.log("Connection unsuccessful");
});
