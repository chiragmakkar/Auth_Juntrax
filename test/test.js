const chai = require('chai')
const jwt = require('jsonwebtoken')
const chaiHttp = require('chai-http')
const server = require('../server')

chai.use(chaiHttp)

var testdata = {
    "username": "dummy",
    "password": "dummy123",
}

var token = jwt.sign(testdata, "139.A.Z.X", {
    expiresIn: 86400 // expires in 24 hours
})

var globalDummyToken = token

describe('Routes', function () {
    this.timeout(20000)
    describe('/POST login', () => {
        it('it should return token', (done) => {
            let cred = {
                username: testdata.username,
                password: testdata.password
            }
            chai.request(server)
                .post('/login')
                .send(cred)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('token').eql(globalDummyToken);
                    done();
                });
        });
    });
})