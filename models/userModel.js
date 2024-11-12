import conection_db from "../database/conectionDb.js";
import { DataTypes } from "sequelize";

const userModel = conection_db.define(
    "User",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Para evitar emails duplicados
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "user", // Valor por defecto, puedes cambiarlo según tu preferencia
      },
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );

export default userModel;
