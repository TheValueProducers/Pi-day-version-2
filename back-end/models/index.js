'use strict';

require("dotenv").config(); // ✅ Load environment variables first

console.log("🔍 Checking Environment Variables:");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("DATABASE_URL:", process.env.DATABASE_URL ? "✅ Exists" : "❌ Undefined");

if (!process.env.DATABASE_URL) {
  throw new Error("❌ DATABASE_URL is missing! Check Render environment variables.");
}

const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');

const db = {};
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'production';

// ✅ If in production, use `DATABASE_URL` directly
let sequelize;
if (env === 'production') {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Required for Render
      },
    },
    logging: false, // Optional: Disable logging in production
  });
} else {
  // ✅ Otherwise, load database credentials from `config.json`
  const config = require(path.join(__dirname, '/../config/config.json'))[env];

  sequelize = config.use_env_variable
    ? new Sequelize(process.env[config.use_env_variable], config)
    : new Sequelize(config.database, config.username, config.password, config);
}

// ✅ Load models dynamically
fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// ✅ Associate models if needed
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// ✅ Export Sequelize instance
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;