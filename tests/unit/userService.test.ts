import request from "supertest";

import app from "../../src/index";
import { reqaddUser } from "../../src/utils/data/user.test.data";

const token = process.env.TOKEN;
let userId = describe("POST /api/users", () => {
  test("should create a user", async () => {
    return request(app)
      .post("/api/users")
      .set("Authorization", `${token}`)
      .send(reqaddUser)
      .expect(201)
      .then(({ body }) => {
        userId = body.id;
      });
  });
});

describe("/api/users", () => {
  it("should return all users", async () => {
    return request(app)
      .get("/api/users")
      .set("Authorization", `${token}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});

describe("GET /api/users/:id", () => {
  test("should return only 1 user", async () => {
    return request(app)
      .get(`/api/users/${userId}`)
      .set("Authorization", `${token}`)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

describe("DELETE /api/users/:id", () => {
  test("should delete a user", async () => {
    return request(app)
      .delete(`/api/users/${userId}`)
      .set("Authorization", `${token}`)
      .expect(200);
  });
});

describe("GET /api/users/", () => {
  test("should not show the users a users Unauthorized", async () => {
    return request(app).get(`/api/users/`).expect(401);
  });
});
describe("GET /api/users/", () => {
  test("should not show the users a users Forbidden", async () => {
    return request(app)
      .get(`/api/users/`)
      .set("Authorization", `123`)
      .expect(403);
  });
});
