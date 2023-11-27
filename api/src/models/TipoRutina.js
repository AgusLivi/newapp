const { DataTypes } = require("sequelize");
const { v4: UUIDV4 } = require("uuid");

module.exports = (sequelize) => {
    sequelize.define(
    "TipoRutina",
    {
      tipoRutina_ID: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      daysPerWeek: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }
  );


};