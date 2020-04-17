/*jshintindent:2*/
module.exports = function (sequelize,
  DataTypes) {
  return sequelize.define('UsuarioRol',

    {
      id_usuario_rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false /* JARR */ ,
        unique: true
      },
      id_rol: {
        type: DataTypes.INTEGER,
        allowNull: false /* JARR */
      }

    },

    {
      tableName: 'usuario_rol',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      schema: 'public',
      classMethods: {
        associate: function (models) {
          models.UsuarioRol.belongsTo(models.Usuario,

            {
              foreignKey: 'id_usuario'
            }
          );
          models.UsuarioRol.belongsTo(models.Rol,

            {
              foreignKey: 'id_rol'
            }
          );

        }

      }

    }
  );

};
