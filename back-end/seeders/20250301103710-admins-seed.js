const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    const saltRounds = 10;

    await queryInterface.bulkInsert("Admins", [
      {
        admin_id: uuidv4(),
        username: "ThePhat",
        hashed_password: await bcrypt.hash("Sp4scldmcc.", saltRounds),
        full_name: "Nghiem The Phat",
        email: "phatnghiemthe07@gmail.com",
        date_of_birth: new Date("2007-04-22"),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Admins", null, {});
  }
};