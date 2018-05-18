const chai = require('chai')
const jwt = require('jsonwebtoken')
const chaiHttp = require('chai-http')
const server = require('../server')
const should = chai.should()

const request = require('request')

chai.use(chaiHttp)

var testdata = {
    "username": "dummy",
    "password": "dummy123",
}

var token = jwt.sign(testdata, "139.A.Z.X", {
    expiresIn: 86400 // expires in 24 hours
})

var globalDummyToken = token


describe('Routes', () => {
    describe('GET /', () => {
        it('it should return a welcome message', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    done()
                })
        })
    })

    describe('POST /login', () => {
        it('it should return token', (done) => {
            let cred = {
                username: testdata.username,
                password: testdata.password
            }
            chai.request(server)
                .post('/login')
                .send(cred)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('token').eql(globalDummyToken)
                    done()
                })
        })
    })

    describe('POST /log', () => {
        it('it should return array of json(log)', (done) => {
            let param = {
                token: globalDummyToken,
                timestamp1: 1526668839.79,
                timestamp2: 1526669381.699
            }
            chai.request(server)
                .post('/log')
                .send(param)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('array')
                    done()
                })
        })
    })

    describe('POST /logs', () => {
        it('it should return array of json(all logs)', (done) => {
            let param = {
                token: globalDummyToken
            }
            chai.request(server)
                .post('/logs')
                .send(param)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('array')
                    done()
                })
        })
    })

    describe('POST /geo', () => {
        it('it should return an address', (done) => {
            let param = {
                lat: 40.714224,
                lng: -73.961452
            }
            chai.request(server)
                .post('/geo')
                .send(param)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    done()
                })
        })
    })

    describe('POST /status', () => {
        it('it should return status', (done) => {
            let param = {
                token: globalDummyToken
            }
            chai.request(server)
                .post('/status')
                .send(param)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    done()
                })
        })
    })

    describe('POST /uptime', () => {
        it('it should return uptime(in seconds)', (done) => {
            let param = {
                token: globalDummyToken
            }
            chai.request(server)
                .post('/uptime')
                .send(param)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    done()
                })
        })
    })
})