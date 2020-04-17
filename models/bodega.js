/*jshintindent:2*/
module.exports = function (sequelize,
  DataTypes) {
  return sequelize.define('Bodega',

    {
      id_bodega: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      id_responsable: {
        type: DataTypes.INTEGER,
        allowNull: false /* JARR */
      }

    },

    {
      tableName: 'bodega',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      schema: 'public',
      classMethods: {
        associate: function (models) {
          models.Bodega.belongsTo(models.Tercero,

            {
              foreignKey: 'id_responsable'
            }
          );
          models.Bodega.hasMany(models.Documento,

            {
              foreignKey: 'id_bodega'
            }
          );

        }

      }

    }
  );

};
