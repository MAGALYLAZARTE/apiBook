import express from 'express';
import { getAllBooks, createBook } from '../controllers/bookController.js';

const bookRouter = express.Router ()

bookRouter.get('/books', getAllBooks)
bookRouter.post('/books', createBook)

export default bookRouter
