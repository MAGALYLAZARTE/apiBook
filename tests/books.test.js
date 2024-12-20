import request  from "supertest"
import {app, server} from "../app.js"
import conection_db from "../database/conectionDb.js"
import bookModel from "../models/bookModel.js";

describe ('crud books', () => {
        test ("should return a response 200 and type json", async () =>{
            const response = await request(app).get("/books")
            expect(response.statusCode).toBe(200)
            expect(response.header["content-type"]).toBe("application/json; charset=utf-8")
        })

    
        test('should create a book', async () => {
            const bookData = {
                bookTitle: "El señor de los anillos",
                authorName: "J.R.R. Tolkien",
                bookDescription: "Un libro de fantasía"
            };
        
            
            const response = await request(app)
                .post('/books')
                .send(bookData)
        
        
            expect(response.statusCode).toBe(201);
        
            expect(response.body.bookTitle).toBe(bookData.bookTitle);
            expect(response.body.authorName).toBe(bookData.authorName);
            expect(response.body.bookDescription).toBe(bookData.bookDescription);
        });
    
        test ('should delete a book', async () => {
            const deleteBook = await bookModel.create({
                bookTitle: "El señor de los anillos",
                authorName: "J.R.R. Tolkien",
                bookDescription: "Un libro de fantasía"
                
            });

            const response = await request(app).delete(`/books/${deleteBook.id}`)
            expect(response.statusCode).toBe(200)
            expect(response.body.message).toBe('Libro eliminado correctamente')
        });
        
        test ('should update a book', async () => {
            
            const updateBook = await bookModel.create({
                bookTitle: "El señor de los anillos",
                authorName: "J.R.R. Tolkien",
                bookDescription: "Un libro de fantasía"
            });
            const response = await request(app).put(`/books/${updateBook.id}`).send({
                bookTitle: "update El señor de los anillos",
                authorName: "update J.R.R. Tolkien",
                bookDescription: "update Un libro de fantasía"
            });
            expect(response.statusCode).toBe(200)
            expect(response.body.message).toBe('Libro actualizado correctamente')
            // expect(response.body.bookTitle).toBe("El señor de los anillos")
            // expect(response.body.authorName).toBe("J.R.R. Tolkien")
            // expect(response.body.bookDescription).toBe("Un libro de fantasía")
            });

        afterAll (() => {
            server.close()
            conection_db.close()
         })

         afterEach(async () => {
            await bookModel.destroy({
                where: { bookTitle: "El señor de los anillos" }
            })
        })

});






