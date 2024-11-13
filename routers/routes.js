// routes/bookRoutes.js
import express from 'express';
import { getAllBooks, createBook, updateBook, deleteBook } from '../controllers/bookController.js';
import { roleMiddleware } from '../middlewares/roleMiddleware.js';

const bookRouter = express.Router();

bookRouter.get('/', getAllBooks); // Todos los usuarios pueden ver libros
bookRouter.post('/', roleMiddleware("admin"), createBook); // Solo admin puede crear
bookRouter.put('/:id', roleMiddleware("admin"), updateBook); // Solo admin puede actualizar
bookRouter.delete('/:id', roleMiddleware("admin"), deleteBook); // Solo admin puede eliminar

export default bookRouter;

