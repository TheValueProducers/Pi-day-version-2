module.exports = (sequelize, DataTypes) => {
  const Attempt = sequelize.define('Attempt', {
    attempt_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    student_id: {
      type: DataTypes.UUID
    },
    game_id: {
      type: DataTypes.STRING(6)
    },
    answer: DataTypes.TEXT,
    correct_answer: DataTypes.INTEGER,
    rank: DataTypes.INTEGER
  });

  Attempt.associate = (models) => {
    Attempt.belongsTo(models.Student, { foreignKey: 'student_id', onDelete: 'CASCADE' });
    Attempt.belongsTo(models.Game, { foreignKey: 'game_id', onDelete: 'CASCADE' });
  };

  return Attempt;
};