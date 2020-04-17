/*jshintindent:2*/
module.exports = function (sequelize,
  DataTypes) {
  return sequelize.define('Rol',

    {
      id_rol: {
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
      tableName: 'rol',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      schema: 'public',
      classMethods: {
        associate: function (models) {
          models.Rol.hasMany(models.RolPermisos,

            {
              foreignKey: 'id_rol'
            }
          );
          models.Rol.hasMany(models.UsuarioRol,

            {
              foreignKey: 'id_rol'
            }
          );

        }

      }

    }
  );

};
