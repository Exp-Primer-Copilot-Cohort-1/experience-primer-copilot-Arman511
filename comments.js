// Create web server 
const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res) {
    if (req.url === '/comments') {
        fs.readFile('./comments.json', 'utf-8', function(err, data) {
            if (err) {
                console.log(err)
            }
            res.writeHead(200, {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
            res.end(data)
        })
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.end('<h1>Hello World</h1>')
    }
})

server.listen(port, function() {
    console.log('Listening on port ' + port)
})
