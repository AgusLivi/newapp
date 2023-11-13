const { DataTypes } = require("sequelize");
const { v4: UUIDV4 } = require("uuid");

module.exports = (sequelize) => {
   sequelize.define(
    "Rutina",
    {
      rutina_ID: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
      },
      // Otros campos según tus necesidades

      // Relación con el modelo de TipoRutina
      tipoRutinaId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    }
  );
};