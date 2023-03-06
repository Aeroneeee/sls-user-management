const request = require('supertest');
const app = require('../server');

let server;

beforeAll(() => {
  server = app.listen(8080);
});

afterAll(() => {
  server.close();
});

describe('Test the API endpoints', () => {
  test('GET /api/users should return all users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  let userId;
  test('POST /api/users should create a new user', async () => {
    const user = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      username: 'johndoe',
      password: 'password',
    };
    const response = await request(app).post('/api/users').send(user);
    userId = response.body.id;
    expect(response.statusCode).toBe(201);
    expect(response.body.firstName).toBe(user.firstName);
  });

  test('GET /api/users/:id should return a specific user', async () => {
    const response = await request(app).get(`/api/users/${userId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(userId);
  });

  test('PUT /api/users/:id should update a user', async () => {
    const updatedUser = {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@example.com',
      username: 'janedoe',
      password: 'password',
    };
    const response = await request(app).put(`/api/users/${userId}`).send(updatedUser);
    expect(response.statusCode).toBe(200);
    expect(response.body.firstName).toBe(updatedUser.firstName);
  });

  test('DELETE /api/users/:id should delete a user', async () => {
    const response = await request(app).delete(`/api/users/${userId}`);
    expect(response.statusCode).toBe(204);
  });
});
