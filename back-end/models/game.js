module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    game_id: {
      type: DataTypes.STRING(6),
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("in_game", "finished"),
      allowNull: false
    },
    
    code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true
    },
    teacher_id: {
      type: DataTypes.UUID
    }
  });

  Game.associate = (models) => {
    Game.belongsTo(models.Teacher, { foreignKey: 'teacher_id', onDelete: 'CASCADE' });
    Game.hasMany(models.Student, { foreignKey: 'game_id', onDelete: 'CASCADE' });
    Game.hasMany(models.Attempt, { foreignKey: 'game_id', onDelete: 'CASCADE' });
  };

  return Game;
};