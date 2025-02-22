const request = require("supertest");
const app = require("../server"); // Adjust if necessary

describe("Server Tests", () => {
  it("should return a 200 response", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});
