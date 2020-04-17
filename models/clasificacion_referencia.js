/*jshintindent:2*/
module.exports = function (sequelize,
  DataTypes) {
  return sequelize.define('ClasificacionReferencia',

    {
      id_clasificacion_referencia: {
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
      tableName: 'clasificacion_referencia',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      schema: 'public',
      classMethods: {
        associate: function (models) {
          models.ClasificacionReferencia.hasMany(models.Referencia,

            {
              foreignKey: 'id_clasificacion_referencia'
            }
          );

        }

      }

    }
  );

};
