//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
port = process.env.PORT || 3000;

//Require the dev-dependencies
const { response } = require("express");
const mongoose = require("mongoose");

const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const app = require("../../app");
const server = `http://localhost:${port}`;

describe("Book GetAll", () => {
  it("Get : Book", (done) => {
    chai
      .request(server)
      .get("/book")
      .end((err, response) => done());
  });
});

describe("Book Get by ID", () => {
  it("Get : Book by ID", (done) => {
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
        const bookId = response.body.data._id; 
        chai
          .request(server)
          .get(`/book/${bookId}`)
          .end((err, response) => {
            chai.expect(response).to.have.status(200);
            chai.expect(response.body.result).to.be.true;
            chai.expect(response.body.data.title).to.equal("Test Case Book");
            done();
          });
      });
  });
});

describe("Book Update", () => {
  it("Put : Book", (done) => {
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
        const bookId = response.body.data._id; 
        chai
          .request(server)
          .put(`/book/${bookId}`)
          .send({
            title: "Updated Book Title",
            price: 150,
          })
          .end((err, response) => {
            chai.expect(response).to.have.status(200);
            chai.expect(response.body.result).to.be.true;
            chai.expect(response.body.data.title).to.equal("Updated Book Title");
            chai.expect(response.body.data.price).to.equal(150);
            done();
          });
      });
  });
});

describe("Book Delete", () => {
  it("Delete : Book", (done) => {
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
        const bookId = response.body.data._id; 
        chai
          .request(server)
          .delete(`/book/${bookId}`)
          .end((err, response) => {
            chai.expect(response).to.have.status(200);
            chai.expect(response.body.result).to.be.true;
            chai.expect(response.body.message).to.equal("book deleted");
            done();
          });
      });
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