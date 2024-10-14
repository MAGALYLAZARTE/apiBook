import { Sequelize } from "sequelize";
import { DB_PASSWORD, DB_TEST_NAME, DB_DEV_NAME, NODE_ENV , DB_USER , DB_HOST} from "../config.js";

const DB_NAME = NODE_ENV === 'test' ? DB_TEST_NAME : DB_DEV_NAME

const conection_db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    define: {
        timestamps: false
    }
  });

export default conection_db