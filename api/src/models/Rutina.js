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
      daysPerWeek: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }
  );
};