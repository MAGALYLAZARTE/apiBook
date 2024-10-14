import bookModel from "../models/bookModel.js"

export const getAllBooks = async(req,res)=>{
    try{
        const books = await bookModel.findAll()
        res.json(books)
    }
        catch(error){ 
            res.json(message, error.message)
        }
}

export const createBook = async (req, res) => {
    try {
      const newBook = await bookModel.create(req.body);
      res.status(201).json(newBook);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export const deleteBook = async (req, res) => {
    try {
      const bookId = req.params.id;
      const deletedBook = await bookModel.destroy({
        where: { id: bookId },
      });

      if (deletedBook === 0) {
        return res.status(404).json({ message: 'Libro no encontrado' });
      }

      res.status(200).json({ message: 'Libro eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // export const updateBook = async (req, rest) => {
  //   try {
  //     const bookId = req.params.id;
  //     const updatedBook = await bookModel.update(req.body, {
  //       where: { id: bookId },
  //     });
  //       if (bookId === 0) {
  //       return res.status(404).json({ message: 'Libro no encontrado' });
  //     }
  //   }
  //   catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // };
