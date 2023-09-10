require("dotenv").config({path:"./.env"})
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors")


app.use(cors());

require("./models/database").connectDatabase();
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use("/" , require("./routes/indexRouter"));

app.listen(PORT , console.log("Server Started !"));