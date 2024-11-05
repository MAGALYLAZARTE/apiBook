import conection_db from "../database/conectionDb.js";
import { DataTypes } from "sequelize";

const bookModel = conection_db.define(
    'Book',
    {
      // Los atributos del modelo se definen aquí
      bookTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      authorName: {
        type: DataTypes.STRING,
        allowNull: false,
        // allowNull cuando el valor es verdadero
      },
      bookDescription: {
        type: DataTypes.STRING,
        allowNull: false,
        // allowNull cuando el valor es verdadero
      },
    },
    {
    TimeStamp: false
    },
  );
  
  // `sequelize.define` also returns the model
  console.log(bookModel === conection_db.models.Book); // true

  export default bookModel