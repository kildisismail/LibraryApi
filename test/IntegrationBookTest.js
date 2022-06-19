//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
port = process.env.PORT || 3000;

//Require the dev-dependencies
const { response } = require("express");
const mongoose = require("mongoose");

const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const app = require("../../server");
const server = `http://localhost:${port}`;

describe("Book GetAll", () => {
  it("Get : Book", (done) => {
    chai
      .request(server)
      .get("/book")
      .end((err, response) => done());
  });
});

describe("Book Insert", () => {
  it("Post : Book", (done) => {
    chai
      .request(server)
      .post("/book")
      .send({
        title: "Test Case Book",
        author: "Anonymous",
        price: 135,
        isbn: "t010102",
        language: "TR",
        numberOfPages: 125,
        publisher: "Test case publisher",
})
      .end((err, response) => {
        done();
      });
  });
});