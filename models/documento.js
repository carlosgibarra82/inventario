/*jshintindent:2*/
module.exports = function (sequelize,
  DataTypes) {
  return sequelize.define('Documento',

    {
      id_documento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      numero: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false
      },
      id_tercero: {
        type: DataTypes.INTEGER,
        allowNull: false /* JARR */
      },
      id_vendedor: {
        type: DataTypes.INTEGER,
        allowNull: false /* JARR */
      },
      id_bodega: {
        type: DataTypes.INTEGER,
        allowNull: false /* JARR */
      },
      valor_total: {
        type: DataTypes.REAL,
        allowNull: false
      },
      iva: {
        type: DataTypes.REAL,
        allowNull: false
      },
      impoconsumo: {
        type: DataTypes.REAL,
        allowNull: false
      }

    },

    {
      tableName: 'documento',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      schema: 'public',
      classMethods: {
        associate: function (models) {
          models.Documento.belongsTo(models.Tercero,

            {
              as: 'cliente',
              foreignKey: 'id_tercero'
            }
          );
          models.Documento.belongsTo(models.Tercero,

            { 
              as: 'vendedor',
              foreignKey: 'id_vendedor'
            }
          );
          models.Documento.belongsTo(models.Bodega,

            {
              foreignKey: 'id_bodega'
            }
          );
          models.Documento.hasMany(models.ReferenciasDocumento,

            {
              foreignKey: 'id_documento'
            }
          );

        }

      }

    }
  );

};
