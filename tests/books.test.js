import request  from "supertest"
import {app, server} from "../app.js"
import conection_db from "../database/conectionDb.js"

describe ('crud books', () => {
    test ("should return a response 200 and type json", async () =>{
        const response = await request(app).get("/books")
        expect(response.statusCode).toBe(200)
        expect(response.header["content-type"]).toBe("application/json; charset=utf-8")
    })

    

    test('should create a book' , async () => {
        const bookData = await request(app).post("/books").send({
            bookTitle: "El señor de los anillos",
            authorName: "J.R.R. Tolkien",
            bookDescription: "Un libro de fantasia"
        })
        const response = await request(app).post('/books').send(bookData)
        expect(response.statusCode).toBe(201)
        expect(response.body.title).toBe(bookData.bookTitle);
        expect(response.body.author).toBe(bookData.authorName);
        expect(response.body.description).toBe(bookData.bookDescription);
    })
});

afterAll (() => {
    server.close()
    conection_db.close()
 })

