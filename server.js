import http from 'node:http';

const PORT = 5001;
const  server = http.createServer((req, res)=>{
    res.end('hello from the server');
});

server.listen(PORT,()=>{
    console.log('server is 5001');
})