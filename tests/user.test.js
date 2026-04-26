const request = require('supertest');
const app = require('../app');

describe('User Auth', () => {
  it('should register user', async () => {
    const res = await request(app).post('/users/register').send({
      email: 'test2@test.com',
      password: '123456'
    });

    expect(res.statusCode).toBe(201);
  });
});
