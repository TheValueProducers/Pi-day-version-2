module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Admins', {
      admin_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      username: {
        type: Sequelize.STRING(12),
        allowNull: false,
        unique: true
      },
      hashed_password: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      full_name: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
      },
      date_of_birth: {
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Admins');
  }
};