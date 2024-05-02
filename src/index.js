const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();
require("./config/dbConfig");

app.use(cors());

const port = process.env.PORT || 3333;

app.use(express.json());
app.use(routes);
app.listen(port);
