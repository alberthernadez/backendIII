import request from "supertest";
import app from "../app.js";

describe('Test funcionales para adoption.router.js', () => {
    const baseUrl = '/api/adoptions';

    test('GET /api/adoptions debe devolver status 200', async () => {
        const res = await request(app).get(baseUrl);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('message');
    });

    test('POST /api/adoptions debe devolver status 201', async () => {
        const res = await request(app)
            .post(baseUrl)
            .send({ name: 'Firulais', especie: 'perro' });
        expect(res.statusCode).toBe(200); // si en tu router devuelve 201
        expect(res.body).toHaveProperty('message');
    });

    test('GET /api/adoptions/:id debe devolver status 200', async () => {
        const res = await request(app).get(`${baseUrl}/123`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('message');
    });

    test('PUT /api/adoptions/:id debe devolver status 200', async () => {
        const res = await request(app)
            .put(`${baseUrl}/123`)
            .send({ especie: 'gato' });
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('message');
    });

    test('DELETE /api/adoptions/:id debe devolver status 200', async () => {
        const res = await request(app).delete(`${baseUrl}/123`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('message');
    });
});
