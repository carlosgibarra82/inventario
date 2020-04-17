/*jshintindent:2*/
module.exports = function (sequelize,
  DataTypes) {
  return sequelize.define('Permiso',

    {
      id_permiso: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false
      }

    },

    {
      tableName: 'permiso',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      schema: 'public',
      classMethods: {
        associate: function (models) {
          models.Permiso.hasMany(models.RolPermisos,

            {
              foreignKey: 'id_permiso'
            }
          );

        }

      }

    }
  );

};
