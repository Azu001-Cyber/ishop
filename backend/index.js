

const http = require('node:http')

const app = http.createServer((req, res)=>{
    if(req.url === '/' && req.statusCode === 200){
        res.writeHead(200, {'Content-Type':'text/plain'})
        res.end('Welcome to the node server')
    }

})

const PORT = 3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
