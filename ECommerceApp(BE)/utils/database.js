const Sequelize = require("sequelize").Sequelize;
const sequelize = new Sequelize("ecommerce", "root", "admin", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;
