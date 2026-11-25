

const server = require('node:http');
const app = server()
const PORT = 3055

app.createServer((req, res) =>{
    if(req.url === '/my-server' && req.method === 'GET'){
        res.writeHead({'Content-Type':'text/plain'})
        res.end('Welcome')
    }
})

app.listen(PORT, console.log('Server is running'))