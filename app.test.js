const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('responds with 200 OK', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
  it('responds addresses with 200 OK', async () => {
    const response = await request(app).get('/addresses');
    expect(response.status).toBe(200);
  });
  it('responds addresses with 404 not found', async () => {
    const invalidData = {};
    const response = await request(app)
      .post('/addresses')
      .send(invalidData);
    expect(response.status).toBe(404);
  });

  it('responds with HTML', async () => {
    const response = await request(app).get('/');
    expect(response.headers['content-type']).toMatch(/text\/html/);
  });
});
