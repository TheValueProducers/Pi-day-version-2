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
      type: DataTypes.UUID
    },
    status: {
      type: DataTypes.ENUM("in_game", "finished", "disqualified"),
      allowNull: false
    },
    answer: DataTypes.TEXT,
    
  });

  Attempt.associate = (models) => {
    Attempt.belongsTo(models.Student, { foreignKey: 'student_id', onDelete: 'CASCADE' });
    Attempt.belongsTo(models.Game, { foreignKey: 'game_id', onDelete: 'CASCADE' });
  };

  return Attempt;
};