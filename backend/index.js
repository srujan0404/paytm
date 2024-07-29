const express = require("express");
var cors = require("cors");
const app = express();

const userRoutes = require("./routes/userRoute");

app.use(cors());
app.use(express.json());
app.use("api/v1/users", userRoutes);

app.listen("8000", () => {
    console.log("Server running");
})
