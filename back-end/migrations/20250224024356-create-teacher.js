module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Teachers', {
      teacher_id: {
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
      admin_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Admins',
          key: 'admin_id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      },
      hashed_password: Sequelize.TEXT,
      full_name: Sequelize.TEXT,
      email: Sequelize.TEXT,
      date_of_birth: Sequelize.DATE,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Teachers');
  }
};