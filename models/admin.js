module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    admin_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    username: {
      type: DataTypes.STRING(12),
      allowNull: false,
      unique: true
    },
    hashed_password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    full_name: DataTypes.TEXT,
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    date_of_birth: DataTypes.DATE
  });

  Admin.associate = (models) => {
    Admin.hasMany(models.Teacher, { foreignKey: 'admin_id', onDelete: 'SET NULL' });
  };

  return Admin;
};