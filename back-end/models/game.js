module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define("Game", {
    game_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("in_game", "finished"),
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    teacher_id: {
      type: DataTypes.UUID,
    },
  });

  Game.associate = (models) => {
    

    // ✅ One-to-Many: A game belongs to a teacher
    Game.belongsTo(models.Teacher, { foreignKey: "teacher_id", onDelete: "CASCADE" });

    // ✅ One-to-Many: A game has multiple attempts
    Game.hasMany(models.Attempt, { foreignKey: "game_id", onDelete: "CASCADE", as: "attempts" });

    Game.belongsToMany(models.Student, {through: models.Attempt, foreignKey: "game_id",  onDelete: "CASCADE", onUpdate: "CASCADE", as: "students" })
  };

  return Game;
};