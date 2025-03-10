const { Sequelize } = require("sequelize");

// Create a new Sequelize instance
const sequelize = new Sequelize("pi_day_v2_db", "pi_day_v2_db_user", "gCverkbyXpV5YToxZ53mTRawSE3dHaDb", {
  host: "dpg-cv6jocl2ng1s73fup92g-a", // Change if using a remote database
  dialect: "postgres",
  port: 5432, // Default PostgreSQL port
  logging: false, // Disable logging (optional)
});

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connected to PostgreSQL successfully!");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;