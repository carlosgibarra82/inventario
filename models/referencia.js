/*jshintindent:2*/
module.exports = function (sequelize,
  DataTypes) {
  return sequelize.define('Referencia',

    {
      id_referencia: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      id_proveedor: {
        type: DataTypes.INTEGER,
        allowNull: false /* JARR */
      },
      id_clasificacion_referencia: {
        type: DataTypes.INTEGER,
        allowNull: false /* JARR */
      },
      iva: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      impoconsumo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }

    },

    {
      tableName: 'referencia',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      schema: 'public',
      classMethods: {
        associate: function (models) {
          models.Referencia.belongsTo(models.Tercero,

            {
              foreignKey: 'id_proveedor'
            }
          );
          models.Referencia.belongsTo(models.ClasificacionReferencia,

            {
              foreignKey: 'id_clasificacion_referencia'
            }
          );
          models.Referencia.hasMany(models.ReferenciasDocumento,

            {
              foreignKey: 'id_producto'
            }
          );

        }

      }

    }
  );

};
