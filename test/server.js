const request = require('supertest');
const app = require('../server'); // Import the app instance

let server;

beforeAll((done) => {
  server = app.listen(4000, () => done()); // Start server before tests
});

afterAll((done) => {
  server.close(done); // Close server after tests
});

test('should return a 200 response', async () => {
  const res = await request(server).get('/');
  expect(res.status).toBe(200);
  expect(res.text).toBe('Hello, GCP! Your Node.js app is running.');
});
