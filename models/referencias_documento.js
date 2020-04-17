/*jshintindent:2*/
module.exports = function (sequelize,
  DataTypes) {
  return sequelize.define('ReferenciasDocumento',

    {
      id_productos_documento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 'nextval(referencias_documento_id_productos_documento_seq::regclass)',
        primaryKey: true
      },
      id_documento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true /* JARR */
      },
      id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false /* JARR */
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      valor: {
        type: DataTypes.REAL,
        allowNull: false,
        primaryKey: true
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
      tableName: 'referencias_documento',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      schema: 'public',
      classMethods: {
        associate: function (models) {
          models.ReferenciasDocumento.belongsTo(models.Documento,

            {
              foreignKey: 'id_documento'
            }
          );
          models.ReferenciasDocumento.belongsTo(models.Referencia,

            {
              foreignKey: 'id_producto'
            }
          );

        }

      }

    }
  );

};
