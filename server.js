const http = require('http')
const app = require('./app')

const port = process.env.PORT || process.argv[2] || 3000

const server = http.createServer(app)
server.listen(port, () => {
    console.log(`Server active on port ${port}`)
})

module.exports = server
