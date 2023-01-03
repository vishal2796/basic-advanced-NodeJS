const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./utils/database");

const app = express();
app.use(bodyParser.json());

const productRoutes = require("./routes/products");
app.use(productRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
