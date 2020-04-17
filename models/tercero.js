/*jshintindent:2*/
module.exports = function (sequelize,
  DataTypes) {
  return sequelize.define('Tercero',

    {
      id_tercero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      documento: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nombre_1: {
        type: DataTypes.STRING,
        allowNull: true
      },
      nombre_2: {
        type: DataTypes.STRING,
        allowNull: true
      },
      apellido_1: {
        type: DataTypes.STRING,
        allowNull: true
      },
      apellido_2: {
        type: DataTypes.STRING,
        allowNull: true
      },
      razon_social: {
        type: DataTypes.STRING,
        allowNull: true
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      id_tipo_documento: {
        type: DataTypes.INTEGER,
        allowNull: false /* JARR */
      }

    },

    {
      tableName: 'tercero',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      schema: 'public',
      classMethods: {
        associate: function (models) {
          models.Tercero.belongsTo(models.TipoDocumento,

            {
              foreignKey: 'id_tipo_documento'
            }
          );
          models.Tercero.hasMany(models.Usuario,

            {
              foreignKey: 'id_tercero'
            }
          );
          models.Tercero.hasMany(models.Documento,

            {
              foreignKey: 'id_tercero'
            }
          );
          models.Tercero.hasMany(models.Documento,

            {
              foreignKey: 'id_vendedor'
            }
          );
          models.Tercero.hasMany(models.Bodega,

            {
              foreignKey: 'id_responsable'
            }
          );
          models.Tercero.hasMany(models.Referencia,

            {
              foreignKey: 'id_proveedor'
            }
          );

        }

      }

    }
  );

};
