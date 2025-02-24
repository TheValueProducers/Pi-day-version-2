module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    student_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    username: {
      type: DataTypes.STRING(12),
      allowNull: false,
      unique: true
    },
    game_id: {
      type: DataTypes.STRING(6)
    },
    hashed_password: DataTypes.TEXT,
    full_name: DataTypes.TEXT,
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    date_of_birth: DataTypes.DATE
  });

  Student.associate = (models) => {
    Student.belongsTo(models.Game, { foreignKey: 'game_id', onDelete: 'CASCADE' });
    Student.hasMany(models.Attempt, { foreignKey: 'student_id', onDelete: 'CASCADE' });
  };

  return Student;
};