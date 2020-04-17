/*jshintindent:2*/
module.exports = function (sequelize,
  DataTypes) {
  return sequelize.define('Usuario',

    {
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nombre_usuario: {
        type: DataTypes.STRING,
        allowNull: false
      },
      contrasena: {
        type: DataTypes.STRING,
        allowNull: false
      },
      id_tercero: {
        type: DataTypes.INTEGER,
        allowNull: false /* JARR */
      }

    },

    {
      tableName: 'usuario',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      schema: 'public',
      classMethods: {
        associate: function (models) {
          models.Usuario.belongsTo(models.Tercero,

            {
              foreignKey: 'id_tercero'
            }
          );
          models.Usuario.hasMany(models.UsuarioRol,

            {
              foreignKey: 'id_usuario'
            }
          );

        }

      }

    }
  );

};
