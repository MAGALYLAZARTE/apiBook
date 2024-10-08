import conection_db from "../database/conectionDb.js";
import { DataTypes } from "sequelize";

const bookModel = conection_db.define(
    'Book',
    {
      // Model attributes are defined here
      bookTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      authorName: {
        type: DataTypes.STRING,
        allowNull: false,
        // allowNull defaults to true
      },
      bookDescription: {
        type: DataTypes.STRING,
        allowNull: false,
        // allowNull defaults to true
      },
    },
    {
    TimeStamp: false
    },
  );
  
  // `sequelize.define` also returns the model
  console.log(bookModel === conection_db.models.Book); // true

  export default bookModel