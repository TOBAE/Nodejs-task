const path = require('path')
const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        let filePath = path.join(__dirname, 'portfolio', 'index.html')
        fs.readFile(filePath, 'utf8', (err, data) => {
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.end(data)
            console.log(data)
        })
    }
    else if (req.url === '/about'){
        let filePath = path.join(__dirname, 'portfolio', 'about.html')
        fs.readFile(filePath, 'utf8', (err, data) => {
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.end(data)
            console.log(data)
        })
    }

    else if (req.url === '/contact'){
        let filePath = path.join(__dirname, 'portfolio', 'contact.html')
        fs.readFile(filePath, 'utf8', (err, data) => {
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.end(data)
            console.log(data)
        })
    }
    else{
            let filePath = path.join(__dirname, 'portfolio', 'error.html')
            fs.readFile(filePath, 'utf8', (err, data) => {
                res.writeHead(404, {'Content-Type' : 'text/html'})
                res.end(data)
                console.log(data)
            })
    }
})

const port = 5000
server.listen(port, () => {
    console.log(`srever is working at ${port}`)
})