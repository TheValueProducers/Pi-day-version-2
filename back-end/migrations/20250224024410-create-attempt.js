module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Attempts', {
      attempt_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      student_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Students',
          key: 'student_id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      game_id: {
        type: Sequelize.STRING(6),
        references: {
          model: 'Games',
          key: 'game_id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      answer: Sequelize.TEXT,
      correct_answer: Sequelize.INTEGER,
      rank: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Attempts');
  }
};