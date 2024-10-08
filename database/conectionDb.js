import { Sequelize } from "sequelize";
import { DB_PASSWORD } from "../config.js";

const conection_db = new Sequelize('book_app', 'root', DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
  });

export default conection_db