module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      student_id: {
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
      class: {
        type: Sequelize.STRING(3),
        allowNull: false,
        unique: true
      },
      
      hashed_password: Sequelize.TEXT,
      full_name: Sequelize.TEXT,
      email: Sequelize.TEXT,
      date_of_birth: Sequelize.DATE,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      
      
    });
    

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Students');
  }
};