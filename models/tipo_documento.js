/*jshintindent:2*/
module.exports = function (sequelize,
  DataTypes) {
  return sequelize.define('TipoDocumento',

    {
      id_tipo_documento: {
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
      tableName: 'tipo_documento',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      schema: 'public',
      classMethods: {
        associate: function (models) {
          models.TipoDocumento.hasMany(models.Tercero,

            {
              foreignKey: 'id_tipo_documento'
            }
          );

        }

      }

    }
  );

};
