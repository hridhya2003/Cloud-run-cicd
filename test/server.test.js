const request = require("supertest");
const app = require("../server");  // Import app, NOT start the server

describe("Server Tests", () => {
  let server;

  beforeAll(() => {
    server = app.listen(4000); // Start server on test port
  });

  afterAll((done) => {
    server.close(done); // Close server after tests
  });

  it("should return a 200 response", async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toBe(200);
  });
});

