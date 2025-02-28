module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    teacher_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    username: {
      type: DataTypes.STRING(12),
      allowNull: false,
      unique: true
    },
    admin_id: {
      type: DataTypes.UUID
    },
    password: DataTypes.TEXT,
    full_name: DataTypes.TEXT,
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    date_of_birth: DataTypes.DATE
  });

  Teacher.associate = (models) => {
    Teacher.belongsTo(models.Admin, { foreignKey: 'admin_id', onDelete: 'SET NULL' });
    Teacher.hasMany(models.Game, { foreignKey: 'teacher_id', onDelete: 'CASCADE' });
  };

  return Teacher;
};