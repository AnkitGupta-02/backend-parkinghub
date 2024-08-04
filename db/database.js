const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("db", "root", "StrongPass123!", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

module.exports = sequelize;

// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("db", "root", "StrongPass123!", {
//   host: "localhost",
//   port: 3306,
//   dialect: "mysql", // or 'mysql', 'sqlite', 'mssql'
// });

// const User = sequelize.define(
//   "User",
//   {
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     // Other model options go here
//   }
// );

// // Sync all defined models to the DB
// sequelize
//   .sync()
//   .then(() => {
//     console.log("Database & tables created!");
//   })
//   .catch((error) => {
//     console.error("Unable to connect to the database:", error);
//   });

// module.exports = User;
