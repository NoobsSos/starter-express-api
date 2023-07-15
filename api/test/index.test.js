import request from "supertest";
import { app } from "../index.js";
import { response } from "express";

// CHANGE DATA TO TEST

// describe("POST /mentor", () => {
//     describe("given enought of data", () => {
//         test("should respond 201", async () => {
//             const response = await request(app).post("/mentor").send({
//                 firstName: "Mask",
//                 lastName: "Roma",
//                 city: "Lviv",
//                 email: "12344545679@gmail.com",
//                 qualification: "Уроки вокалу",
//                 password: "122133123",
//                 age: 57,
//                 yearOfExpierience: 23
//             })
//             expect(response.statusCode).toBe(201)
//         })
//     })
// })

// CHANGE DATA TO TEST

// describe("POST /student/register", () => {
//     describe("given enought of data", () => {
//         test("should respond 201", async () => {
//             const response = await request(app).post("/student/register").send({
//                 firstName: "Mask",
//                 lastName: "Roma",
//                 city: "Lviv",
//                 email: "1545679@gmail.com",
//                 password: "122133123",
//             })
//             expect(response.statusCode).toBe(201)
//         })
//     })
// })


describe("POST /student/login", () => {
    describe("given enought of data", () => {
        test("should respond 200", async () => {
            const response = await request(app).post("/student/login").send({
                email: "1234@gmail.com",
                password: "123123",
            })
            expect(response.statusCode).toBe(200)
        })
    })

    describe("given wrong data", () => {
        test("should respond 500", async () => {
            const response = await request(app).post("/student/login").send({
                email: "123431123@gmal.com",
                password: "123123",
            })
            expect(response.statusCode).toBe(400)
        })
    })
})

describe("POST /mentor/login", () => {
    describe("given enought of data", () => {
        test("should respond 200", async () => {
            const response = await request(app).post("/mentor/login").send({
                email: "123@gmal.com",
                password: "123123",
            })
            expect(response.statusCode).toBe(200)
        })
    })

    describe("given wrong data", () => {
        test("should respond 500", async () => {
            const response = await request(app).post("/mentor/login").send({
                email: "123431123@gmal.com",
                password: "123123",
            })
            expect(response.statusCode).toBe(400)
        })
    })
})


describe("POST /note/student", () => {
    describe("given all data and student exist", () => {
        test("should respond 201", async () => {
            const response = await request(app).post("/note/student").send({
                userId: "6435bcff95c78659f474e4a3",
                text: "everything works fine"
            })
            expect(response.statusCode).toBe(201)
        })
    })

    describe("given all data and student not exist", () => {
        test("should respond 409", async () => {
            const response = await request(app).post("/note/student").send({
                userId: "6435bcft654f95c78619f474e4a3",
                text: "everything works fine"
            })
            expect(response.statusCode).toBe(409)
        })
    })

    describe("without text", () => {
        test("should respond 409", async () => {
            const response = await request(app).post("/note/student").send({
                userId: "6435bcff95c78659f474e4a3",
                text: ""
            })
            expect(response.statusCode).toBe(409)
        })
    })

    describe("without text and user not exist", () => {
        test("should respond 409", async () => {
            const response = await request(app).post("/note/student").send({
                userId: "6435bcaf95c78659f474e4a3",
                text: ""
            })
            expect(response.statusCode).toBe(409)
        })
    })
})

describe("POST /note/mentor", () => {
    describe("given all data and mentor exist", () => {
        test("should respond 201", async () => {
            const response = await request(app).post("/note/mentor").send({
                userId: "64343ab14dc32790de9a5942",
                text: "everything works fine"
            })
            expect(response.statusCode).toBe(201)
        })
    })

    describe("given all data and mentor not exist", () => {
        test("should respond 409", async () => {
            const response = await request(app).post("/note/mentor").send({
                userId: "6435bcft654f95c78619f474e4a3",
                text: "everything works fine"
            })
            expect(response.statusCode).toBe(409)
        })
    })

    describe("without text", () => {
        test("should respond 409", async () => {
            const response = await request(app).post("/note/mentor").send({
                userId: "64343ab14dc32790de9a5942",
                text: ""
            })
            expect(response.statusCode).toBe(409)
        })
    })

    describe("without text and user not exist", () => {
        test("should respond 409", async () => {
            const response = await request(app).post("/note/mentor").send({
                userId: "6435bcaf95c78659f474e4a3",
                text: ""
            })
            expect(response.statusCode).toBe(409)
        })
    })
})


describe("POST /blog", () => {
    describe("Given enought of data", () => {
        test("should response 201", async () => {
            const response = await request(app).post("/blog").send({
                mentor: "64343ab14dc32790de9a593f",
                text: "integration test"
            })
            expect(response.statusCode).toBe(201)
        })

        test("should return json", async () => {
            const response = await request(app).post("/blog").send({
                mentor: "64343ab14dc32790de9a593f",
                text: "integration test2"
            })
            expect(response.headers["content-type"]).toMatch(/application\/json/);
        })
    })
})

describe("POST /lesson", () => {
    describe("student take lesson", () => {
        test("should response 201", async () => {
            const response = await request(app).post("/lesson").send({
                mentor: "6435c4edc4ee243eb809a484",
                student: "644ccbdd4cd361a2bca5f4d4",
                sphere: "test",
                duration: 120,
                location: "offline",
                alone: "true"
            })
            expect(response.statusCode).toBe(201)
        })

        test("should return json", async () => {
            const response = await request(app).post("/lesson").send({
                mentor: "6435c4edc4ee243eb809a484",
                student: "644ccbdd4cd361a2bca5f4d4",
                sphere: "test",
                duration: 120,
                location: "offline",
                alone: "true"
            })
            expect(response.headers["content-type"]).toMatch(/application\/json/);
        })
    })
})

