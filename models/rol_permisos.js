/*jshintindent:2*/
module.exports = function (sequelize,
  DataTypes) {
  return sequelize.define('RolPermisos',

    {
      id_rol_permisos: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      id_rol: {
        type: DataTypes.INTEGER,
        allowNull: false /* JARR */ ,
        unique: true
      },
      id_permiso: {
        type: DataTypes.INTEGER,
        allowNull: false /* JARR */
      }

    },

    {
      tableName: 'rol_permisos',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      schema: 'public',
      classMethods: {
        associate: function (models) {
          models.RolPermisos.belongsTo(models.Rol,

            {
              foreignKey: 'id_rol'
            }
          );
          models.RolPermisos.belongsTo(models.Permiso,

            {
              foreignKey: 'id_permiso'
            }
          );

        }

      }

    }
  );

};
