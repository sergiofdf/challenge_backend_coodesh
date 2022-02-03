import request from "supertest";

import { app } from "../../app";

describe("Route [/]", () => {
  it("should return status code 200 and message", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.text).toBe(
      '"Back-end Challenge 2021 🏅 - Space Flight News"'
    );
  });
});

describe("Route [get/articles/]", () => {
  it("should return list of 10 articles for pagination", async () => {
    const response = await request(app).get("/articles/");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(10);
  });
});

describe("Route [get/articles/id/]", () => {
  it("should return only the specif ID", async () => {
    const id = 13818;
    const response = await request(app).get(`/articles/${id}`);

    expect(response.status).toBe(200);
    expect(response.body[0].id).toBe(id);
  });
});

// describe("Route [post/articles/]", () => {
//   it("should create new article", async () => {
//     const response = await request(app).post("/articles/").send({
//       featured: false,
//       title: "Supertest",
//       url: "http://supertest.com",
//       imageUrl: "http://supertestimage.com",
//       newsSite: "http://supertestsite.com",
//       summary: "Supertest Summary",
//       publishedAt: "01-02-2022",
//       updatedAt: "02-02-2022",
//       launches: [],
//       events: [],
//     });

//     expect(response.status).toBe(200);
//     console.log(response);
//   });
// });
