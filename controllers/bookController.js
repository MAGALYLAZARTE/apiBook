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

export const createBook = async(req,res)=>{
    try{
        const newBook = await bookModel.create(req.body)
        res.status(201).json(newBook)
    }
        catch(error){
            res.json(message, error.message)
        }
}