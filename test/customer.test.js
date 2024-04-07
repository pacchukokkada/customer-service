// require('./test-helper')
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;
const app = require('../app');

describe('Checking the CRUD operations of customer', () => {
  it('should add the customer', (done) => {
    chai.request(app)
      .post('/customer')
      .send({
        identifier: 'firstCust',
        name: 'test',
        email: 'prashtest@gmail.com',
        password: 'XXXX',
        address: 'test-address',
        phone: '1234567890'
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('should get the customer details of given identifer', (done) => {
    chai.request(app)
      .get('/customer')
      .query({identifier: 'firstCust'})
      .end((err, res) => {
        expect(res.status).eqls(200)
        expect(res.body[0].name).eqls('test');
        done();
      });
  });
});
