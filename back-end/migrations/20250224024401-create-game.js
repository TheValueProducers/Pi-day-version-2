module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Games', {
      game_id: {
        type: Sequelize.STRING(6),
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
      },
      code: {
        type: Sequelize.STRING(10),
        allowNull: false,
        unique: true
      },
      teacher_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Teachers',
          key: 'teacher_id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Games');
  }
};